import React from 'react';
import styles from './search-products.module.scss';
import {useAppDispatch} from "../../../store";
import {productActions} from "../../../store/slices/productSlice";

const SearchProducts = () => {
    const dispatch = useAppDispatch()

    const searchHandle = (e: React.FormEvent<HTMLInputElement>) => {
        let value = Number(e.currentTarget.value)
        dispatch(productActions.search(value))
    }

    return (
        <div className={styles.search}>
            <input
                type="number"
                className={styles.search_input}
                onChange={searchHandle}
                placeholder='Search by products quantity'
            />
        </div>
    );
};

export default SearchProducts;