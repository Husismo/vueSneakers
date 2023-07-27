export default (api) => {
    api.getAllshoes = {
        getAllshoes(payload) {
            return api.instance.get(`/items`, payload)
        },
    };
};