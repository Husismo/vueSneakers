<template>
  <div class="item__wrapper">
    <svg
      class="favorite__btn"
      @click="addToFavorite"
      v-show="!isAddedToFavorite"
    >
      <icon :iconName="`icon-favorite`" />
    </svg>
    <svg
      class="favorite__btn"
      @click="removeFromFavorite"
      v-show="isAddedToFavorite"
    >
      <icon :iconName="`icon-favorited`" />
    </svg>
    <div class="item__img">
      <router-link
        :to="{
          name: 'shoesPage',
          params: {
            id: item.id,
            name: item.name,
            price: item.price,
            imgUrl: item.imgUrl,
          },
        }"
      >
        <img :src="item.imgUrl" alt="shoesItem" />
      </router-link>
    </div>
    <div class="item__about">
      <div class="item__name">
        {{ item.name }}
      </div>
      <div class="item__inner">
        <div class="item__price">
          <p class="price__title">Цена:</p>
          <p>{{ item.price }} руб.</p>
        </div>
        <div class="item__btn">
          <svg
            v-show="!isAddedToCart"
            @click="addToCart"
            style="width: 32px; height: 32px; fill: currentColor"
          >
            <icon :iconName="`icon-addToCart`" />
          </svg>

          <svg
            v-show="isAddedToCart"
            @click="removeFromCart"
            style="width: 32px; height: 32px; fill: currentColor"
          >
            <icon :iconName="`icon-addedToCart`" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import icon from "@/components/icon.vue";
export default {
  name: `shoesItem`,
  components: {
    icon,
  },
  methods: {
    addToCart() {
      this.isAddedToCart = !this.isAddedToCart;
      this.addedToCart = !this.addedToCart;
      this.$store.commit(`addToCart`, this.item);
      this.$store.commit(`changeTotalPrice`, this.item.price);
    },
    removeFromCart() {
      this.isAddedToCart = !this.isAddedToCart;
      this.$store.commit("removeFromCart", this.item);
    },
    checkAdded() {
      if (this.$store.getters.isItemAdded(this.item)) {
        this.isAddedToCart = true;
      }
      if (this.$store.getters.isFavoriteAdded(this.item)) {
        this.isAddedToFavorite = true;
      }
    },
    addToFavorite() {
      this.isAddedToFavorite = !this.isAddedToFavorite;
      this.$store.commit("addToFavorite", this.item);
    },
    removeFromFavorite() {
      this.isAddedToFavorite = !this.isAddedToFavorite;
      this.$store.commit("removeFromFavorite", this.item);
    },
  },
  props: {
    item: {
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
    },
  },
  data() {
    return {
      isAddedToCart: false,
      isAddedToFavorite: false,
    };
  },
  mounted() {
    this.checkAdded();
  },
};
</script>

<style lang="scss" scoped>
.item__wrapper {
  border: 1px solid #f3f3f3;
  width: 210px;
  height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  transition: 0.3s;
  position: relative;
}
.item__wrapper:hover {
  box-shadow: 0px 14px 30px 0px rgba(0, 0, 0, 0.05);
  cursor: pointer;
}
.item__img img {
  max-width: 133px;
  max-height: 112px;
  margin-bottom: 14px;
}
.item__about {
  display: flex;
  flex-direction: column;
}
.item__name {
  margin-bottom: 14px;
  max-width: 150px;
}
.item__inner {
  display: flex;
  justify-content: space-between;
}
.item__price {
  font-size: 14px;
  font-weight: 700;
}
.price__title {
  color: #bdbdbd;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 11px;
}
.item__btn {
  width: 32px;
  height: 32px;
  color: #f2f2f2;
  svg:hover {
    color: #9dd458;
  }
}
.favorite__btn {
  width: 32px;
  height: 32px;
  position: absolute;
  left: 15px;
  top: 15px;
  color: #eeeeee;
  &:hover {
    color: #ff9c9c;
  }
}
</style>
