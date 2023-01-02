import React from "react";
import Styled from "styled-components"

import logo from '../../assets/multimedia/Logo.png';
import champagnegirl from '../../assets/multimedia/Summer Never Ends Graphic V1 No Background.png';

function OurCanvas () {
    return (
        <StyledOurCanvas>
        <div>
            <div className="description">
                <img src= {logo} alt="" className="logo"/>
                <p>SNST BLVD is a Luxury brand For our brand we get influenced by our love of graphics and quality garments. 
                    Graphics and the way they are placed on a specific garment is seen as art. As much as we love graphics we 
                    also want our garments to not be filled with graphics, the art of making clothes without logos and people 
                    knowing it's a SNST BLVD garment is important to us and we take influence on people's everyday clothing being 
                    used as uniforms
                </p>
            </div>
            <div className="NFTs">
                <img></img>
                <img></img>
                <img></img>
                <img></img>
            </div>
            <div className="NFT description">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit soluta consectetur eius illo, 
                    libero ratione necessitatibus aut numquam ea, fugit perferendis voluptatibus voluptates totam atque 
                    error rem porro inventore obcaecati?
                </p>
            </div>
            <div className="Collectionspage">
                <h2 className="collections">Collections</h2>
                <button><img src={champagnegirl} alt="" className="champagnegirl"/></button>
            </div>
            <div className="CustomerSupport">
                <h2>Customer Support</h2>
            </div>
        </div>
        </StyledOurCanvas>
    )
}

export default OurCanvas;

const StyledOurCanvas = Styled.div `
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

height: 100%;
width: 100%;  
background: linear-gradient(180deg, rgba(110,0,190,1) 0%, rgba(255,151,0,1) 95%);


.description {
    border: 2px solid white;
    text-align: center;
    margin-bottom: 30px;
}

.logo {
    height: 300px;
    width: 400px;
    margin-bottom: -100px;
}

.Collectionspage {
    border: 2px solid white;
    text-align: center;
}

.collections {
    color: white;
}
button {
    height: 300px;
    width: 400px;
    background-color: transparent;
    border: 1px transparent;
}

.champagnegirl {
    height: 300px;
    width: 400px;
}


`