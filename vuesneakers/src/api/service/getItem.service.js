export default (api) => {
    api.getItem = {
        getItem(id) {
            return api.instance.get(`/items/${id}`, id)
        },
    };
};