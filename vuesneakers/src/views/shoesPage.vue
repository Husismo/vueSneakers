<template>
    <div class="root">
        <headerComponent />
        <div class="shoesPage__wrapper">
            <div class="container">
                <div class="shoesPage__inner">
                    <div class="shoesPage__head">
                        <router-link to="/">
                            <svg>
                                <icon
                                :iconName="`icon-back`"
                                />
                            </svg>
                            <div class="cart__title title">
                                Вернуться к ассортименту
                            </div>
                        </router-link>
                    </div>
                    <div class="shoes__item">
                        <img class="item__img" :src="imgUrl" alt="item__img">
                        <div class="item__inner">
                            <div class="item__name">
                                {{ name }}
                            </div>
                            <div class="item__price">
                                {{price}} руб.
                            </div>
                            <div class="item__btn">
                                <button @click="addToCart">
                                    добавить в корзину
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import headerComponent from '@/components/headerComponent.vue';
import icon from '@/components/icon.vue';
export default{
    data(){
        return{
        }
    },
    components:{
        icon,
        headerComponent
    },
    computed:{
        id(){
            return this.$route.params.id
        },
        name(){
            return this.$route.params.name
        },
        price(){
            return this.$route.params.price
        },
        imgUrl(){
            return this.$route.params.imgUrl
        },
        allItem(){
            return this.$store.getters.allItem
        }
    },
    methods:{
        // addToCart(){
        //     console.log(`Добавили в корзину:`, 
        //     {   
        //         name: this.name,
        //         price:this.price, 
        //         id: this.id, 
        //         imgUrl: this.imgUrl
        //     })
        // },
        addToCart(){
            let item = {
                name: this.name,
                price:this.price, 
                id: this.id, 
                imgUrl: this.imgUrl
            }
            this.$store.commit(`addToCart`, item)
            this.$store.commit(`changeTotalPrice`, this.price)
        }
    }
}
</script>

<style lang="scss" scoped>
.shoesPage__inner{
    padding: 45px;
}
.shoesPage__head{
    margin-bottom: 36px;
    svg{
        width: 32px;
        height: 32px;
        margin-right: 12px;
    }
    a{
        display: flex;
        display: flex;
        align-items: center;
    }
}
.cart__title{
    color: #000;
}
.shoes__item{
    display: flex;
}
.item__img{
    width: 300px;
    height: 280px;
    margin-right: 40px;
}
.item__inner{
    display: flex;
    flex-direction: column;
}
.item__name{
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 25px;
}
.item__price{
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 100px;
}
.item__btn{
    button{
        cursor: pointer;
        text-transform: uppercase;
        border: none;
        background-color: rgb(168, 205, 47);
        padding: 15px 30px;
        border-radius: 25px;
        font-weight: 700;
        font-size: 16px;
        color: #fff;
        transition: 0.3s;
    }
    button:hover{
        box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    }
}
</style>