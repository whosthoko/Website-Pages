import React from 'react';
import Styled from 'styled-components';

import Slider from '../../components/Slider';

import Greece_T_Shirt_0 from '../../assets/multimedia/Mens/T-Shirts/Greece T-Shirt/Greece T-Shirt_0.png';
import Greece_T_Shirt_180 from '../../assets/multimedia/Mens/T-Shirts/Greece T-Shirt/Greece T-Shirt_180.png';
import Look_2 from '../../assets/multimedia/Mens/T-Shirts/Greece T-Shirt/Look 2.png';
import Look_2_2 from '../../assets/multimedia/Mens/T-Shirts/Greece T-Shirt/Look 2_1.png';
import Greece_T_Shirt_NFT from '../../assets/multimedia/Muse(Friends-&-Family).gif';


function GreeceTShirtBox () {
    return (
    <StyledBoxtwo>
    <div className='box'>
        <h3 className='productname'>Greece T-Shirt</h3>
        <br />
        <h4>$200</h4>
         <Slider className="slide" 
                    imageone ={Greece_T_Shirt_0}
                    imagetwo ={Greece_T_Shirt_180}
                    imagethree ={Look_2}
                    imagefour ={Look_2_2}
                    imagefive ={Greece_T_Shirt_NFT}/>
         <button className='btn'></button>
    </div>
    </StyledBoxtwo>
    )
}

const StyledBoxtwo = Styled.div `

.box {
}

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

export default GreeceTShirtBox