<template>
    <div class="item__wrapper">
        <router-link 
            :to="{
                name: 'shoesPage',
                params:{
                    id: item.id,
                    name: item.title,
                    price: item.price,
                    imgUrl: item.imgUrl
                }
            }">
            <div class="item__img">
                    <img :src="item.imgUrl" alt="shoesItem">
            </div>
            <div class="item__about">
                    <div class="item__name">
                            {{item.title}}
                    </div>
                <div class="item__inner">
                    <div class="item__price">
                            <p class="price__title">Цена:</p>
                            <p>{{item.price}} руб.</p>
                    </div>
                    <div class="item__btn">
                        <svg style="width: 32px; height: 32px; fill: currentColor;">
                            <icon 
                            :iconName="`icon-addToCart`"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            </router-link>
    </div>
</template>

<script>
import icon from "@/components/icon.vue"
export default {
    name: `shoesItem`,
    components:{
            icon
        },
    props:{
        item:{
            title:{
                type: String
            },
            price:{
                type: Number
            },
            imgUrl:{
                type: String
            },
            id:{
                type: String
            }
        }
    },
    data(){
        return{
        }
    }
}
</script>

<style lang="scss" scoped>
.item__wrapper{
    border: 1px solid #F3F3F3;;
    width: 210px;
    height: 260px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    transition: .3s;
}
.item__wrapper:hover{
    box-shadow: 0px 14px 30px 0px rgba(0, 0, 0, 0.05);
    cursor: pointer;
}
.item__img img {
    max-width: 133px;
    max-height: 112px;
    margin-bottom: 14px;
}
.item__about{
    display: flex;
    flex-direction: column;
}
.item__name{
    margin-bottom: 14px;
    max-width: 150px;
}
.item__inner{
    display: flex;
    justify-content: space-between;
}
.item__price{
    font-size: 14px;
    font-weight: 700;
}
.price__title{
    color: #BDBDBD;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 11px;
}
.item__btn{
    width: 32px;
    height: 32px;
    color: #F2F2F2;
    svg:hover{
        font-weight: 400;
        color: #9DD458;
    }
}
</style>