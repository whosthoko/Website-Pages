import React from 'react';
import Styled from 'styled-components';

import Slider from '../Slider';

import Gradient_Bodysuit_Purple_Orange_0 from '../../assets/multimedia/Womens/T-Shirts & Tops/Bodysuit Purple_Orange/Bodysuit Purple&Orange_0.png';
import Gradient_Bodysuit_Purple_Orange_180 from '../../assets/multimedia/Womens/T-Shirts & Tops/Bodysuit Purple_Orange/Bodysuit Purple&Orange_180.png';
import Look_9 from '../../assets/multimedia/Womens/T-Shirts & Tops/Bodysuit Purple_Orange/Look 9.png';
import Look_9_2 from '../../assets/multimedia/Womens/T-Shirts & Tops/Bodysuit Purple_Orange/Look 9(2).png';
import Gradient_Bodysuit_Purple_Orange_NFT from '../../assets/multimedia/Muse(Friends-&-Family).gif';

function GradientBodysuitPurpleOrangeBox () {
    return (
    <StyledBoxtwo>
    <div className='box'>
        <h3 className='productname'>Gradient Bodysuit Purple/Orange</h3>
        <br />
        <h4>$150</h4>
         <Slider className="slide" 
                    imageone ={Gradient_Bodysuit_Purple_Orange_0}
                    imagetwo ={Gradient_Bodysuit_Purple_Orange_180}
                    imagethree ={Look_9}
                    imagefour ={Look_9_2}
                    imagefive ={Gradient_Bodysuit_Purple_Orange_NFT}/>
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

export default GradientBodysuitPurpleOrangeBox;