<template>
  <div class="root">
    <headerComponent />
    <div class="cart__wrapper">
      <div class="container">
        <div class="cart__inner">
          <stopper
            v-if="cart.length == 0"
            :imgName="`icon-sadEmoji`"
            :title="`Корзина пустая`"
            :subTitle="`Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.`"
          />
          <div class="cart__head" v-if="cart.length > 0">
            <router-link to="/">
              <svg class="back__btn">
                <icon :iconName="`icon-back`" />
              </svg>
            </router-link>
            <div class="cart__title title">Корзина</div>
          </div>
          <div class="cart__content" v-if="cart.length > 0">
            <cartItem :cartItem="item" v-for="item in cart" :key="item.id" />

            <div class="cart__info">
              <div class="cart__total">
                Итого: <span>{{ totalPrice }} руб.</span>
              </div>
              <div class="cart__info__wrapper">
                <router-link to="/order">
                  <button class="cart__btn">Оформить заказ</button>
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
import cartItem from "@/components/cartItem.vue";
import icon from "@/components/icon.vue";
import stopper from "@/components/stopper.vue";

export default {
  components: {
    headerComponent,
    cartItem,
    icon,
    stopper,
  },
  
  computed: {
    totalPrice() {
      return this.$store.getters.getTotalPrice;
    },
  },

  data() {
    return {
      cart: [],
    };
  },

  mounted() {
    this.cart = this.$store.getters.allItems;
  },
};
</script>

<style lang="scss">
.cart__inner {
  padding: 45px;
}

.cart__head {
  display: flex;
  align-items: center;

  svg {
    width: 32px;
    height: 32px;
    margin-right: 12px;
  }
}

.cart__content {
  display: flex;
  flex-direction: column;
}

.cart__info {
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid #eaeaea;
  text-align: center;
}

.cart__total {
  font-size: 20px;
  margin-bottom: 20px;

  span {
    font-weight: 700;
  }
}

.cart__btn {
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  padding: 16px 64px;
  border-radius: 18px;
  border: none;
  cursor: pointer;
  background: #9dd458;
  transition: 0.3s;

  &:hover {
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  }
}

.back__btn {
  color: #eaeaea;

  &:hover {
    color: #c5c5c5;
  }
}
</style>
