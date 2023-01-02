import React from 'react';
import Styled from 'styled-components';

import Slider from '../Slider';

import Gradient_Bodysuit_Blue_White_0 from '../../assets/multimedia/Womens/T-Shirts & Tops/Bodysuit White_Blue/Bodysuit blue &white_0.png';
import Gradient_Bodysuit_Blue_White_180 from '../../assets/multimedia/Womens/T-Shirts & Tops/Bodysuit White_Blue/Bodysuit blue &white_180.png';
import Look_5 from '../../assets/multimedia/Womens/T-Shirts & Tops/Bodysuit White_Blue/Look 5.png';
import Look_5_2 from '../../assets/multimedia/Womens/T-Shirts & Tops/Bodysuit White_Blue/Look 5(2).png';
import Gradient_Bodysuit_Blue_White_NFT from '../../assets/multimedia/Muse(Friends-&-Family).gif';

function GradientBodysuitWhiteBlueBox () {
    return (
    <StyledBoxtwo>
    <div className='box'>
        <h3 className='productname'>Gradient Bodysuit White/Blue</h3>
        <br />
        <h4>$150</h4>
         <Slider className="slide" 
                    imageone ={Gradient_Bodysuit_Blue_White_0}
                    imagetwo ={Gradient_Bodysuit_Blue_White_180}
                    imagethree ={Look_5}
                    imagefour ={Look_5_2}
                    imagefive ={Gradient_Bodysuit_Blue_White_NFT}/>
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

export default GradientBodysuitWhiteBlueBox;