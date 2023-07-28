<template>
    <div class="root">
        <headerComponent />
        <div class="favorite__wrapper">
            <div class="container">
                <div class="favorite__inner">
                    <stopper 
                    v-if="favoriteShoes.length == 0"
                    :imgName="`icon-cryingEmoji`"
                    :title="`Закладок нет :(`"
                    :subTitle="`Вы ничего не добавляли в закладки`"
                    />
                    <div class="favorite__head" v-if="favoriteShoes.length > 0">
                        <router-link to="/">
                            <svg>
                                <icon
                                :iconName="`icon-back`"
                                />
                            </svg>
                        </router-link>
                        <div class="favorite__title title">
                            Мои закладки
                        </div>
                    </div>
                    <div class="favorite__content" v-if="favoriteShoes.length > 0">
                        <shoesItem 
                        :item="item"
                        v-for="item in favoriteShoes"
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
import icon from "@/components/icon.vue"
import shoesItem from '@/components/shoesItem.vue';
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
            favoriteShoes: [
                // {
                //     title: "Кроссовки Nike Blazer Mid Suede",
                //     imgUrl: "https://cdn.sneakshero.com/pi/l/180769-nike-blazer-mid-77-vintage-suede-mix-cz4609-300.jpg?ceef4728",
                //     price: 12999,
                //     id: 147258369
                // }
            ]
        }
    }
}
</script>

<style lang="scss">
.favorite__inner{
    padding: 45px;
}
.favorite__head{
    display: flex;
    align-items: center;
    margin-bottom: 36px;
    svg{
        width: 32px;
        height: 32px;
        margin-right: 12px;
    }
}
.favorite__content{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 40px;
}
</style>