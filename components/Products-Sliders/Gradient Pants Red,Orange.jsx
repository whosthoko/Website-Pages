import React from 'react';
import Styled from 'styled-components';

import Slider from '../Slider';

import Gradient_Pants_Red_Orange_0 from '../../assets/multimedia/Womens/Pants/Pants Red_Orange/Gradient Pants Red & Orange_0.png';
import Gradient_Pants_Red_Orange_180 from '../../assets/multimedia/Womens/Pants/Pants Red_Orange/Gradient Pants Red & Orange_180.png';
import Look_6 from '../../assets/multimedia/Womens/Pants/Pants Red_Orange/Look 6.png';
import Look_6_2 from '../../assets/multimedia/Womens/Pants/Pants Red_Orange/Look 6(2).png';
import Gradient_Pants_Red_Orange_NFT from '../../assets/multimedia/Muse(Friends-&-Family).gif';


function GradientPantsRedOrangeBox () {
    return (
    <StyledBoxtwo>
    <div className='box'>
        <h3 className='productname'>Gradient Pants Red/Orange</h3>
        <br />
        <h4>$400</h4>
         <Slider className="slide" 
                    imageone ={Gradient_Pants_Red_Orange_0} style={{ width: 500, height: 600 }}
                    imagetwo ={Gradient_Pants_Red_Orange_180}
                    imagethree ={Look_6}
                    imagefour ={Look_6_2}
                    imagefive ={Gradient_Pants_Red_Orange_NFT}/>
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

export default GradientPantsRedOrangeBox;