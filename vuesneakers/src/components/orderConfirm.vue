<template>
    <div class="root">
        <div class="orderConfirm__wrapper">
            <svg class="orderConfirm__img">
                <icon
                    :iconName="`icon-happyEmoji`"
                />
            </svg>
            <h2 class="orderConfirm__title">Заказ оформлен!</h2>
            <p class="orderConfirm__subtitle">В ближайшее время с Вами свяжется оператор!</p>
        </div>
    </div>
</template>

<script>
import icon from './icon.vue';
export default{
    components:{
        icon
    }
}
</script>

<style lang="scss" scoped>
.orderConfirm__wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.orderConfirm__img{
    width: 60px;
    height: 60px;
    margin-bottom: 40px;
    use{
        cursor: default;
    }
}
.orderConfirm__title{
    font-size: 26px;
    margin-bottom: 20px;
}
.orderConfirm__subtitle{
    font-size: 18px;
    max-width: 250px;
    text-align: center;
}
</style>