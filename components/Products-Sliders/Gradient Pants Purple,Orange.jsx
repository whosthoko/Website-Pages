import React from 'react';
import Styled from 'styled-components';

import Slider from '../Slider';

import Gradient_Pants_Purple_Orange_0 from '../../assets/multimedia/Womens/Pants/Pants Purple_Orange/Gradient Pants Purple & Orange_0.png';
import Gradient_Pants_Purple_Orange_180 from '../../assets/multimedia/Womens/Pants/Pants Purple_Orange/Gradient Pants Purple & Orange_180.png';
import Look_8 from '../../assets/multimedia/Womens/Pants/Pants Purple_Orange/Look 8.png';
import Look_8_2 from '../../assets/multimedia/Womens/Pants/Pants Purple_Orange/Look 8(2).png';
import Gradient_Pants_Purple_Orange_NFT from '../../assets/multimedia/Muse(Friends-&-Family).gif';

function GradientPantsPurpleOrangeBox () {
    return (
    <StyledBoxtwo>
    <div className='box'>
        <h3 className='productname'>Gradient Pants Purple/Orange</h3>
        <br />
        <h4>$400</h4>
         <Slider className="slide" 
                    imageone ={Gradient_Pants_Purple_Orange_0}
                    imagetwo ={Gradient_Pants_Purple_Orange_180}
                    imagethree ={Look_8}
                    imagefour ={Look_8_2}
                    imagefive ={Gradient_Pants_Purple_Orange_NFT}/>
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

export default GradientPantsPurpleOrangeBox;