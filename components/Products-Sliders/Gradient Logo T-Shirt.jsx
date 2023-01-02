import React from 'react';
import Styled from 'styled-components';

import Slider from '../../components/Slider';

import Gradient_Logo_T_Shirt_0 from '../../assets/multimedia/Mens/T-Shirts/Gradient T-Shirt/Gradient T-Shirt_0.png';
import Gradient_Logo_T_Shirt_180 from '../../assets/multimedia/Mens/T-Shirts/Gradient T-Shirt/Gradient T-Shirt_180.png';
import Look_12 from '../../assets/multimedia/Mens/T-Shirts/Gradient T-Shirt/Look 12.png';
import Look_12_2 from '../../assets/multimedia/Mens/T-Shirts/Gradient T-Shirt/Look 12(2).png';
import Gradient_Logo_T_Shirt_NFT from '../../assets/multimedia/Muse(Friends-&-Family).gif';

function GradientLogoTShirtBox () {
    return (
    <StyledBoxtwo>
    <div className='box'>
        <h3 className='productname'>Gradient Logo T-Shirt</h3>
        <br />
        <h4>$200</h4>
         <Slider className="slide" 
                    imageone ={Gradient_Logo_T_Shirt_0}
                    imagetwo ={Gradient_Logo_T_Shirt_180}
                    imagethree ={Look_12}
                    imagefour ={Look_12_2}
                    imagefive ={Gradient_Logo_T_Shirt_NFT}/>
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

export default GradientLogoTShirtBox