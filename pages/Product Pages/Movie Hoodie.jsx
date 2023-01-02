import React from 'react';
import Styled from 'styled-components';

import Slider from '../../components/Product Slider'
import Accordion from '../../components/Accordion Product Page/Accordion';
import Paragraph from '../../components/Accordion Product Page/paragraph';
import Payment from '../../components/Accordion Product Page/payment';
import ProductDetails from '../../components/Accordion Product Page/product details';

//Pictures
import Movie_Hoodie_0 from '../../assets/multimedia/Mens/Hoodies & Sweatshirts/Movie Hoodie/Movie Hoodie_0.png';
import Movie_Hoodie_180 from '../../assets/multimedia/Mens/Hoodies & Sweatshirts/Movie Hoodie/Movie Hoodie_180.png';
import Look_13 from '../../assets/multimedia/Mens/Hoodies & Sweatshirts/Movie Hoodie/Look 13.png';
import Look_13_2 from '../../assets/multimedia/Mens/Hoodies & Sweatshirts/Movie Hoodie/Look 13(2).png';
import Movie_Hoodie_NFT from '../../assets/multimedia/Muse(Friends-&-Family).gif';



class  Movie_Hoodie extends React.Component { 
    render () {
    return (
        <StyledHome>
        <div>
            <div className='productinfo'>
                <h1 className='name'>Movie Hoodie</h1>
                <h3 className='price'>$500</h3>
            <div className='selectsize'>
                <form>
                    <select id ="Select Size" className='selectsize2'>
                        <option value = "Select Size">Select Size</option>
                        <option value = "Small">Small</option>
                        <option value = "Medium">Medium</option>
                        <option value = "Large">Large</option>

                    </select>
                </form>
            </div>
            <div>
            <a href="url" className='sizeguide'>Size Guide</a>
            </div>
            <div>
                <button className='btn'>Add To Shopping Bag</button>
            </div>
            <div>
                <Accordion 
                title= "Product Details" 
                content={<ProductDetails/>}/>
                 <Accordion 
                title= "Shipping"
                content={<Paragraph/>} />
                <Accordion 
                title= "Payment"
                content={<Payment/>} />
            </div>
            </div>
            <div className='Slider'>
            <Slider imageone ={Movie_Hoodie_0}
                        imagetwo ={Movie_Hoodie_180}
                        imagethree ={Look_13}
                        imagefour ={Look_13_2}
                        imagefive ={Movie_Hoodie_NFT}
                />
            </div>
            <div></div>
        </div>
        </StyledHome>
    )
}
}

const StyledHome = Styled.div `
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

background-repeat: no-repeat;
    background: linear-gradient(180deg, rgba(110,0,190,1) 0%, rgba(255,151,0,1) 95%);

.page {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.productinfo{
position: absolute;
left: 750px;
top: 30px;
color: white;
text-align: center;
z-index: 1;
    .name{
        margin-bottom: 15px;
        font-size: 60px;   
    }
   .price{
    margin-bottom: -50px;
    font-size: 30px;
   }
   .sizeguide {
    position: relative;
    right: 258px;
    top: 180px;
    font-size: 18px;
    color: white;
   }
   .btn{
    position: relative;
    top: 175px;
    margin: 20px;
    width: 600px;
    background-color: white;
    border: 1px solid white;
    border-color: white;
    border-width: 2px;
    border-radius: 1px;
    color: rgb(172, 84, 94);
    font-size: 30px;

   }
   .yes {
    position: relative;
    top: 175px;
    right: 250px;
    margin: 10px;
   }
}

.selectsize{
    max-width: 600px;
    margin: auto;
    border-radius: 5px;
    background: transparent;
    }

    .selectsize2 {
        position: relative;
        top: 175px;
        width: 100%;
        height: 50px;
        padding: 12px, 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1.5px solid white;
        border-radius: 1px;
        box-sizing:border-box;
        background: transparent;
        color: white;
        font-size: 20px;
    }


.Slider {
    position: relative;
    right: 380px;
    bottom: 60px;
    
}

`

export default Movie_Hoodie ;
