// import { GET_LIST_KONTAK, GET_Category } from "../../actions/kontakAction";
import { GET_PRODUCT_CATEGORY, GET_PRODUCTS } from "../../constans/ProductConstant";

const initialState = {
    getProductResult: false,
    categoryResult: ''
};

const Products = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                getProductResult: action.payload.data,
            }
        case GET_PRODUCT_CATEGORY:
            return {
                ...state,
                getProductResult: action.payload.data,
                categoryResult: action.value
            }
        default:
            return state;
    }
}

export default Products;