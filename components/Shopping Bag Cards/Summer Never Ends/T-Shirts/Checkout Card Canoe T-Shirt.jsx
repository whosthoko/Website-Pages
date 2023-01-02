import React from "react";

import Styled from "styled-components"

import Canoe_T_Shirt_0 from '../../../../assets/multimedia/Mens/T-Shirts/Canoe T-Shirt/Canoe T-Shirt_0.png';

function CanoeTshirtCheckoutCard () {
     return (
    <StyledCard>
        <div className="clothingcard">
            <div className="pictureframe">
                <img className="garment" src={Canoe_T_Shirt_0} alt="" />
            </div>
            <div className="infoframe">
                <h2 className="name">Canoe T-Shirt</h2>
                 <div>
                    <h4 className="colorheader">Color</h4>
                    <h4 className="color">Black</h4>
                    <h4 className="sizeheader">Size</h4>
                    <h4 className="size">M</h4>
                    <h4 className='number'> 1 </h4>
                    <h4 className="price2">$200</h4>
                </div>
            </div>
        </div>
    </StyledCard>
    )
}

const StyledCard = Styled.div `

.clothingcard{
    position: relative;
    top: 60px;
    left: 60px;
    width: 80%;
    height: 250px;
   background: white;
   margin-bottom: 20px;
}

.pictureframe {
    background: #b0b0b0;
    position: relative;
    top: 12px;
    left: 7px;
    width: 40%;
    height: 225px;
    margin: 8px;
    
}

.garment {
   position: absolute;
   top: 10px;
   right: 2px;
   width: 170px;
   height: 200px;
}

.infoframe {
    background: #b0b0b0;
    position: relative;
    left: 215px;
    bottom: 222px;
    width: 45%;
    height: 226px;
    float: left;
}

.name {
    position: relative;
    right: 1px;
    width: 195px;
    padding-left: 1px;
    color: white;
    text-align: center;
    border:1px solid white;
    font-size: 20px;

}

.colorheader {
    float: left;
    text-align: left;
    padding:10px;
    color: white;
    font-size: 20px;
}

.color {
    float: right;
    color: white;
    padding: 10px;
    font-size: 20px;
}

.sizeheader {
    position: absolute;
    top: 60px;
    padding:10px;
    color: white;
    font-size: 20px;
}

.size {
    color: white;
    padding: 10px;
    position: absolute;
    top: 60px;
    right: 5px;
}

.number {
    position: absolute;
    bottom: 40px;
    right: 100px;
    width: 70px;
    color: white;
    font-size: 20px;
}

.price2 {
    position: absolute;
    bottom: 40px;
    left: 130px;
    color: white;
    font-size: 20px;
}

`

export default CanoeTshirtCheckoutCard