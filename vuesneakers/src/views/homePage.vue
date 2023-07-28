<template>
    <div id="app">
        <headerComponent />
        <main class="shoes__wrapper">
            <div class="container">
                <div class="shoes__inner">
                    <div class="shoes__head">
                        <h3 class="shoes__title title">
                            Все кроссовки
                        </h3>
                        <input placeholder="Поиск..." class="shoes__search" type="text">
                    </div>
                    <div class="shoes__content">
                        <div class="loading__wrapper" v-show="isLoading">
                            <itemLoader />
                            <itemLoader />
                            <itemLoader />
                            <itemLoader />
                            <itemLoader />
                            <itemLoader />
                            <itemLoader />
                            <itemLoader />
                        </div>
                        <shoesItem 
                        :item="item"
                        v-for="item in shoes"
                        :key="item.id"
                        />
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
import icon from '@/components/icon.vue'
import shoesItem from '@/components/shoesItem.vue'
import headerComponent from '@/components/headerComponent.vue'
import itemLoader from '@/components/itemLoader.vue'
export default{
    components:{
        headerComponent,
        shoesItem,
        icon,
        itemLoader
    },
    methods:{
            getAllShoes(){
                this.$api.getAllshoes.getAllshoes({
                }).then(({data}) => {
                    this.isLoading = false
                    this.shoes = data
                    })
                    .catch(e => {
                        console.log(e)
                    })
                    }
                },
    mounted(){
        this.getAllShoes()
    },
    data(){
        return{
            isLoading: true,
            shoes: []
            }
        }
    }
</script>

<style lang="scss">
@import "@/styles/main.scss";
.shoes__inner{
    padding: 45px;
}
.shoes__head{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 36px;
}
.shoes__search{
    padding: 13px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 400;
    outline: none;
    border: 1px solid #F3F3F3;
    transition: .3s;
}
.shoes__search:hover{
    border-color: #d3d3d3
}
.shoes__search:focus{
    border-color: #a7a7a7
}
.shoes__content, .loading__wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 40px;
}
</style>