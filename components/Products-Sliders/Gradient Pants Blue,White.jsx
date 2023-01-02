import React from 'react';
import Styled from 'styled-components';

import Slider from '../Slider';

import Gradient_Pants_Blue_White_0 from '../../assets/multimedia/Mens/Pants/Gradient Pants Blue:White/Gradient Pants Blue & White_0.png';
import Gradient_Pants_Blue_White_180 from '../../assets/multimedia/Mens/Pants/Gradient Pants Blue:White/Gradient Pants Blue & White_180.png';
import Look_2 from '../../assets/multimedia/Mens/Pants/Gradient Pants Blue:White/Look 2.png';
import Look_2_2 from '../../assets/multimedia/Mens/Pants/Gradient Pants Blue:White/Look 2(2).png';
import Gradient_Pants_Blue_White_NFT from '../../assets/multimedia/Muse(Friends-&-Family).gif';

function GradientPantsBlueWhiteBox () {
    return (
    <StyledBoxtwo>
    <div className='box'>
        <h3 className='productname'>Gradient Pants Blue/White</h3>
        <br />
        <h4>$400</h4>
         <Slider className="slide" 
                    imageone ={Gradient_Pants_Blue_White_0}
                    imagetwo ={Gradient_Pants_Blue_White_180}
                    imagethree ={Look_2}
                    imagefour ={Look_2_2}
                    imagefive ={Gradient_Pants_Blue_White_NFT}/>
         <button className='btn'></button>
    </div>
    </StyledBoxtwo>
    )
}

const StyledBoxtwo = Styled.div `


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

export default GradientPantsBlueWhiteBox;