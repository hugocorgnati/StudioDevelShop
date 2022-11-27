import React, { useState, useEffect } from 'react'
import Item from '../components/Item'
import { getProducts, cargarData } from "../api/products"
import appContainer from '../style/appContainer.css'
import ItemContainer from '../components/ItemContainer'
import Loader from '../components/Loader'

const AppContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setProducts([]);
        setLoading(true);
        getProducts()
            .then((items) => {
                setProducts(items);
                setLoading(false);
            })
            .catch((e) => console.log(e));
    }, []);


    return (
        <div className='content'>
            {loading ? <Loader loading={loading} /> : null}
            <ItemContainer products={products} loading={loading} />
        </div>
    )
}

export default AppContainer