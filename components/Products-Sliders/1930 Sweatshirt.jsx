import React from "react";
import Styled from 'styled-components'

import Slider from '../Slider';


import a1930_Sweatshirt_0 from '../../assets/multimedia/Mens/Hoodies & Sweatshirts/1930 Sweatshirt/1930 Sweatshirt_0.png';
import a1930_Sweatshirt_180 from '../../assets/multimedia/Mens/Hoodies & Sweatshirts/1930 Sweatshirt/1930 Sweatshirt_180.png';
import Look_4 from '../../assets/multimedia/Mens/Hoodies & Sweatshirts/1930 Sweatshirt/Look 4.png'
import Look_4_2 from '../../assets/multimedia/Mens/Hoodies & Sweatshirts/1930 Sweatshirt/Look 4(2).png'
import a1930_Sweatshirt_NFT from '../../assets/multimedia/Muse(Friends-&-Family).gif';

function NineteenThirtySweatshirtBox () {
    return (
    <StyledBoxtwo>
    <div className='box'>
    <h3 className='productname'>1930 Sweatshirt</h3>
                <br />
                <h4>$300</h4>
                <Slider imageone ={a1930_Sweatshirt_0}
                        imagetwo ={a1930_Sweatshirt_180}
                        imagethree ={Look_4}
                        imagefour ={Look_4_2}
                        imagefive ={a1930_Sweatshirt_NFT}/>
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

export default NineteenThirtySweatshirtBox