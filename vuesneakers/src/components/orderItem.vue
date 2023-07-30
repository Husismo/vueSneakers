<template>
    <div class="order__item">
        <img :src="orderItem.imgUrl" alt="item-img" class="item__img">
        <div class="item__inner">
            <p class="item__name">{{ orderItem.name }}</p>
            <p class="item__price">{{ orderItem.price }} руб.</p>
        </div>
    </div>
</template>

<script>
export default{
    props:{
        orderItem:{
            name:{
                type: String
            },
            price:{
                type: Number,
            },
            imgUrl:{
                type: String,
            },
            id:{
                type: Number
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.order__item{
    display: flex;
    align-items: center;
    margin-top: 60px;
}
.item__img{
    width: 120px;
    height: 100px;
    margin-right: 20px;
}
.item__inner{
    display: flex;
    flex-direction: column;
}
.item__name{
    font-size: 18px;
    margin-bottom: 10px;
}
.item__price{
    font-size: 14px;
    font-weight: 700;
}
</style>