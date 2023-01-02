import {React}  from 'react';

//CSS
import Styled from 'styled-components';

//Components
import Slider from '../../components/Slider';

//Multimedia
import Headerimage2 from '../../assets/multimedia/Product Picture Template.png';

import GradientShortsBlackPurpleOrangeBox from '../../components/Products-Sliders/Gradient Shorts Black,Purple,Orange';
import GradientShortsBlueWhiteBox from '../../components/Products-Sliders/Gradient Shorts Blue,White';
import GradientShortsRedOrangeBox from '../../components/Products-Sliders/Gradient Shorts Red,Orange';

//Pictures

function Shorts () {
    return (
<StyledHome>
    <div>
         {/* Head Images*/}
        <div className = "headimages">
            <div className = "pic" >
            <img className = "Headerimage" src= {Headerimage2} alt="" />
            </div>
        </div>
         {/* Page Name*/}
        <div className = "pagename">
            <h2 className = "name" >Shorts</h2>
        </div>
         {/* Products*/}
        <div className='productgrid'>
            <div className="col">
              <GradientShortsBlackPurpleOrangeBox/>
            </div>
            <div className="col">
              <GradientShortsBlueWhiteBox/>
            </div>
            <div className="col">
               <GradientShortsRedOrangeBox/>
            </div>
        </div>
    </div>
</StyledHome>
    );
}




const StyledHome = Styled.div`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

height: 100%;
width: 100%;  
background: linear-gradient(180deg, rgba(110,0,190,1) 0%, rgba(255,151,0,1) 95%);

.Headerimage{
    width: 100%;
    height: 300px;
    background-size: 100% 100%;
}

.pagename {
    padding: 20px; 
    border: 8px red;
    margin: 0;
    
}

.name {
    margin: 20px;
    color: white;
    text-align: center;
}

.productgrid {
    display: grid;
    grid-gap : 0px;
    padding: 0px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
    }

    .col {
        border:2px solid white;
        color: white;
        text-align: center;
        background: transparent;
        padding: 0px;

        .productname {
            font-size: 20px;
            padding: 0px;
        }

        .img {
           
            
        }
    }
}

`;
export default Shorts ;