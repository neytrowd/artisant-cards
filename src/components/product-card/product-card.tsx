import React from 'react';
import product from '../../assets/images/product.png';
import styles from './product-card.module.scss';
import {IProduct} from "../../types/product";

interface IProductProps {
    data: IProduct
}

const ProductCard = ({data}: IProductProps) => {
    return (
        <div>
            <div className={styles.product}>
                <div className={styles.product_photo}>
                    <img src={product} alt="product"/>
                    <div className={styles.product_creator}>
                        <p>created by</p>
                        <p>{data.created_by.display_name}</p>
                    </div>
                    <div className={styles.product_number}>
                        <p>{data.type}</p>
                        <p>{data.name}</p>
                    </div>
                </div>
                <div className={styles.product_info}>
                    <div>
                        <p>available</p>
                        <p> {data.quantity_available} of 50</p>
                    </div>
                    <div className={styles.product_price}>
                        <p>price</p>
                        <p>{data.initial_price} ETH</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;