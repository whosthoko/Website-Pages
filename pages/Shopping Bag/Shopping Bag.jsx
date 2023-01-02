import React from "react";

import Styled from 'styled-components';
import CanoeTshirtCard from "../../components/Shopping Bag Cards/Summer Never Ends/T-Shirts/Canoe T-Shirt";
import CherubTshirtCard from "../../components/Shopping Bag Cards/Summer Never Ends/T-Shirts/Cherub T-Shirt";
import GradientLogoTshirtCard from "../../components/Shopping Bag Cards/Summer Never Ends/T-Shirts/Gradient Logo T-Shirt";
import GreeceTshirtCard from "../../components/Shopping Bag Cards/Summer Never Ends/T-Shirts/Greece T-Shirt";

import MovieHoodieCard from "../../components/Shopping Bag Cards/Summer Never Ends/Hoodies & Sweatshirts/Movie Hoodie";
import MuseTshirtCard from "../../components/Shopping Bag Cards/Summer Never Ends/T-Shirts/Muse T-Shirt";
import GradientLogoHoodieCard from "../../components/Shopping Bag Cards/Summer Never Ends/Hoodies & Sweatshirts/Gradient Logo Hoodie";
import NineteenThirtySweatshirtCard from "../../components/Shopping Bag Cards/Summer Never Ends/Hoodies & Sweatshirts/1930 Sweatshirt";
import GradientPantsBluePurpleOrangeCard from "../../components/Shopping Bag Cards/Summer Never Ends/Pants/Gradient Pants Black,Purple,Orange";
import GradientPantsBlueWhiteCard from "../../components/Shopping Bag Cards/Summer Never Ends/Pants/Gradient Pants Blue,White";
import GradientPantsPurpleOrangeCard from "../../components/Shopping Bag Cards/Summer Never Ends/Pants/Gradient Pants Purple,Orange";
import GradientShortsBlackPurpleOrangeCard from "../../components/Shopping Bag Cards/Summer Never Ends/Shorts/Gradient Shorts Black,Purple,Orange";
import GradientShortsBlueWhiteCard from "../../components/Shopping Bag Cards/Summer Never Ends/Shorts/Gradient Shorts Blue,White";
import GradientShortsRedOrangeCard from "../../components/Shopping Bag Cards/Summer Never Ends/Shorts/Gradient Shorts Red,Orange";
import GradientBodysuitRedOrangeCard from "../../components/Shopping Bag Cards/Summer Never Ends/Bodysuits/Gradient Bodysuit Red,Orange";
import GradientBodysuitBlueWhiteCard from "../../components/Shopping Bag Cards/Summer Never Ends/Bodysuits/Gradient Bodysuit Blue, White";

function Shoppingbag () {
    return (
        <Styledshoppingbag>
        <div className="shop">
            <div className="Items">
                <h1 className="Shoppingbag">Shopping Bag</h1>
                <a href="url" className='continueshopping'>Continue Shopping</a>
                <MovieHoodieCard/>
                <MuseTshirtCard/>
                <GradientLogoTshirtCard/>
                <GradientLogoHoodieCard/>
                <NineteenThirtySweatshirtCard/>
                <GradientPantsBluePurpleOrangeCard/>
                <GradientPantsBlueWhiteCard/>
                <GradientPantsPurpleOrangeCard/>
                <GradientShortsBlackPurpleOrangeCard/>
                <GradientShortsBlueWhiteCard/>
                <GradientShortsRedOrangeCard/>
                <GradientBodysuitRedOrangeCard/>
                <GradientBodysuitBlueWhiteCard/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
            <div className="Total_and_Information">
                    <div className="Total">
                        <div className="together">
                        <h2 className="totalname">Total</h2>
                        <h4 className="little">*Shipping Calculated After You Fill Your Address</h4>
                        </div>
                        <h2 className="price">$500</h2>
                        <button className="btn">Proceed To Checkout</button>
                    </div>
                    <div className="Information">
                        <div className="Info">
                            <h1 className="yes">Payment</h1>
                            <h3>We accept all major credit cards, Paypal & Binance Pay</h3>
                        </div>
                        <div className="Info">
                            <h1 className="yes">Shipping & Delivery</h1>
                            <h3>Shipping is charged in the checkout when shipping location is specified.</h3>
                            <h3>Shipping charge is dependant on the location</h3>
                        </div>
                        <div className="Info">
                            <h1 className="yes">Returns & Exchanges</h1>
                            <h3>No Returns or Exchanges. All sales are final</h3>
                        </div>
                    </div>
            </div>
        </div>
        </Styledshoppingbag>
    )
}

const Styledshoppingbag = Styled.header `
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

background-repeat: no-repeat;
    background: linear-gradient(180deg, rgba(110,0,190,1) 0%, rgba(255,151,0,1) 95%);
    height: 100%;

.shop {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.Shoppingbag {
    font-size: 60px;
    color: white;
    padding: 20px;
    position: relative;
    left: 40px;
}

.continueshopping {
    font-size: 25px;
    color: white;
    position: relative;
    left: 580px;
    bottom: 60px;
}


.Total_and_Information {
    position: fixed;
    right: 0;
    height: 100%;
}

.Total {
    position: relative;
    padding: 10px;
    border:2px solid white;
    color: white;
    width: 30em;
    height: 30%;
}
    .totalname {
    position: relative;
    font-size: 50px;
    }
.together {
    position: relative;
    top: 70px;
}
    .btn {
    position: relative;
    top: 40px;
    width: 100%;
    border: 1px solid white;
    background-color: white;
    border-radius: 1px;
    color: rgb(172, 84, 94);
    font-size: 30px;
    }
    .little{
        font-size: 18px;
        font-weight: lighter;
        float: left;
    }
    .price {
        position: relative;
        bottom: 5px;
        left: 300px;
        float: left;
        font-size: 40px;
    }


.Information {
    border: 2px solid white;
    padding: 10px;
    height: 79%;
}

.Info {
    position: relative;
    top: 50px;
    padding-bottom: 80px;
    color: white;
}

.yes {
    font-size: 30px;
    padding: 10px
}
h3 {
    position: relative;
    left: 12px;
    font-size: 12px;
}
.
`
export default Shoppingbag