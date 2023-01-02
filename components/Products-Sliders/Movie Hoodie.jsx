import React from 'react';
import Styled from 'styled-components';

import Slider from '../Slider';

import Movie_Hoodie_0 from '../../assets/multimedia/Mens/Hoodies & Sweatshirts/Movie Hoodie/Movie Hoodie_0.png';
import Movie_Hoodie_180 from '../../assets/multimedia/Mens/Hoodies & Sweatshirts/Movie Hoodie/Movie Hoodie_180.png';
import Look_13 from '../../assets/multimedia/Mens/Hoodies & Sweatshirts/Movie Hoodie/Look 13.png';
import Look_13_2 from '../../assets/multimedia/Mens/Hoodies & Sweatshirts/Movie Hoodie/Look 13(2).png';
import Movie_Hoodie_NFT from '../../assets/multimedia/Muse(Friends-&-Family).gif';


function MovieHoodieBox () {
    return (
    <StyledBoxtwo>
    <div className='box'>
        <h3 className='productname'>Movie Hoodie</h3>
        <br />
        <h4>$500</h4>
         <Slider className="slide" 
                    imageone ={Movie_Hoodie_0}
                    imagetwo ={Movie_Hoodie_180}
                    imagethree ={Look_13}
                    imagefour ={Look_13_2}
                    imagefive ={Movie_Hoodie_NFT}/>
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

export default MovieHoodieBox