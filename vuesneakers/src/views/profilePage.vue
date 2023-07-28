<template>
    <div class="root">
        <headerComponent />
        <div class="profile__wrapper">
            <div class="container">
                <div class="profile__inner">
                    <stopper 
                    v-if="purchased.length == 0"
                    :imgName="`icon-angryEmoji`"
                    :title="`У вас нет заказов`"
                    :subTitle="`Оформите хотя бы один заказ.`"
                    />
                    <div class="profile__head" v-if="purchased.length > 0">
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
                    <div class="profile__content" v-if="purchased.length > 0">
                        <shoesItem 
                        :item="item"
                        v-for="item in purchased"
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
export default{
    components:{
        headerComponent,
        icon,
        shoesItem,
        stopper
    },
    data(){
        return{
            purchased: [
                // {
                //         title: "Кроссовки Nike Blazer Mid Suede",
                //         imgUrl: "https://cdn.sneakshero.com/pi/l/180769-nike-blazer-mid-77-vintage-suede-mix-cz4609-300.jpg?ceef4728",
                //         price: 12999,
                //         id: 147258369
                // },
            ]
        }
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