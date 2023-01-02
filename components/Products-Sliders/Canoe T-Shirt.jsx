import React from 'react';
import Styled from 'styled-components';

import Slider from '../Slider';

import Canoe_T_Shirt_0 from '../../assets/multimedia/Mens/T-Shirts/Canoe T-Shirt/Canoe T-Shirt_0.png';
import Canoe_T_Shirt_180 from '../../assets/multimedia/Mens/T-Shirts/Canoe T-Shirt/Canoe T-Shirt_180.png';
import Look_10 from '../../assets/multimedia/Mens/T-Shirts/Canoe T-Shirt/Look 10.png';
import Look_10_2 from '../../assets/multimedia/Mens/T-Shirts/Canoe T-Shirt/Look 10(2).png';
import Canoe_T_Shirt_NFT from '../../assets/multimedia/Muse(Friends-&-Family).gif';


function CanoeTShirtBox () {
    return (
    <StyledBoxtwo>
    <div className='box'>
    <h3 className='productname'>Canoe T-Shirt</h3>
                <br />
                <h4>$200</h4>
                <Slider imageone ={Canoe_T_Shirt_0}
                        imagetwo ={Canoe_T_Shirt_180}
                        imagethree ={Look_10}
                        imagefour ={Look_10_2}
                        imagefive ={Canoe_T_Shirt_NFT}/>
                <button className='btn'> </button>
               
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

export default CanoeTShirtBox