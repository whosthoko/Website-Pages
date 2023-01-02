import {React}  from 'react';

//CSS
import Styled from 'styled-components';

//Components

//Multimedia
import Headerimage2 from '../assets/multimedia/Product Picture Template.png';
import ChampagneTShirtBox from '../components/Products-Sliders/Champagne T-Shirt';
import GradientShortsBlueWhiteBox from '../components/Products-Sliders/Gradient Shorts Blue,White';
import GradientShortsBlackPurpleOrangeBox from '../components/Products-Sliders/Gradient Shorts Black,Purple,Orange';
import GradientShortsRedOrangeBox from '../components/Products-Sliders/Gradient Shorts Red,Orange';
import CherubTShirtBox from '../components/Products-Sliders/Cherub T-Shirt';
import GreeceTShirtBox from '../components/Products-Sliders/Greece T-Shirt';
import MuseTShirtBox from '../components/Products-Sliders/Muse T-Shirt';
import GradientLogoTShirtBox from '../components/Products-Sliders/Gradient Logo T-Shirt';
import MovieStarsTShirtBox from '../components/Products-Sliders/Movie Stars T-Shirt';
import CanoeTShirtBox from '../components/Products-Sliders/Canoe T-Shirt';
import GradientLogoHoodieBox from '../components/Products-Sliders/Gradient Logo Hoodie';
import MovieHoodieBox from '../components/Products-Sliders/Movie Hoodie';
import TheEndHoodieBox from '../components/Products-Sliders/The End Hoodie';
import NineteenThirtySweatshirtBox from '../components/Products-Sliders/1930 Sweatshirt';
import GradientPantsBlackPurpleOrangeBox from '../components/Products-Sliders/Gradient Pants Black,Orange,Purple';
import GradientPantsBlueWhiteBox from '../components/Products-Sliders/Gradient Pants Blue,White';
import GradientPantsRedOrangeBox from '../components/Products-Sliders/Gradient Pants Red,Orange';
import GradientPantsPurpleOrangeBox from '../components/Products-Sliders/Gradient Pants Purple,Orange';
import GradientBodysuitPurpleOrangeBox from '../components/Products-Sliders/Gradient Bodysuit White & Blue';
import GradientBodysuitRedOrangeBox from '../components/Products-Sliders/Gradient Bodysuit Red,Orange';
import GradientBodysuitWhiteBlueBox from '../components/Products-Sliders/Gradient Bodysuit White,Blue';

function Summerneverends () {
   
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
            <h2 className = "name" >Summer Never Ends Collection</h2>
            <br/>
            <p className='name'>Summer Never Ends is capturing a feeling and a time and having the visitor experience it through our collection</p>
        </div>
         {/* Products*/}
        <div className='productgrid'>
            <div className="col">
            <GradientLogoHoodieBox/>
            </div>
            <div className="col">
               <MovieHoodieBox/>
            </div>
            <div className="col">
               <TheEndHoodieBox/>
            </div>
            <div className="col">
               <NineteenThirtySweatshirtBox/>
            </div>
            <div className="col">
               <GradientPantsBlackPurpleOrangeBox/>
            </div>
            <div className="col">
                <GradientPantsBlueWhiteBox/>
            </div>
            <div className="col">
               <GradientPantsRedOrangeBox/>
            </div>
            <div className="col">
                <GradientPantsPurpleOrangeBox/>
            </div>
            <div className="col">
             <GradientShortsBlackPurpleOrangeBox/>
            </div>
            <div className="col">
            <GradientShortsBlueWhiteBox/>
            </div>
            <div className="col">
              <GradientShortsRedOrangeBox/>
            </div>
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
               <GradientBodysuitWhiteBlueBox/>
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
    height: 100%;
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
            font-size: 25px;
            padding: 10px;
            margin: 0px;
        }

        .h4 {
            padding: 0px;
        }
    }
}

`;
export default Summerneverends ;