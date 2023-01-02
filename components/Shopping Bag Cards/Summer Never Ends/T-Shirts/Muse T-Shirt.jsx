import React from "react";

import Styled from "styled-components"

import Muse_T_Shirt_0 from '../../../../assets/multimedia/Mens/T-Shirts/Muse T-Shirt/SNST BLVD Muse T-Shirt_0.png';


function MuseTshirtCard () {
     return (
    <StyledCard>
        <div className="clothingcard">
            <div className="pictureframe">
                <img className="garment" src={Muse_T_Shirt_0} alt="" style={{ width: 280, height: 360 }}/>
            </div>
            <div className="infoframe">
                <h2 className="name">Muse T-Shirt</h2>
                 <div>
                    <h4 className="colorheader">Color</h4>
                    <h4 className="color">White</h4>
                    <h4 className="sizeheader">Size</h4>
                    <h4 className="size">M</h4>
                        <form>
                            <select id ="number" className='number'>
                                <option value = "1">1</option>
                                <option value = "2">2</option>
                                <option value = "3">3</option>
                                <option value = "4">4</option>
                            </select>
                        </form>
                    <h4 className="price2">$200</h4>
                </div>
                <div className="bottom">
                    <button className="details">Details</button>
                    <button className="details">Remove</button>
                </div>
            </div>
        </div>
    </StyledCard>
    )
}

const StyledCard = Styled.div `

.clothingcard{
    position: relative;
    left: 70px;
    width: 50%;
    height: 400px;
   background: white;
   margin-bottom: 40px;
}

.pictureframe {
    background: #b0b0b0;
    position: relative;
    top: 5px;
    left: 8px;
    width: 40%;
    height: 375px;
    margin: 8px;
    display: flex;
    justify-content: center;
    float: left;
}

.garment {
   position: relative;
   top: 10px
}

.infoframe {
    background: #b0b0b0;
    position: relative;
    left: 40px;
    top: 13px;
    width: 50%;
    height: 375.5px;
    float: left;
}

.name {
    position: relative;
    right: 1px;
    width: 362px;
    padding-left: 1px;
    color: white;
    text-align: center;
    border:1px solid white;
    font-size: 

}

.colorheader {
    float: left;
    text-align: left;
    padding:10px;
    color: white;
}

.color {
    float: right;
    color: white;
    padding: 10px;
}

.sizeheader {
    position: absolute;
    top: 80px;
    padding:10px;
    color: white;
}

.size {
    color: white;
    padding: 10px;
    position: absolute;
    top: 80px;
    left: 300px;
}

.number {
    position: relative;
    top: 200px;
    right: 68px;
    width: 70px;
    background: transparent;
    border: 1.5px solid white;
    color: white;
}

.price2 {
    position: relative;
    top: 173px;
    left: 210px;
    color: white;
}

.bottom{ 
    position: relative;
    top: 232.5px;
}

.details {
    position: relative;
    width: 180px;
    height: 50px;
    border: 1px solid white;
    background-color: transparent;
    border-radius: 1px;
    color: white;
}
`

export default MuseTshirtCard