<template>
    <div class="root">
        <headerComponent />
        <div class="favorite__wrapper">
            <div class="container">
                <div class="favorite__inner">
                    <div class="favorite__head ">
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
                    <div class="favorite__content">
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
export default{
    components:{
        headerComponent,
        icon,
        shoesItem
    },
    data(){
        return{
            favoriteShoes: [
                {
                    title: "Кроссовки Nike Blazer Mid Suede",
                    imgUrl: "https://cdn.sneakshero.com/pi/l/180769-nike-blazer-mid-77-vintage-suede-mix-cz4609-300.jpg?ceef4728",
                    price: 12999,
                    id: 147258369
                },
                {
                    title: "Кроссовки Nike Blazer Mid Suede",
                    imgUrl: "https://cdn.sneakshero.com/pi/l/180769-nike-blazer-mid-77-vintage-suede-mix-cz4609-300.jpg?ceef4728",
                    price: 12999,
                    id: 147258369
                },
                {
                    title: "Кроссовки Nike Blazer Mid Suede",
                    imgUrl: "https://cdn.sneakshero.com/pi/l/180769-nike-blazer-mid-77-vintage-suede-mix-cz4609-300.jpg?ceef4728",
                    price: 12999,
                    id: 147258369
                },
                {
                    title: "Кроссовки Nike Blazer Mid Suede",
                    imgUrl: "https://cdn.sneakshero.com/pi/l/180769-nike-blazer-mid-77-vintage-suede-mix-cz4609-300.jpg?ceef4728",
                    price: 12999,
                    id: 147258369
                },
                {
                    title: "Кроссовки Nike Blazer Mid Suede",
                    imgUrl: "https://cdn.sneakshero.com/pi/l/180769-nike-blazer-mid-77-vintage-suede-mix-cz4609-300.jpg?ceef4728",
                    price: 12999,
                    id: 147258369
                }
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