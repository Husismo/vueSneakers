<template>
    <div class="root">
        <headerComponent />
        <div class="profile__wrapper">
            <div class="container">
                <div class="profile__inner">
                    <stopper 
                    v-if="orders.length == 0 && isLoading == false"
                    :imgName="`icon-angryEmoji`"
                    :title="`У вас нет заказов`"
                    :subTitle="`Оформите хотя бы один заказ.`"
                    />
                    <div class="profile__head" v-show="orders.length > 0">
                        <router-link to="/">
                            <svg>
                                <icon
                                :iconName="`icon-back`"
                                />
                            </svg>
                        </router-link>
                        <div class="cart__title title">
                            Мои покупки
                        </div>
                    </div>
                    <div class="loading__wrapper" v-show="isLoading">
                        <itemLoader/>
                        <itemLoader/>
                        <itemLoader/>
                        <itemLoader/>
                        <itemLoader/>
                        <itemLoader/>
                        <itemLoader/>
                        <itemLoader/>
                    </div>
                    <div class="profile__content" v-show="orders.length > 0">
                        <shoesItem 
                        :item="item"
                        v-for="item in orders"
                        :key="item.id"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import headerComponent from "@/components/headerComponent.vue";
import icon from "@/components/icon.vue";
import shoesItem from "@/components/shoesItem.vue";
import stopper from "@/components/stopper.vue";
import itemLoader from "@/components/itemLoader.vue"
export default{
    components:{
        headerComponent,
        icon,
        shoesItem,
        stopper,
        itemLoader
    },
    data(){
        return{
            orders: [
            ],
            isLoading: true,
        }
    },
    methods:{
        getOrders(){
            this.$api.getOrders.getOrders()
            .then(({data}) => {
                for (let item in data){
                    for (let cartItem of data[item].cart){
                        this.orders.push(cartItem)
                        console.log(cartItem)
                    }
                }
                this.isLoading = !this.isLoading

            }).catch(e => {
                console.log(e)
            })
        }
    },
    mounted(){
        this.getOrders()
    }
}
</script>

<style lang="scss">
.profile__inner{
    padding: 45px;
}
.profile__head{
    display: flex;
    align-items: center;
    margin-bottom: 36px;
    svg{
        width: 32px;
        height: 32px;
        margin-right: 12px;
    }
}
.profile__content{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 40px;
}
</style>