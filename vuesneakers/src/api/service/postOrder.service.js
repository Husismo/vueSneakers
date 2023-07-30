export default (api) => {
    api.postOrder = {
        postOrder(payload) {
            return api.instance.post(`/orders`, payload)
        },
    };
};