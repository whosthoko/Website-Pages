import React from 'react';
import Styled from 'styled-components';

import Slider from '../../components/Slider';

import Cherub_T_Shirt_0 from '../../assets/multimedia/Mens/T-Shirts/Cherub T-Shirt/Cherub T-Shirt_0.png';
import Cherub_T_Shirt_180 from '../../assets/multimedia/Mens/T-Shirts/Cherub T-Shirt/Cherub T-Shirt_180.png';
import Look_11 from '../../assets/multimedia/Mens/T-Shirts/Cherub T-Shirt/Look 11.png';
import Look_11_2 from '../../assets/multimedia/Mens/T-Shirts/Cherub T-Shirt/Look 11(2).png';
import Cherub_T_Shirt_NFT from '../../assets/multimedia/Muse(Friends-&-Family).gif';

function CherubTShirtBox () {
    return (
    <StyledBox>
    <div className='box'>
        <h3 className='productname'>Cherub T-Shirt</h3>
        <br />
        <h4>$200</h4>
         <Slider className="slide" 
                    imageone ={Cherub_T_Shirt_0}  style={{ width: 500, height: 550 }}
                    imagetwo ={Cherub_T_Shirt_180}  styletwo={{ width: 500, height: 550 }}
                    imagethree ={Look_11}
                    imagefour ={Look_11_2}
                    imagefive ={Cherub_T_Shirt_NFT}/>
         <button className='btn'></button>
    </div>
    </StyledBox>
    )
}

const StyledBox = Styled.div `

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

export default CherubTShirtBox