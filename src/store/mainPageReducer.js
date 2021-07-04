import { call, put, takeEvery } from 'redux-saga/effects'
import { commonAPI } from '../API/commonAPI'

const GET_START_DATA = 'delivery/commonReducer/GET_START_DATA'
const POST_ORDER = 'delivery/commonReducer/POST_ORDER'
const SET_CATIGORIES = 'delivery/commonReducer/SET_CATIGORIES'
const SET_PRODUCTS = 'delivery/commonReducer/SET_PRODUCTS'
const SET_DELIVERY_FORM_STREET = 'delivery/commonReducer/SET_DELIVERY_FORM_STREET'
const SET_DELIVERY_FORM_NUMBER = 'delivery/commonReducer/SET_DELIVERY_FORM_NUMBER'
const SET_DELIVERY = 'delivery/commonReducer/SET_DELIVERY'
const SET_NEW_BASKET_ITEM = 'delivery/commonReducer/SET_NEW_BASKET_ITEM'
const DELETE_BASKET_ITEM = 'delivery/commonReducer/DELETE_BASKET_ITEM'
const ADD_QUANTITY_TO_BASKET_ITEM = 'delivery/commonReducer/ADD_QUANTITY_TO_BASKET_ITEM'
const REMOVE_QUANTITY_FROM_BASKET_ITEM = 'delivery/commonReducer/REMOVE_QUANTITY_FROM_BASKET_ITEM'
const SET_HIDE_FILL_REQUES = 'delivery/commonReducer/SET_HIDE_FILL_REQUES'
const CLEARE_BASKET = 'delivery/commonReducer/CLEARE_BASKET'
const SET_ACTIVE_CATEGORY = 'delivery/commonReducer/SET_ACTIVE_CATEGORY'


const initialState = {
    categories: [],
    products: [],
    filteredProducts: [],
    delivery: true,
    deliveryFormData: {
        street: '',
        number: ''
    },
    basket: [],
    hideFillReques: true
}

const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case SET_CATIGORIES:
            return {
                ...state,
                categories: action.payload.catigories
            }

        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload.products
            }

        case SET_DELIVERY_FORM_STREET:
            return {
                ...state,
                deliveryFormData: {
                    ...state.deliveryFormData,
                    street: action.payload.street
                }
            }

        case SET_DELIVERY_FORM_NUMBER:
            return {
                ...state,
                deliveryFormData: {
                    ...state.deliveryFormData,
                    number: action.payload.number
                }
            }

        case SET_DELIVERY:
            return {
                ...state,
                filteredProducts: action.payload.delivery ? state.products.filter(el => el.delivery === 1) : state.products,
                delivery: action.payload.delivery
            }

        case SET_NEW_BASKET_ITEM:
            return {
                ...state,
                basket: [...state.basket, action.payload.item]
            }

        case DELETE_BASKET_ITEM:
            return {
                ...state,
                basket: [...state.basket.filter(el => el.id !== action.payload.item)]
            }

        case CLEARE_BASKET:
            return {
                ...state,
                basket: []
            }

        case ADD_QUANTITY_TO_BASKET_ITEM:
            return {
                ...state,
                basket: [...state.basket.filter(el => el.id !== action.payload.item.id), action.payload.item]
            }

        case REMOVE_QUANTITY_FROM_BASKET_ITEM:
            return {
                ...state,
                basket: [...state.basket.filter(el => el.id !== action.payload.item.id), action.payload.item]
            }

        case SET_HIDE_FILL_REQUES:
            return {
                ...state,
                hideFillReques: action.payload.value
            }

        case SET_ACTIVE_CATEGORY:
            return {
                ...state,
                categories: state.categories
                                    .map(el => ({id: el.id, name: el.name, current: 0}))
                                    .map(item => item.id === action.payload.category ? {id: item.id, name: item.name, current: 1} : item)
            }
    
        default:
            return state
    }
}


//AC


export const setCatigoriesAC = (catigories) => ({
    type: SET_CATIGORIES, payload: { catigories }
})
export const setProductsAC = (products) => ({
    type: SET_PRODUCTS, payload: { products }
})
export const setDeliveryFormStreetAC = (street) => ({
    type: SET_DELIVERY_FORM_STREET, payload: { street }
})
export const setDeliveryFormNumberAC = (number) => ({
    type: SET_DELIVERY_FORM_NUMBER, payload: { number }
})
export const setDeliveryAC = (delivery) => ({
    type: SET_DELIVERY, payload: { delivery }
})
export const setNewBasketItem = (item) => ({
    type: SET_NEW_BASKET_ITEM, payload: { item }
})
export const deleteBasketItem = (item) => ({
    type: DELETE_BASKET_ITEM, payload: { item }
})
export const addQuantityToBasketItem = (item) => ({
    type: ADD_QUANTITY_TO_BASKET_ITEM, payload: { item }
})
export const removeQuantityFromBasketItem = (item) => ({
    type: REMOVE_QUANTITY_FROM_BASKET_ITEM, payload: { item }
})
export const setHideFillRequesAC = (value) => ({
    type: SET_HIDE_FILL_REQUES, payload: { value }
})
export const cleareBasket = () => ({
    type: CLEARE_BASKET
})
export const setActiveCategoryAC = (category) => ({
    type: SET_ACTIVE_CATEGORY, payload: { category }
})


//SAGAs AC


export const getStartDataSagasAC = () => ({
    type: GET_START_DATA
})
export const postOrderSagasAC = (order) => ({
    type: POST_ORDER, payload: { order }
})


//SAGAs


export function* getStartDataSAGA() {
    try {
        const catigories = yield call(commonAPI.getCategories)
        const catigoriesProductsList = yield call(commonAPI.getProducts)
        yield put(setCatigoriesAC(catigories.values))
        yield put(setProductsAC(catigoriesProductsList.values))
        yield put(setDeliveryAC(true))   
    } catch (error) {
        console.log(error)
    }
}

export function* postOrderSAGA(action) {
    try {
        const response = yield call(commonAPI.postOrder, action.payload.order)
        alert(response.data.values)
        yield put(cleareBasket())
        yield put(setDeliveryFormStreetAC(''))
        yield put(setDeliveryFormNumberAC(''))
        yield put(setHideFillRequesAC(true))
    } catch (error) {
        console.log(error)
    }
}

export function* mainPageSAGA() {
    yield takeEvery(GET_START_DATA, getStartDataSAGA)
    yield takeEvery(POST_ORDER, postOrderSAGA)
}

export default mainPageReducer