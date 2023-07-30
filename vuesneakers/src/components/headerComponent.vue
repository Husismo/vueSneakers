<template>
    <header class="header">
        <div class="container">
            <div class="header__wrapper">
                <router-link to="/">
                    <div class="header__inner">
                        <img class="header__logo" src="@/assets/img/logo.png" alt="logo">
                        <div class="header__titles">
                        <h3 class="header__title">vue SNEAKERS</h3>
                        <h4 class="header__subtitle">Магазин лучших кроссовок</h4>
                        </div>
                    </div>
                </router-link>
                <nav class="header__nav">
                    <ul class="nav__list">
                        <li class="nav__link">
                            <router-link to="/cart" class="cart__link">
                                <svg>
                                    <icon 
                                    :iconName="`icon-cart`"
                                    />
                                </svg>
                                <div class="counter">
                                    {{totalPrice}} руб.
                                </div>
                            </router-link>
                        </li>
                        <li class="nav__link">
                            <router-link to="/favorite">
                                <svg>
                                    <icon 
                                    :iconName="`icon-favorite`"
                                    />
                                </svg>
                            </router-link>
                        </li>
                        <li class="nav__link">
                            <router-link to="/profile">
                                <svg>
                                    <icon 
                                    :iconName="`icon-profile`"
                                    />
                                </svg>
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
import icon from '@/components/icon.vue'
export default {
    components:{
        icon
    },
    data(){
        return{
        }
    },
    computed:{
        totalPrice(){
            return this.$store.getters.getTotalPrice
        }
    }
}
</script>

<style lang="scss" scoped>
svg{
    width: 18px;
    height: 18px;
}
header{
    padding-top: 45px;
}
.header__wrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 45px;
}
.container{
    border-radius: 20px 20px 0px 0px;
    border-bottom: 1px solid #EAEAEA;
}
.header__inner{
    display: flex;
    align-items: center;
}
.header__logo{
    width: 40px;
    height: 40px;
    margin-right: 16px;
}
.header__title{
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    color: #000;
}
.header__subtitle{
    font-size: 14px;
    font-weight: 400;
    color: #9D9D9D;
}
.header__nav{
    width: 200px;
}
.nav__list{
    display: flex;
    justify-content: space-between;
}
.nav__link:first-child{
    flex-grow: 3;
    display: flex;
    
}
.nav__link{
    flex-grow: 1;
}
.cart__link{
    display: flex;
    align-items: center;
}
.counter{
    margin-left: 10px;
    font-size: 14px;
    color: #5C5C5C;
    font-weight: 600;
}

</style>