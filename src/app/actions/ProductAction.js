import axios from "axios";
import { GET_PRODUCTS, GET_PRODUCT_CATEGORY } from "../constans/ProductConstant";

export const getProducts = () => {
    return (dispatch) => {
        dispatch({
            type: GET_PRODUCTS,
            payload: {
                data: false
            }
        })

        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/products/',
            timeout: 120000
        })
            .then((response) => {
                dispatch({
                    type: GET_PRODUCTS,
                    payload: {
                        data: response.data.data
                    }
                })
            })
            .catch((error) => {
                dispatch({
                    type: GET_PRODUCTS,
                    payload: {
                        data: false
                    }
                })
            })
    }
}

export const getListCategory = (value) => {
    return (dispatch) => {
        dispatch({
            type: GET_PRODUCT_CATEGORY,
            payload: {
                data: false
            },
            value: value
        })

        axios({
            method: 'GET',
            url: `http://localhost:5000/api/products/?category=${value}`,
            timeout: 120000
        })
            .then((response) => {
                dispatch({
                    type: GET_PRODUCT_CATEGORY,
                    payload: {
                        data: response.data.data
                    },
                    value: value
                })
            })
            .catch((error) => {
                dispatch({
                    type: GET_PRODUCT_CATEGORY,
                    payload: {
                        data: false
                    }
                })
            })


    }
}