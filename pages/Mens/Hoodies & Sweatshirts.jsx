import {React}  from 'react';

//CSS
import Styled from 'styled-components';

//Components
import Slider from '../../components/Slider';

//Multimedia
import Headerimage2 from '../../assets/multimedia/Product Picture Template.png';

//Pictures

import NineteenThirtySweatshirtBox from '../../components/Products-Sliders/1930 Sweatshirt';
import TheEndHoodieBox from '../../components/Products-Sliders/The End Hoodie';
import GradientLogoHoodieBox from '../../components/Products-Sliders/Gradient Logo Hoodie';
import MovieHoodieBox from '../../components/Products-Sliders/Movie Hoodie';

function Hoodies_Sweatshirts () {
   
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
            <h2 className = "name" >Hoodies & Sweatshirts</h2>
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
export default Hoodies_Sweatshirts ;