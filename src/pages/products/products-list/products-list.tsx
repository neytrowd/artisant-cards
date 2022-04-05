import React from 'react';
import styles from './products-list.module.scss';
import ProductCard from "../../../components/product-card";
import {IProduct} from "../../../types/product";

interface IProductList {
    products: IProduct[]
}

const ProductsList = ({products}: IProductList) => {
    return (
        <div className={styles.products}>
            {products.map((item: IProduct) => (
                <ProductCard key={item.product_id} data={item}/>
            ))}
        </div>
    );
};

export default ProductsList;