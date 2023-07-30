<template>
    <div class="root">
        <headerComponent />
        <div class="order__wrapper">
            <div class="container">
                <div class="order__inner">
                    <div class="cart__head">
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
                    <div class="order__content">
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
                                :style="{'border-color': phoneNumberError}" 
                                class="form__number" placeholder="Номер телефона" type="number">
                                <input 
                                v-model.trim="order.email"
                                :style="{'border-color': emailError}" 
                                class="form__email" placeholder="E-mail" type="email">
                                <input 
                                v-model.trim="order.fullName"
                                :style="{'border-color': fullNameError}" 
                                class="form__fullName" placeholder="Фамилия Имя Отчество" type="text">
                                <p class="form__title">адрес</p>
                                <input 
                                v-model.trim="order.adress"
                                :style="{'border-color': adresError}" 
                                class="form__adress" placeholder="Город, улица, дом, квартира" type="text">
                                <textarea v-model="order.comment" placeholder="Комментарий к заказу" class="form__comment"></textarea>
                            </form>
                                <button 
                                class="order__btn"
                                :class="{disabledBtn: isBtnDisabled}"
                                form="order-form"
                                type="submit"
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
export default{
    components:{
        headerComponent,
        icon,
        orderItem
    },
    data(){
        return{
            phoneNumberError: `#F3F3F3`,
            emailError: `#F3F3F3`,
            fullNameError: `#F3F3F3`,
            adresError: `#F3F3F3`,
            isBtnDisabled: false,
            cart: [],
            order: {
                phoneNumber: '',
                email: '',
                fullName: '',
                adress: '',
                comment: '',
            }
        }
    },
    methods:{
        isValidInput(){ // все это костыли
            if (!(this.order.phoneNumber.length == 11)){
                this.phoneNumberError = `red`;
            } else {
                this.phoneNumberError = `#F3F3F3`;
            }
            if (this.order.email.length == 0){
                this.emailError = `red`;
            } else {
                this.emailError = `#F3F3F3`;
            }
            if (this.order.fullName.length == 0){
                this.fullNameError = `red`;
            } else {
                this.fullNameError = `#F3F3F3`;
            }
            if(this.order.adress.length == 0){
                this.adresError = `red`;
            }else {
                this.adresError = `#F3F3F3`;
            }
        },
        createOrder(event){
            event.preventDefault();
            this.isValidInput() // костыли
            if(this.phoneNumberError == `#F3F3F3`
            && this.emailError == `#F3F3F3`
            && this.fullNameError ==`#F3F3F3`
            && this.adresError == `#F3F3F3`){
                this.isBtnDisabled = true // костыли
                document.querySelector(`.order__btn`).setAttribute(`disabled`, true) //костыли
                this.$api.postOrder.postOrder({ 
                    order: this.order,
                    cart: this.cart
                }).then(({data}) => {
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
        input{
            margin-bottom: 20px;
            padding: 15px 10px;
            border: 1px solid #F3F3F3;
            border-radius: 100px;
            outline: none;
            transition: .3s;
            width: 100%;
        }
        input:hover{
            border-color: #d3d3d3;
        }
        input:focus{
            border-color: #a7a7a7;
        }
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }
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
}
.form__comment:hover{
    border-color: #d3d3d3;
}
.form__comment:focus{
    border-color: #a7a7a7;
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
}
.order__btn:hover{
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}
.inputError{
    border-color: red;
}
.disabledBtn{
    background: #7e7e7e;
}



</style>