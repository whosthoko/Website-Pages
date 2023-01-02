import {React}  from 'react';

//CSS
import Styled from 'styled-components';

//Components
import Slider from '../../components/Slider';

//Multimedia
import Headerimage2 from '../../assets/multimedia/Product Picture Template.png';

import MuseTShirtBox from '../../components/Products-Sliders/Muse T-Shirt';
import ChampagneTShirtBox from '../../components/Products-Sliders/Champagne T-Shirt';
import CherubTShirtBox from '../../components/Products-Sliders/Cherub T-Shirt';
import GreeceTShirtBox from '../../components/Products-Sliders/Greece T-Shirt';
import GradientLogoTShirtBox from '../../components/Products-Sliders/Gradient Logo T-Shirt';
import MovieStarsTShirtBox from '../../components/Products-Sliders/Movie Stars T-Shirt';
import CanoeTShirtBox from '../../components/Products-Sliders/Canoe T-Shirt';
import GradientBodysuitPurpleOrangeBox from '../../components/Products-Sliders/Gradient Bodysuit White & Blue';
import GradientBodysuitBlueWhiteBox from '../../components/Products-Sliders/Gradient Bodysuit White,Blue';
import GradientBodysuitRedOrangeBox from '../../components/Products-Sliders/Gradient Bodysuit Red,Orange';

function Tshirts_Tops () {
   
    return (
<StyledHome>
    <div>
         {/* Head Images*/}
        <div className = "headimages">
            <div className = "pic" >
            <img className = "beach" src= {Headerimage2} alt="" />
            </div>
        </div>
         {/* Page Name*/}
        <div className = "pagename">
            <h2 className = "name" >T-Shirts & Tops</h2>
        </div>
         {/* Products*/}
        <div className='productgrid'>
            <div className="col">
               <ChampagneTShirtBox/>
            </div>
            <div className="col">
               <CherubTShirtBox/>
            </div>
            <div className="col">
                <GreeceTShirtBox/>
            </div>
            <div className="col">
               <MuseTShirtBox/>
            </div>
            <div className="col">
                <GradientLogoTShirtBox/>
            </div>
            <div className="col">
               <MovieStarsTShirtBox/>
            </div>
            <div className="col">
              <CanoeTShirtBox/>
            </div>
            <div className="col">
                <GradientBodysuitPurpleOrangeBox/>
            </div>
            <div className="col">
                <GradientBodysuitRedOrangeBox/>
            </div>
            <div className="col">
              <GradientBodysuitBlueWhiteBox/>
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

.beach{
    width: 100%;
    height: 350px;
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

    }
}

`;
export default Tshirts_Tops;