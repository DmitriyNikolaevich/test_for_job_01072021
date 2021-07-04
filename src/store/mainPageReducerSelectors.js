export const getCategoriesSelector = (state) => {
    return state.mainPage.categories
}

export const getProductsSelector = (state) => {
    return state.mainPage.filteredProducts
}

export const getDeliveryFormData = (state) => {
    return state.mainPage.deliveryFormData
}

export const getDeliverySelector = (state) => {
    return state.mainPage.delivery
}

export const getOrderSummSelector = (state) => {
    let response = 0
    for (let index = 0; index < state.mainPage.basket.length; index++) {
        response = response + (state.mainPage.basket[index].quantity * state.mainPage.basket[index].price)
    }
    return response
}

export const getBasketStatusSelector = (state) => {
    return state.mainPage.basket
}

export const getIsHideFillRequesSelector = (state) => {
    return state.mainPage.hideFillReques
}