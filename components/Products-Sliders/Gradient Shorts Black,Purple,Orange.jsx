import React from 'react';
import Styled from 'styled-components';

import Slider from '../Slider';

import Gradient_Shorts_Black_Purple_Orange_0 from '../../assets/multimedia/Mens/Shorts/Gradient Shorts Black:Purple:Orange/Gradient Shorts Black Purple Orange_0.png';
import Gradient_Shorts_Black_Purple_Orange_180 from '../../assets/multimedia/Mens/Shorts/Gradient Shorts Black:Purple:Orange/Gradient Shorts Black Purple Orange_180.png';
import Look_15 from '../../assets/multimedia/Mens/Shorts/Gradient Shorts Black:Purple:Orange/Look 15.png';
import Look_15_2 from '../../assets/multimedia/Mens/Shorts/Gradient Shorts Black:Purple:Orange/Look 15(2).png';
import Gradient_Shorts_Black_Purple_Orange_NFT from '../../assets/multimedia/Muse(Friends-&-Family).gif';

function GradientShortsBlackPurpleOrangeBox () {
    return (
    <StyledBoxtwo>
    <div className='box'>
        <h3 className='productname'>Gradient Shorts Black/Purple/Orange</h3>
        <br />
        <h4>$150</h4>
         <Slider className="slide" 
                    imageone ={Gradient_Shorts_Black_Purple_Orange_0}
                    imagetwo ={Gradient_Shorts_Black_Purple_Orange_180}
                    imagethree ={Look_15}
                    imagefour ={Look_15_2}
                    imagefive ={Gradient_Shorts_Black_Purple_Orange_NFT}/>
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

export default GradientShortsBlackPurpleOrangeBox;