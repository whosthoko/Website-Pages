import React from "react";
import Styled from "styled-components"

import Slider from '../Slider';


import Gradient_Logo_Hoodie_0 from '../../assets/multimedia/Mens/Hoodies & Sweatshirts/Gradient Logo Hoodie/Gradient Logo Hoodie_0.png';
import Gradient_Logo_Hoodie_180 from '../../assets/multimedia/Mens/Hoodies & Sweatshirts/Gradient Logo Hoodie/Gradient Logo Hoodie_180.png';
import Look_14 from '../../assets/multimedia/Mens/Hoodies & Sweatshirts/Gradient Logo Hoodie/Look 14.png';
import Look_14_2 from '../../assets/multimedia/Mens/Hoodies & Sweatshirts/Gradient Logo Hoodie/Look 14(2).png';
import Gradeint_Logo_Hoodie_NFT from '../../assets/multimedia/Muse(Friends-&-Family).gif';

function GradientLogoHoodieBox () {
    return (
    <StyledBoxtwo>
    <div className='box'>
    <h3 className='productname'>Gradient Logo Hoodie</h3>
                <br />
                <h4>$500</h4>
                <Slider imageone ={Gradient_Logo_Hoodie_0}
                        imagetwo ={Gradient_Logo_Hoodie_180}
                        imagethree ={Look_14}
                        imagefour ={Look_14_2}
                        imagefive ={Gradeint_Logo_Hoodie_NFT}/>
                <button className='btn'> </button>
               
    </div>
    </StyledBoxtwo>
    )
}

const StyledBoxtwo = Styled.div `

.box {
}

.productname {
    font-size: 25px;
    padding: 0px;
    margin: 0px;
}

.h4 {
     padding: 0px;
}

.btn {
    width: 200px;
    height: 320px;
    position: relative;
    bottom: 380px;
    z-index: 1;
    margin-bottom: -350px;
}
`

export default GradientLogoHoodieBox