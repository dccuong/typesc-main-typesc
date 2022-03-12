import React from "react";
import ReactDOM from "react-dom";

type ProductProps = {
    data: {
        id: number,
        name: string
    }
}

const Product = ({ data: { id, name } }: ProductProps) => {
    return <div> {name}</div>

}

export default Product