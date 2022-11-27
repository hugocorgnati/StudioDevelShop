import { db } from "./config";

import {
    collection,
    getDocs,
    where,
    getDoc,
    doc,
    query,
    limit,
    addDoc,
    updateDoc,
    writeBatch,
    increment,
    deleteDoc
} from "firebase/firestore";

const productsRef = collection(db, '1')

export const getProducts = async () => {
    const products = [];
    const querySnapshot = await getDocs(productsRef);
    querySnapshot.forEach((doc) => {
        products.push({ ...doc.data(), id: doc.id })
    });
    return products;
};

export const getProductsByCategory = async (categoria) => {
    const products = [];
    const q = query(productsRef, where("categoria", "==", categoria));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        products.push({ ...doc.data(), id: doc.id })
    });
    return products;
};

export const getProduct = async (productId) => {
    const document = doc(db, "1", productId)
    const docSnap = await getDoc(document);
    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() }
    }
    return null;
};



export const updateProduct = async (id, item) => {
    const productDoc = await updateDoc(doc(db, "1", id), item);
    return;
};

export const updateManyProducts = async (items) => {
    const batch = writeBatch(db);


    items.forEach(({ id, qty }) => {
        const docRef = doc(db, "1", id)
        batch.update(docRef, { stock: increment(-qty) })
    })

    batch.commit();

};

export const deleteProduct = async (id) => {
    const docRef = doc(db, "1", id)
    const element = await deleteDoc(docRef)
}