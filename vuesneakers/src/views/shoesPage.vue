<template>
  <div class="root">
    <headerComponent />
    <div class="shoesPage__wrapper">
      <div class="container">
        <div class="shoesPage__inner">
          <div class="shoesPage__head">
            <router-link to="/">
              <svg class="back__btn">
                <icon :iconName="`icon-back`" />
              </svg>
              <div class="cart__title title">Вернуться к ассортименту</div>
            </router-link>
          </div>
          <pageShoesLoader v-show="isLoading" />
          <div class="shoes__item" v-show="!isLoading">
            <img class="item__img" :src="imgUrl" alt="item__img" />
            <div class="item__inner">
              <div class="item__name">
                {{ name }}
              </div>
              <div class="item__price">{{ price }} руб.</div>
              <!-- 
                Переделать к примеру на:
                add-to-cart (itemBtn__wrapper)
                add-to-cart__button (item__addToCartBtn)
                add-to-cart__cart-link (item__goToCartBtn)

                Это касается и других файлов
              -->
              <div class="itemBtn__wrapper">
                <button
                  v-show="!addedToCart"
                  class="item__addToCartBtn"
                  @click="addToCart"
                >
                  добавить в корзину
                </button>
                <router-link v-show="addedToCart" to="/cart">
                  <button class="item__goToCartBtn">перейти в коризну</button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerComponent from "@/components/headerComponent.vue";
import icon from "@/components/icon.vue";
import pageShoesLoader from "@/components/pageShoesLoader.vue";

export default {
  data() {
    return {
      isLoading: true,
      addedToCart: false,
      name: "",
      price: "",
      imgUrl: "",
    };
  },
  
  components: {
    icon,
    headerComponent,
    pageShoesLoader,
  },
  
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  
  methods: {
    addToCart() {
      this.addedToCart = !this.addedToCart;
      let item = {
        name: this.name,
        price: this.price,
        id: this.id,
        imgUrl: this.imgUrl,
      };
      this.$store.commit(`addToCart`, item);
      this.$store.commit(`changeTotalPrice`, this.price);
    },
    
    getItem() {
      this.$api.getItem
        .getItem(this.id)
        .then(({ data }) => {
          (this.isLoading = false),
            (this.name = data.name),
            (this.price = data.price),
            (this.imgUrl = data.imgUrl);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    
    checkAdded() {
      let item = {
        name: this.name,
        price: this.price,
        id: this.id,
        imgUrl: this.imgUrl,
      };
      if (this.$store.getters.isItemAdded(item)) {
        this.addedToCart = true;
      }
    },
  },
  
  mounted() {
    this.getItem();
    this.checkAdded();
  },
};
</script>

<style lang="scss" scoped>
.shoesPage {
  &__inner {
    padding: 45px;
  }

  &__head {
    margin-bottom: 36px;

    svg {
      width: 32px;
      height: 32px;
      margin-right: 12px;
    }

    a {
      display: flex;
      display: flex;
      align-items: center;
    }
  }
}
.cart__title {
  color: #000;
}

.shoes__item {
  display: flex;
}

.item {
  &__img {
    width: 300px;
    height: 280px;
    margin-right: 40px;
  }

  &__inner {
    display: flex;
    flex-direction: column;
  }

  &__name {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 25px;
  }

  &__price {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 100px;
  }

  /* 
    В бэме не используется camelCase
    нужно переделать на snake-case (add-to-cart)

    Ознакомиться внимательнее с докой БЭМа
    https://ru.bem.info/methodology/quick-start/
  */
  &__addToCartBtn {
    background-color: rgb(168, 205, 47);
    color: #fff;

    &:hover {
      box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    }
  }

  &__goToCartBtn {
    background-color: rgb(255, 252, 73);
    color: #000;

    &:hover {
      box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    }
  }
}

.itemBtn__wrapper {
  button {
    cursor: pointer;
    text-transform: uppercase;
    border: none;
    padding: 15px 30px;
    border-radius: 25px;
    font-weight: 700;
    font-size: 16px;
    transition: 0.3s;
  }
}
</style>
