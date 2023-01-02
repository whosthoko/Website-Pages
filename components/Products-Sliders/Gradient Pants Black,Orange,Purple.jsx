import React from 'react';
import Styled from 'styled-components';

import Slider from '../Slider';

import Gradient_Pants_Black_Purple_Orange_0 from '../../assets/multimedia/Mens/Pants/Gradient Pants Black:Purple:Orange/Gradient Pants Black, Purple & Orange_0.png';
import Gradient_Pants_Black_Purple_Orange_180 from '../../assets/multimedia/Mens/Pants/Gradient Pants Black:Purple:Orange/Gradient Pants Black, Purple & Orange_180.png';
import Look_13 from '../../assets/multimedia/Mens/Pants/Gradient Pants Black:Purple:Orange/Look 13.png';
import Look_13_2 from '../../assets/multimedia/Mens/Pants/Gradient Pants Black:Purple:Orange/Look 13(2).png';
import Gradient_Pants_Black_Purple_Orange_NFT from '../../assets/multimedia/Muse(Friends-&-Family).gif';

function GradientPantsBlackPurpleOrangeBox () {
    return (
    <StyledBoxtwo>
    <div className='box'>
        <h3 className='productname'>Gradient Pants Black/Purple/Orange</h3>
        <br />
        <h4>$400</h4>
         <Slider className="slide" 
                    imageone ={Gradient_Pants_Black_Purple_Orange_0}
                    imagetwo ={Gradient_Pants_Black_Purple_Orange_180}
                    imagethree ={Look_13}
                    imagefour ={Look_13_2}
                    imagefive ={Gradient_Pants_Black_Purple_Orange_NFT}/>
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

export default GradientPantsBlackPurpleOrangeBox;