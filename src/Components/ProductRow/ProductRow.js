import React from 'react';
import './ProductRow.module.css';

const ProductRow = (props) => {
    return (
        <tr>
            {/* <th scope="row"></th> */}
            <td><img alt={props.name} src={props.image}></img></td>
            <td className="data">{props.name}</td>
            <td className="data">{props.price}</td>
            <td className="data">{props.producerName}</td>
            <td><button onClick={props.edit} className="btn btn-primary">Edit</button></td>
        </tr>
    )
}

export default ProductRow;