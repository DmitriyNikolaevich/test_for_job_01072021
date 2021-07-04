import { call, put, takeEvery } from 'redux-saga/effects'
import { commonAPI } from '../API/commonAPI'

const GET_START_DATA = 'delivery/commonReducer/GET_START_DATA'
const SET_CATIGORIES = 'delivery/commonReducer/SET_CATIGORIES'
const SET_PRODUCTS = 'delivery/commonReducer/SET_PRODUCTS'
const SET_DELIVERY_FORM_STREET = 'delivery/commonReducer/SET_DELIVERY_FORM_STREET'
const SET_DELIVERY_FORM_NUMBER = 'delivery/commonReducer/SET_DELIVERY_FORM_NUMBER'
const SET_DELIVERY = 'delivery/commonReducer/SET_DELIVERY'
const SET_FILTERED_PRODUCTS = 'delivery/commonReducer/SET_FILTERED_PRODUCTS'

const initialState = {
    categories: [],
    products: [],
    filteredProducts: [],
    delivery: true,
    deliveryFormData: {
        street: '',
        number: ''
    }
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

//SAGAs AC


export const getStartDataSagasAC = () => ({
    type: GET_START_DATA
})


//SAGAs


export function* getStartDataSAGA() {
    const catigories = yield call(commonAPI.getCategories)
    const catigoriesProductsList = yield call(commonAPI.getProducts)
    yield put(setCatigoriesAC(catigories.values))
    yield put(setProductsAC(catigoriesProductsList.values))
    yield put(setDeliveryAC(true))
}

export function* mainPageSAGA() {
    yield takeEvery(GET_START_DATA, getStartDataSAGA)
}

export default mainPageReducer