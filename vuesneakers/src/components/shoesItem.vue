<template>
    <div class="item__wrapper">
            <div class="item__img">
                <router-link 
                    :to="{
                    name: 'shoesPage',
                    params:{
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        imgUrl: item.imgUrl
                        }
                    }">
                    <img :src="item.imgUrl" alt="shoesItem">
                </router-link>
            </div>
            <div class="item__about">
                    <div class="item__name">
                        {{item.name}}
                    </div>
                <div class="item__inner">
                    <div class="item__price">
                            <p class="price__title">Цена:</p>
                            <p>{{item.price}} руб.</p>
                    </div>
                    <div class="item__btn">
                        <svg 
                        v-show="!isAddedToCart" 
                        @click="addToCart"
                        style="width: 32px; height: 32px; fill: currentColor;">
                            <icon 
                            :iconName="`icon-addToCart`"
                            />
                        </svg>

                        <svg 
                        v-show="isAddedToCart"
                        style="width: 32px; height: 32px; fill: currentColor;">
                            <icon 
                            :iconName="`icon-addedToCart`"
                            />
                        </svg>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import icon from "@/components/icon.vue"
export default {
    name: `shoesItem`,
    components:{
            icon
        },
    methods:{
        addToCart(){
            this.isAddedToCart = !this.isAddedToCart
            this.addedToCart = !this.addedToCart
            let item = {
                name: this.item.name,
                price:this.item.price, 
                id: this.item.id, 
                imgUrl: this.item.imgUrl
            }
            this.$store.commit(`addToCart`, item)
            this.$store.commit(`changeTotalPrice`, this.item.price)
        },
    },
    props:{
        item:{
            // name:{
            //     type: String
            // },
            // price:{
            //     type: Number
            // },
            // imgUrl:{
            //     type: String
            // },
            // id:{
            //     type: Number
            // }
        }
    },
    data(){
        return{
            isAddedToCart: false
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