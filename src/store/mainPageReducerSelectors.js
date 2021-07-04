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