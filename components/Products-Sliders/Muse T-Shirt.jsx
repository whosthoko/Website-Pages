import React from 'react';
import Styled from 'styled-components';

import Slider from '../../components/Slider';

import Muse_T_Shirt_0 from '../../assets/multimedia/Mens/T-Shirts/Muse T-Shirt/SNST BLVD Muse T-Shirt_0.png';
import Muse_T_Shirt_180 from '../../assets/multimedia/Mens/T-Shirts/Muse T-Shirt/SNST BLVD Muse T-Shirt_180.png';
import Look_1 from '../../assets/multimedia/Mens/T-Shirts/Muse T-Shirt/Look 1.png';
import Look_1_2 from '../../assets/multimedia/Mens/T-Shirts/Muse T-Shirt/Look 1(2).png';
import Muse_T_Shirt_NFT from '../../assets/multimedia/Muse(Friends-&-Family).gif';


function MuseTShirtBox () {
    return (
    <StyledBoxtwo>
    <div className='box'>
        <h3 className='productname'>Muse T-Shirt</h3>
        <br />
        <h4>$200</h4>
         <Slider className="slide" 
                    imageone ={Muse_T_Shirt_0}
                    imagetwo ={Muse_T_Shirt_180}
                    imagethree ={Look_1}
                    imagefour ={Look_1_2}
                    imagefive ={Muse_T_Shirt_NFT}/>
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

export default MuseTShirtBox