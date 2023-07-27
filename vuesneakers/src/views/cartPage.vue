<template>
    <div class="root">
        <headerComponent/>
        <div class="cart__wrapper">
            <div class="container">
                <div class="cart__inner">
                    <div class="cart__head">
                        <router-link to="/">
                            <svg>
                                <icon
                                :iconName="`icon-back`"
                                />
                            </svg>
                        </router-link>
                        <div class="cart__title title">
                            Корзина
                        </div>
                    </div>
                    <div class="cart__content">
                        <cartItem />
                        <cartItem />
                        <cartItem />

                        <div class="cart__info">
                            <div class="cart__total">
                                Итого: <span>21 150 руб.</span> 
                            </div>
                            <div class="cart__info__wrapper">
                                <button class="cart__btn">
                                    Оформить заказ
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
import cartItem from '@/components/cartItem.vue'
import icon from '@/components/icon.vue';
export default {
    components:{
        headerComponent,
        cartItem,
        icon
    }
}
</script>

<style lang="scss">
.cart__inner{
    padding: 45px;
}
.cart__head{
    display: flex;
    align-items: center;
    svg{
        width: 32px;
        height: 32px;
        margin-right: 12px;
    }
}
.cart__content{
    display: flex;
    flex-direction: column;
}
.cart__info{
    margin-top: 40px;
    padding-top: 40px;
    border-top:1px solid #EAEAEA ;
    text-align: center;
}
.cart__total{
    font-size: 20px;
    margin-bottom: 20px;
    span{
        font-weight: 700;
    }
}
.cart__btn{
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    padding: 16px 64px;
    border-radius: 18px;
    border: none;
    cursor: pointer;
    background: #9DD458;
}
</style>