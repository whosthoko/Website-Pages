import React from 'react';
import Styled from 'styled-components';

import Slider from '../../components/Slider';

import Champagne_T_Shirt_0 from '../../assets/multimedia/Mens/T-Shirts/Champagne T-Shirt/SNST BLVD Summer Never Ends Champagne T-Shirt_0.png';
import Champagne_T_Shirt_180 from '../../assets/multimedia/Mens/T-Shirts/Champagne T-Shirt/SNST BLVD Summer Never Ends Champagne T-Shirt_180.png';
import Look_3 from '../../assets/multimedia/Mens/T-Shirts/Champagne T-Shirt/Look 3.png';
import Look_3_2 from '../../assets/multimedia/Mens/T-Shirts/Champagne T-Shirt/Look 3(2).png';
import Champagne_T_Shirt_NFT from '../../assets/multimedia/Muse(Friends-&-Family).gif';

function ChampagneTShirtBox () {
    return (
    <StyledBox>
    <div>
        <h3 className='productname'>Champagne T-Shirt</h3>
                <br />
                <h4>$200</h4>
                <Slider imageone ={Champagne_T_Shirt_0}
                        imagetwo ={Champagne_T_Shirt_180}
                        imagethree ={Look_3}
                        imagefour ={Look_3_2}
                        imagefive ={Champagne_T_Shirt_NFT}/>
        <button className='btn'></button>
    </div>
    </StyledBox>
    )
}

const StyledBox = Styled.div `
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
export default ChampagneTShirtBox