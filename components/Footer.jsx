import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//icons
import{ FaInstagram } from "react-icons/fa"; 

function Footer() {
    return (
      <StyledFooter>
        <section>
        <div>
             <div className="support">
            <ul>
              <h2 className="supportheading">Support</h2>
              <li> <Link to='' >FAQ</Link> </li>
              <li> <Link to='' >Shipping</Link> </li>
              <li> <Link to='' >Payment</Link> </li>
              <li> <Link to='' >Track Orders</Link> </li>
              <li> <Link to='' >Returns</Link> </li>
            </ul>
        </div>
        <div className="support">
          <ul>
              <h2 className="snstblvdheading">SNST BLVD</h2>
              <li> <Link to='' >Our Canvas</Link> </li>
              <li> <Link to='' >Privacy Policy</Link> </li>
            </ul>
        </div>
        <div className="support">
          <ul>
              <h2 className="contactusheading">Contact Us</h2>
              <li>  <Link to=''>Email</Link> </li>
            </ul>
        </div>
        <div className="support">
        <ul>
          <h2 className="socialmedia">Social Media</h2>
          <li className="insta"><a href="https://www.instagram.com/snstxblvd/" target="_blank" rel="noreferrer"><FaInstagram size={'3rem'} /> </a> </li>
        </ul>
      </div>
        </div>
        </section>
        </StyledFooter>
    );
}
const StyledFooter = styled.div`

 background: transparent;

.support {
  flex: 1;
  text-align: left;
  float: left;
  margin: 14vh;
  border: 2px;
  border-top-color: blue;
  border-right-style: solid;
  border-right-color: red;

}

.support ul li {
  list-style: none;
  display: block;
  padding-bottom: 15px;
  position: relative;
}

.support ul li a {
  color: black;
  text-decoration: none;
}
.supportheading {
  color: black;
  margin-bottom: 5vh;
  margin-top: -10vh;
  text-align: center
  }
  
  .snstblvdheading {
    color: black;
    margin-bottom: 5vh;
    margin-top: -10vh;
    text-align: center
    }
  
  .contactusheading {
    color: black;
      margin-bottom: 5vh;
      margin-top: -10vh;
      text-align: center
  }
  
  .snstblvdheading {
    color: black;
    margin-bottom: 5vh;
    margin-top: -10vh;
    text-align: center
    }
  
  .socialmedia {
    color: black;
    margin-bottom: 5vh;
    margin-top: -10vh;
    text-align: center
    }
  
  .insta {
    text-align: center;
  }

  .FaInstagram {
    size: 10000px;
  }

  `;
export default Footer;