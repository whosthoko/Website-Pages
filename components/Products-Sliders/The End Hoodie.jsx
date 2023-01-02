import React from "react";
import Styled from "styled-components"

import Slider from '../Slider';

import The_End_Hoodie_0 from '../../assets/multimedia/Mens/Hoodies & Sweatshirts/The End Hoodie/The End Hoodie_0.png';
import The_End_Hoodie_180 from '../../assets/multimedia/Mens/Hoodies & Sweatshirts/The End Hoodie/The End Hoodie_180.png';
import Look_16 from '../../assets/multimedia/Mens/Hoodies & Sweatshirts/The End Hoodie/Look 16.png';
import Look_16_2 from '../../assets/multimedia/Mens/Hoodies & Sweatshirts/The End Hoodie/Look 16(2).png';
import The_End_Hoodie_NFT from '../../assets/multimedia/Muse(Friends-&-Family).gif';

function TheEndHoodieBox () {
    return (
    <StyledBoxtwo>
    <div className='box'>
    <h3 className='productname'>The End Hoodie</h3>
                <br />
                <h4>$500</h4>
                <Slider imageone ={The_End_Hoodie_0}
                        imagetwo ={The_End_Hoodie_180}
                        imagethree ={Look_16}
                        imagefour ={Look_16_2}
                        imagefive ={The_End_Hoodie_NFT}/>
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

export default TheEndHoodieBox