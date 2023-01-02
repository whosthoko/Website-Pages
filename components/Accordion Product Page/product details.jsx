import React from "react";
import Styled from "styled-components";

function ProductDetails () {
    return (
        <Styleddiv>
        <ul>
            <p>White round-neck t-shirt with a collection logo on the lower right on the front. 
                A graphic of a women’s mouth with red lipstick, eyeshadow and SNST BLVD name logo 
                in-between the graphic on the back</p>
            <li>S/S 23 Summer Never Ends</li>
            <li>Cotton Jersey Fabric</li>
            <li>Made In Egypt</li>
            <li>NFT Included</li>
            <li>Model is 5,11 wearing a small</li>
        </ul>
        </Styleddiv>
    )
}

const Styleddiv = Styled.div `
    
    .li {
        text-align: left;
    }
`
export default ProductDetails