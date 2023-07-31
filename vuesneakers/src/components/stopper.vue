<template>
    <div class="root">
        <div class="stopper__wrapper">
            <svg class="stopper__img"> 
                <icon
                :iconName="imgName"
                />
            </svg>
            <h2 class="stopper__title">{{title}}</h2>
            <p class="stopper__subtitle">{{subTitle}}</p>
            <button class="goBack" @click="goBack">Вернуться назад</button>
        </div>
    </div>
</template>

<script>
import icon from './icon.vue';
export default{
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    },
    props:{
        imgName:{
            type: String
        },
        title:{
            type: String
        },
        subTitle:{
            type: String
        }
    },
    components:{
        icon
    }
}
</script>

<style lang="scss" scoped>
.stopper__wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70vh;
}
.stopper__img{
    margin-bottom: 30px;
    height: 70px;
    width: 70px;
    use{
        cursor: default;
    }
}
.stopper__title{
    font-size: 25px;
    margin-bottom: 20px;
}
.stopper__subtitle{
    font-size: 18px;
    text-align: center;
    max-width: 400px;
    margin-bottom: 30px;
}
.goBack{
    padding: 16px 31px;
    border-radius: 18px;
    background: #9DD458;
    border: none;
    cursor: pointer;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    transition: .3s;
    &:hover{
        box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    }
}
</style>