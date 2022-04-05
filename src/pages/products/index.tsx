import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../store";
import {productActions} from "../../store/slices/productSlice";
import {IProduct} from "../../types/product";
import SearchProducts from "./search-products";
import ProductsList from "./products-list";
import api from "../../api";

const Products = () => {
    const dispatch = useAppDispatch();
    const {products, search} = useAppSelector(store => store.product)

    useEffect(() => {
        (async () => {
            try {
                let res = await api.get('products');
                let {products} = res.data.data;
                dispatch(productActions.loadProducts(products))
            } catch (err: unknown) {
                (err instanceof Error) && console.log(err.message)
            }
        })()
    }, [])

    const searchProducts = (products: IProduct[], quantity: number): IProduct[] => {
        return products.filter(item => item.quantity_available >= quantity);
    }

    return (
        <div className='container'>
            <SearchProducts/>
            <ProductsList
                products={searchProducts(products, search)}
            />
        </div>
    );
};

export default Products;