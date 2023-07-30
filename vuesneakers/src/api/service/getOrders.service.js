export default (api) => {
    api.getOrders = {
        getOrders(payload) {
            return api.instance.get(`/orders`)
        },
    };
};