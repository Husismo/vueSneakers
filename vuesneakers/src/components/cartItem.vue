<template>
    <div class="root">
        <div class="cart__item">
            <div class="cart__wrapper">
                <img class="item__img" :src="cartItem.imgUrl" alt="item-img">
                <div class="item__inner">
                    <div class="item__name">
                        {{cartItem.name}}
                    </div>
                    <div class="item__price">
                        {{cartItem.price}}
                    </div>
                </div>
            </div>
            <svg class="delete__btn" @click="removeFromCart()">
                <icon 
                :iconName="`icon-delete`"
                />
            </svg>
        </div>
    </div>
</template>

<script>
import icon from './icon.vue';
export default{
    components:{
        icon
    },
    methods:{
        removeFromCart(){
            // console.log(this.cartItem)
            this.$store.commit('removeFromCart', this.cartItem);
        }
    },
    props:{
        cartItem:{}
    }
}
</script>

<style lang="scss" scoped>
.cart__item{
    margin-top: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 20px;
    border: 1px solid #F3F3F3;
    padding: 0px 20px;
    transition: .3s;
    svg{
        width: 40px;
        height: 40px;
        align-items: end;
        color: #ecebeb;
        &:hover{
            color: #c5c5c5;
        }
    }
}
.cart__item:hover{
    box-shadow: 0px 14px 30px 0px rgba(0, 0, 0, 0.05);
}
.item__wrapper{
    display: flex;
}
.cart__wrapper{
    display: flex;
    align-items: center;
}
.item__img{
    width: 180px;
    height: 160px;
    margin-right: 20px;
}
.item__name{
    font-size: 22px;
    margin-bottom: 40px;
}
.item__price{
    font-size: 16px;
    font-weight: 700;
}

</style>