import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProduct } from "../../api/products"
import "../../style/detail.css";
import Counter from '../../components/Counter';
import Loader from '../../components/Loader';
import { useCartContext } from "../../context/cartContext";

const Detail = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true)
    const { addProduct } = useCartContext();


    useEffect(() => {
        setLoading(true);
        getProduct(productId).then((data) => {
            setProduct(data);
            setLoading(false);
        });
    }, [productId]);

    const handleAdd = (qty) => {
        addProduct(product, qty);
    };

    if (!Object.keys(product).length) {
        return <div>Loading...</div>
    }

    return (
        <>
            {loading ? <Loader loading={loading} /> : <div className='content productDetail'>
                <img src={product?.imagen} alt={product?.nombre} />
                <div className='detail'>
                    <span className='detailName'>{product?.nombre}</span>

                    <span className="detailCategory">{product?.categoria}</span>
                    <p className="detailDescription">{product?.descripcion}</p>
                    <span className="detailPrice">
                        ${product?.precio?.toLocaleString()}
                    </span>
                    {product?.stock > 0 ? <> <span className="detailStock">
                        {product?.stock} disponibles
                    </span>
                        <Counter
                            stock={product?.stock}
                            onAdd={handleAdd}
                        /> </> : <span>No quedan productos disponibles.</span>}

                </div>
            </div>}

        </>
    )
}

export default Detail