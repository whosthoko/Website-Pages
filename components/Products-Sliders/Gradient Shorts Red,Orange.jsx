import React from 'react';
import Styled from 'styled-components';

import Slider from '../Slider';

import Gradient_Shorts_Red_Orange_0 from '../../assets/multimedia/Mens/Shorts/Gradient Shorts Red:Orange/Gradient Shorts Red & White_0.png';
import Gradeint_Shorts_Red_Orange_180 from '../../assets/multimedia/Mens/Shorts/Gradient Shorts Red:Orange/Gradient Shorts Red & White_180.png';
import Look_7 from '../../assets/multimedia/Mens/Shorts/Gradient Shorts Red:Orange/Look 7.png';
import Look_7_2 from '../../assets/multimedia/Mens/Shorts/Gradient Shorts Red:Orange/Look 7(2).png';
import Gradient_Shorts_Red_Orange_NFT from '../../assets/multimedia/Muse(Friends-&-Family).gif';

function GradientShortsRedOrangeBox () {
    return (
    <StyledBoxtwo>
    <div className='box'>
        <h3 className='productname'>Gradient Shorts Red/Orange</h3>
        <br />
        <h4>$150</h4>
         <Slider className="slide" 
                    imageone ={Gradient_Shorts_Red_Orange_0}
                    imagetwo ={Gradeint_Shorts_Red_Orange_180}
                    imagethree ={Look_7}
                    imagefour ={Look_7_2}
                    imagefive ={Gradient_Shorts_Red_Orange_NFT}/>
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

export default GradientShortsRedOrangeBox