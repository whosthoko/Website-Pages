import React from 'react';
import Styled from 'styled-components';

import Slider from '../Slider';

import Gradient_Shorts_Blue_White_0 from '../../assets/multimedia/Mens/Shorts/Gradient Shorts Blue:White/Gradient Shorts Blue&White_0.png';
import Gradient_Shorts_Blue_White_180 from '../../assets/multimedia/Mens/Shorts/Gradient Shorts Blue:White/Gradient Shorts Blue&White_180.png';
import Look_3 from '../../assets/multimedia/Mens/Shorts/Gradient Shorts Blue:White/Look 3.png';
import Look_3_2 from '../../assets/multimedia/Mens/Shorts/Gradient Shorts Blue:White/Look 3(2).png';
import Gradient_Shorts_Blue_White_NFT from '../../assets/multimedia/Muse(Friends-&-Family).gif';

function GradientShortsBlueWhiteBox () {
    return (
    <StyledBoxtwo>
    <div className='box'>
        <h3 className='productname'>Gradient Shorts Blue/White</h3>
        <br />
        <h4>$150</h4>
         <Slider className="slide" 
                    imageone ={Gradient_Shorts_Blue_White_0}
                    imagetwo ={Gradient_Shorts_Blue_White_180}
                    imagethree ={Look_3}
                    imagefour ={Look_3_2}
                    imagefive ={Gradient_Shorts_Blue_White_NFT}/>
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

export default GradientShortsBlueWhiteBox;