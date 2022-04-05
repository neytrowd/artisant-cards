import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProduct} from "../../types/product";

interface IProductsState {
    products: IProduct[],
    search: number
}

const initialState: IProductsState = {
    products: [],
    search: 0
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

        loadProducts(state, action: PayloadAction<IProduct[]>) {
            state.products = action.payload
        },

        search(state, action: PayloadAction<number>) {
            state.search = action.payload
        }

    }
})

export default productSlice.reducer;
export const productActions = productSlice.actions