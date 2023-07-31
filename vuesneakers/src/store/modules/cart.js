export default {
    state: {
        cart: [],
        totalPrice: 0
    },
    getters: {
        allItems(state) {
            return state.cart
        },
        getTotalPrice(state) {
            return state.totalPrice
        },
        isItemAdded: state => item => {
            let index = state.cart.findIndex(obj => obj.id === item.id)
            if (index >= 0) {
                return true
            }
        },
    },
    mutations: {
        addToCart(state, item) {
            state.cart.push(item)
        },
        changeTotalPrice(state, price) {
            state.totalPrice += price
        },
        removeFromCart(state, item) {
            let index = state.cart.findIndex(obj => obj.id === item.id)
            if (index > -1) {
                state.cart.splice(index, 1);
                state.totalPrice -= item.price
            }
        },
        clearCart(state) {
            state.cart.splice(0)
            state.totalPrice = 0
        },
    },
    actions: {
    },
    modules: {
    }
}