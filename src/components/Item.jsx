import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tag from "./Tag";
import "../style/Item.css";
import { useCartContext } from "../context/cartContext";

const Item = ({ id, imagen, precio, nombre, categoria, tag }) => {
    const navigate = useNavigate();
    const { addProduct } = useCartContext();
    return (
        <div className={"item"} onClick={() => navigate(`/product/${id}`)}>
            <div className="itemTop">
                <img src={imagen} alt="zapato" />
                <span className="itemPrice">${precio}</span>
            </div>
            <div className="itemContent">
                <span className="itemName">{nombre}</span>
                <span className="itemCategory">{categoria}</span>

                <Tag titulo={tag} />
                <button className="addCartFromHome"
                    onClick={(e) => {
                        e.stopPropagation();
                        addProduct({ id, nombre, precio, categoria, tag, imagen }, 1)
                    }}
                >
                    Añadir al carrito
                </button>
            </div>
        </div>
    );
};

export default Item;