export default{
    state: {
        cart: [],
        totalPrice: 0
    },
    getters: {
        allItems(state){
            return state.cart
        },
        getTotalPrice(state){
            return state.totalPrice
        }
    },
    mutations: {
        addToCart(state, item){
            state.cart.push(item)
        },
        changeTotalPrice(state, price){
            state.totalPrice += price
        },
        removeFromCart(state, item) {
            let index = state.cart.indexOf(item);
            if (index > -1) {
                state.cart.splice(index, 1);
                state.totalPrice -= item.price
            }
        }
    },
    actions: {
    },
    modules: {
    }
}