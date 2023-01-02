import React from "react";
import Styled from "styled-components"
import CountryPicker from "../../components/Country Picker";
import CanoeTshirtCheckoutCard from "../../components/Shopping Bag Cards/Summer Never Ends/T-Shirts/Checkout Card Canoe T-Shirt";
import MuseTshirtCheckoutCard from "../../components/Shopping Bag Cards/Summer Never Ends/T-Shirts/Checkout Card Muse T-Shirt";

function Checkout () {
    return (
        <StyledCheckout>
        <div className="checkout">
            <h1>Login</h1>
            <div className="Loginbox">
             <h2>Login Box</h2>
            </div>
            <h1>Shipping</h1>
            <div className="Shippingbox">
                <CountryPicker/>
            <form>
                <label>
                   First Name
                <input type="text" name="firstname" />
                </label>
                <label>
                   Last Name
                <input type="text" name="lastname" />
                </label>
                <label>
                   Address
                <input type="text" name="address" />
                </label>
                <label>
                   Phone Number
                <input type="text" name="Number" />
                </label>
            </form>
            </div>
            <h1>Payment</h1>
            <div className="Paymentbox">
            <form action="">
                <input type="checkbox" id="TsandCs" name="TsandCs" value="TsandCs"></input>
                <label>Debit or Credit Card</label><br></br>
                <input type="checkbox" id="TsandCs" name="TsandCs" value="TsandCs"></input>
                <label>Paypal</label><br></br>
                <input type="checkbox" id="TsandCs" name="TsandCs" value="TsandCs"></input>
                <label>Apple Pay</label><br></br>
                <input type="checkbox" id="TsandCs" name="TsandCs" value="TsandCs"></input>
                <label>Binance Pay</label><br></br>
                <input type="checkbox" id="TsandCs" name="TsandCs" value="TsandCs"></input>
                <label>Wallet</label><br></br>
                <label>Wallet</label><br></br>
                <label>Wallet</label><br></br>
                <label>Wallet</label><br></br>
                <label>Wallet</label><br></br>
                <label>Wallet</label><br></br>
                <label>Wallet</label><br></br>
                <label>Wallet</label><br></br>
                </form>
            </div>
            <div className="Checkout_and_Shoppingbag">
            <div className="Checkoutbox">
                <h2 className="shoppingbagone">Shopping Bag</h2>
                <h2 className="shoppingbagprice">$200</h2>
                <h2 className="shipping">Shipping</h2>
                <h2 className="shippingprice">$30</h2>
                <h2 className="total">Total</h2>
                <h2 className="totalprice">$230</h2>
                <div className="checkbox">
                <form action="">
                <input type="checkbox" id="TsandCs" name="TsandCs" value="TsandCs"></input>
                <label htmlFor="TsandCs">I agree to the    
                <a href="url" className='sizeguide'>   Terms & Conditions</a> </label><br></br>
                </form>
                </div>
                <button> Checkout</button>
            </div>
            <div className="Shoppingbag">
                <h2 className="shoppingbagtwo">Shopping Bag</h2>
                <a href="url" className='editshoppingbag'>Edit Shopping Bag</a>
                <MuseTshirtCheckoutCard/>
                <CanoeTshirtCheckoutCard/>
                <CanoeTshirtCheckoutCard/>
            </div>
            </div>
        </div>
    </StyledCheckout>
    )
}

export default Checkout;

const StyledCheckout = Styled.div `
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

background-repeat: no-repeat;
    background: linear-gradient(180deg, rgba(110,0,190,1) 0%, rgba(255,151,0,1) 95%);
    height: 100%;

.checkout {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

h1{
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 20px;
    color: white;
}

.Loginbox {
    border: 3px solid white;
    position: relative;
    width: 50%;
    height: 200px;
    margin-left: 20px;
}

.Shippingbox {
    border: 3px solid white;
    position: relative;
    width: 50%;
    height: 200px;
    margin-left: 20px;
}

.Paymentbox {
    border: 3px solid white;
    position: relative;
    width: 50%;
    height: 200px;
    margin-left: 20px;
    margin-bottom: 15px;
}

.Checkout_and_Shoppingbag {
    position: fixed;
    right: 0;
    height: 100%;
}

.Checkoutbox {
    border: 2px solid white;
    position: relative;
    padding: 10px;
    border:2px solid white;
    color: white;
    width: 35em;
    height: 40%;
}



.shoppingbagone {
    float: left;
}

.shoppingbagprice {
    margin: 10px;
    position: relative;
    bottom: 5px;
    left: 200px;
}

.shippingprice {
    margin: 10px;
    position: relative;
    bottom: 5px;
    left: 292px;
}

.totalprice {
    margin: 10px;
    position: relative;
    bottom: 5px;
    left: 330px;
}


.shipping {
    float: left;
    
}

.total {
    float: left;
}
button {
    position: relative;
    top: 60px;
    width: 100%;
    border: 1px solid white;
    background-color: white;
    border-radius: 1px;
    color: rgb(172, 84, 94);
    font-size: 30px;
}

.checkbox {
    position: relative;
    top: 25px;
}

.shoppingbagtwo {
    position: relative;
    color: white;
    float: left;
}

.Shoppingbag {
    border: 2px solid white;
    padding: 10px;
    height: 60%;
    overflow: auto;
}

.editshoppingbag {
    font-size: 20px;
    position: relative;
    top: 8px;
    left: 120px;
    margin: 10px;
    color: white;

}

.Paymentbox {
    overflow: auto;
}

`