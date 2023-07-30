<template>
    <div class="root">
        <headerComponent />
        <div class="order__wrapper">
            <div class="container">
                <div class="order__inner">
                    <orderConfirm 
                    v-show="orderConfirm"
                    />
                    <div class="cart__head" v-show="!orderConfirm">
                        <router-link to="/cart">
                            <svg>
                                <icon
                                :iconName="`icon-back`"
                                />
                            </svg>
                        </router-link>
                        <div class="title">
                            Оформить заказ:
                        </div>
                    </div>
                    <div class="order__content" v-show="!orderConfirm">
                        <div class="order__items">
                            <orderItem 
                            :orderItem="item"
                            v-for="item in cart"
                            :key="item.id"
                            />
                        </div>
                        <div class="order-form__wrapper">
                            <form action="" id="order-form" @submit="createOrder">
                                <p class="form__title">Контакты</p>
                                <input 
                                v-model="order.phoneNumber"
                                :class="$v.order.phoneNumber.$error ? 'isInvalid': ''"
                                class="form__number" placeholder="Номер телефона" type="number">
                                <input 
                                v-model.trim="order.email"
                                :class="$v.order.email.$error ? 'isInvalid': ''"
                                class="form__email" placeholder="E-mail" type="email">
                                <input 
                                v-model.trim="order.fullName"
                                :class="$v.order.fullName.$error ? 'isInvalid': ''"
                                class="form__fullName" placeholder="Фамилия Имя Отчество" type="text">
                                <p class="form__title">адрес</p>
                                <input 
                                v-model.trim="order.adress"
                                :class="$v.order.adress.$error ? 'isInvalid': ''" 
                                class="form__adress" placeholder="Город, улица, дом, квартира" type="text">
                                <textarea v-model="order.comment" placeholder="Комментарий к заказу" class="form__comment"></textarea>
                            </form>
                                <button 
                                class="order__btn"
                                form="order-form"
                                type="submit"
                                :class="{'disabledBtn' : isBtnDisabled == true}"
                                >
                                    Оформить заказ
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import headerComponent from "@/components/headerComponent.vue";
import icon from "@/components/icon.vue";
import orderItem from '@/components/orderItem.vue';
import orderConfirm from '@/components/orderConfirm.vue';
import { validationMixin } from 'vuelidate';
import { required, minLength, email } from 'vuelidate/lib/validators'
export default{
    mixins: [validationMixin],
    components:{
        headerComponent,
        icon,
        orderItem,
        orderConfirm,
    },
    data(){
        return{
            cart: [],
            order: {
                phoneNumber: '',
                email: '',
                fullName: '',
                adress: '',
                comment: '',
            },
            isBtnDisabled: 'false',
            orderConfirm: false,
        }
    },
    validations:{
                order:{
                    phoneNumber:{ required, minLength: minLength(11)},
                    email:{required, email},
                    fullName: {required, minLength: minLength(8)},
                    adress:{required, minLength: minLength(10)}
                }
    },
    methods:{
        checkForm(){
            this.$v.order.$touch()
            if (!this.$v.order.$error){
                return true
            }
        },
        createOrder(event){
            event.preventDefault();
            if (this.checkForm()){
                this.isBtnDisabled = true // костыли
                document.querySelector(`.order__btn`).setAttribute(`disabled`, true) //костыли
                this.$api.postOrder.postOrder({ 
                order: this.order,
                cart: this.cart
            }).then(({data}) => {
                    this.orderConfirm = true
                    this.$store.commit(`clearCart`)
                })
                    .catch(e => {
                        console.log(e)
                    })
            }
        }
    },
    mounted(){
        this.cart = this.$store.getters.allItems
    }
}
</script>

<style lang="scss" scoped>
.order__inner{
    padding: 45px;
}
.order__content{
    display: flex;
    justify-content: space-around;
}
.order-form__wrapper{
    border-left: 1px solid #EAEAEA;
    padding: 0px 60px;
    width: 280px;
    form{
        display: flex;
        flex-direction: column;
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }
    }
}
.form__number, .form__email, .form__fullName, .form__adress{
    margin-bottom: 20px;
    padding: 15px 10px;
    border: 1px solid #F3F3F3;
    border-radius: 100px;
    outline: none;
    transition: .3s;
    width: 100%;
        &:hover{
            border-color: #d3d3d3;
        }
        &:focus{
            border-color: #a7a7a7;
        }
}
.form__title{
    font-size: 18px;
    text-transform: uppercase;
    text-align: center;
    font-weight: 700;
    margin-bottom: 10px;
}
.form__comment{
    font-family: 'Inter';
    resize: none;
    margin-bottom: 20px;
    border: 1px solid #F3F3F3;
    border-radius: 100px;
    padding: 15px 10px;
    outline: none;
    transition: .3s;
    width: 100%;
    &:hover{
        border-color: #d3d3d3;
    }
    &:focus{
        border-color: #a7a7a7;
    }
}
.order__btn{
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    padding: 16px 15px;
    border-radius: 18px;
    border: none;
    cursor: pointer;
    background: #9DD458;
    transition: .3s;
    width: 100%;
    &:hover{
        box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    }
}
.isInvalid{
    border-color: rgb(255, 74, 74);
    &::placeholder{
        color: rgb(255, 74, 74);
    }
    &:hover{
        border-color: rgb(255, 40, 40);
    }
    &:focus{
        border-color:rgb(255, 40, 40);
    }
}
.disabledBtn{
    background: #7e7e7e;
}



</style>