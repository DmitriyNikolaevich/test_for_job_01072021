import { instance } from "../API"

export const commonAPI = {

    //забирает категории с сервера
    getCategories() {
        return instance.get(`getcategories`).then(res => res.data)
    },

    //забирает список товаров с сервера
    getProducts() {
        return instance.get(`getproducts`).then(res => res.data)
    },

    //Отправляет заказ
    postOrder(order) {
        return instance.post('postorder', order)
    }

}