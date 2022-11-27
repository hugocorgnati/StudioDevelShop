import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../api/products";
import ItemContainer from "../components/ItemContainer";
import Loader from "../components/Loader";
import CategoryTitle from "../components/CategoryTitle";

const Category = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setProducts([]);
        setLoading(true);
        getProductsByCategory(categoryId)
            .then((items) => {
                setProducts(items);
                setLoading(false);
            })
            .catch((e) => console.log(e))
    }, [categoryId]);


    return (
        <>
            {loading ? <Loader loading={loading} /> : <section className="content">
                <div >
                    <CategoryTitle text={`Vista de ${categoryId}`} />
                </div>
                <main >
                    <ItemContainer products={products} loading={loading} />
                </main>
            </section>}

        </>
    )
}


export default Category