import React from 'react';
import Styled from 'styled-components';

import Slider from '../Slider';

import Movie_Stars_T_Shirt_0 from '../../assets/multimedia/Mens/T-Shirts/Movie Stars T-Shirt/Movie Stars_0.png';
import Movie_Stars_T_Shirt_180 from '../../assets/multimedia/Mens/T-Shirts/Movie Stars T-Shirt/Movie Stars_180.png';
import Look_15 from '../../assets/multimedia/Mens/T-Shirts/Movie Stars T-Shirt/Look 15.png';
import Look_15_2 from '../../assets/multimedia/Mens/T-Shirts/Movie Stars T-Shirt/Look 15(2).png';
import Movie_Stars_T_Shirt_NFT from '../../assets/multimedia/Muse(Friends-&-Family).gif';


function MovieStarsTShirtBox () {
    return (
    <StyledBoxtwo>
    <div className='box'>
        <h3 className='productname'>Movie Stars T-Shirt</h3>
        <br />
        <h4>$200</h4>
         <Slider className="slide" 
                    imageone ={Movie_Stars_T_Shirt_0}
                    imagetwo ={Movie_Stars_T_Shirt_180}
                    imagethree ={Look_15}
                    imagefour ={Look_15_2}
                    imagefive ={Movie_Stars_T_Shirt_NFT}/>
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

export default MovieStarsTShirtBox