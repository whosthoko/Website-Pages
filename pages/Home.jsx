import React from 'react'
import Styled from 'styled-components';

//components

//mutlimedia
import newyorkergraphic from '../assets/multimedia/New Yorker Graphic.png';
import VeniceBeachLosAngeles from '../assets/multimedia/Venice Beach Los Angeles.mp4';
import twowomansmokingacigerette from '../assets/multimedia/Two Woman Smoking A Cigerette 2.png';
import withlovecollection from '../assets/multimedia/With Love.png';
import Summerneverends from '../assets/multimedia/Summer Never Ends Graphic V1.png';





function Home() {
    return (
       <StyledHome>
        <section>
          <ul>
             <div className="container1">
                 <h2 className="heading1">Spring / Summer 23 "Summer Never Ends" Campaign</h2>
                 <li className="VeniceBeachLosAngeles"><video className = "VeniceBeachLosAngeles" src= {VeniceBeachLosAngeles} alt="" autoPlay muted controls/></li> 
                 <button className ="btn">Explore Collection</button> <button className ="btn2">Our Canvas</button> 
              </div> 
              <div className="container2"> 
                  <h2 className="heading2">New Yorker Hoodie</h2>
                  <li className="newyorkergraphic"><img className = "newyorkergraphic" src= {newyorkergraphic} alt="" /></li>
                  <button className ="btn">Mens</button> <button className ="btn2">Womens</button> 
               </div>
               <div className="container3"> 
                  <h2 className="heading3">New Hoodies</h2>
                  <li className="twowomansmokingacigerette"><img className = "twowomansmokingacigerette" src= {twowomansmokingacigerette} alt="" /></li>
                  <button className ="btn">Explore</button>
               </div>
               <div className="container4">
                  <h2 className="heading4">With Love T-Shirt</h2>
                  <li className="withlovecollection"><img className = "withlovecollection" src= {withlovecollection} alt="" /></li>
                  <button className ="btn">Men's</button> <button className ="btn2">Women's</button> 
               </div> 
               <div className='container5'>
                  <h2 className="heading5">Summer Never Ends Collection</h2>
                  <li className="Summerneverends"><img className = "Summerneverends" src= {Summerneverends} alt=""/></li><button className ="btn">Explore Collection</button>
                </div>
               </ul>
        </section>  
      </StyledHome>     
     );
}
const StyledHome = Styled.div`
*{margin: 0;
    padding: 0;}

.container1 {
  .VeniceBeachLosAngeles {
  max-width: 100%;
  height: 850px;
  
    }
      .heading1 {
      position: absolute;
      top: 15%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: transparent;
      color: white;
      font-size: 20px;
      padding: 14px 30px;
    }
    .btn{
    position: absolute;
    top: 18%;
    left: 40%;
    transform: translate(-50%, -50%);
    background-color: transparent;
    color: white;
    font-size: 20px;
    padding: 14px 30px;
    border: 2px solid white;
    border-color: white;
    border-width: 2px;
    cursor: pointer;
  }
  .btn2{
    position: absolute;
    top: 18%;
    left: 60%;
    transform: translate(-50%, -50%);
    background-color: transparent;
    color: white;
    font-size: 20px;
    padding: 14px 60px;
    border: 2px solid white;
    border-color: white;
    border-width: 2px;
    cursor: pointer;
  
  }
  .btn:hover {
    background-color: transparent;
    color: rgb(221, 79, 79);
    border: 2px solid rgb(221, 79, 79);
    border-width: 2px;
    cursor: pointer;
  }
  .btn2:hover {
    background-color: transparent;
    color: rgb(221, 79, 79);
    border: 2px solid rgb(221, 79, 79);
    border-width: 2px;
    cursor: pointer;
  }
  
}
  
  .container2 {
    .newyorkergraphic {
    width: 100%;
      height: 750px;
      background-size: 100% 100%;
    
  }
  
  .heading2 {
    position: absolute;
    top: 34.5%;
    left: 49%;
    transform: translate(-50%, -50%);
    background-color: transparent;
    color: white;
    font-size: 20px;
    padding: 14px 30px;
  }
  
  .btn{
    position: absolute;
    top: 36%;
    left: 39%;
    transform: translate(-50%, -50%);
    background-color: transparent;
    color: white;
    font-size: 20px;
    padding: 14px 70px;
    border: 2px solid white;
    border-color: white;
    border-width: 2px;
    cursor: pointer;
  
  }
  
  .btn2{
    position: absolute;
    top: 36%;
    left: 59%;
    transform: translate(-50%, -50%);
    background-color: transparent;
    color: white;
    font-size: 20px;
    padding: 14px 65px;
    border: 2px solid white;
    border-color: white;
    border-width: 2px;
    cursor: pointer;
  
  }
  
  .btn:hover {
    background-color: transparent;
    color: rgb(221, 79, 79);
    border: 2px solid rgb(221, 79, 79);
    border-color: rgb(221, 79, 79);
    border-width: 2px;
    cursor: pointer;
  }
  
  .btn2:hover {
    background-color: transparent;
    color: rgb(221, 79, 79);
    border: 2px solid rgb(221, 79, 79);
    border-color: rgb(221, 79, 79);
    border-width: 2px;
    cursor: pointer;
  }
}
  
  .container3 {
    .twowomansmokingacigerette{
    width: 100%;
    height: 900px;
    background-size: 100% 100%;
     }

  .heading3 {
    position: absolute;
    top: 55.5%;
    left: 49%;
    transform: translate(-50%, -50%);
    background-color: transparent;
    color: silver;
    font-size: 20px;
    padding: 14px 30px;
  }
  
 .btn{
    position: absolute;
    top: 57%;
    left: 49%;
    transform: translate(-50%, -50%);
    background-color: transparent;
    color: silver;
    font-size: 20px;
    padding: 14px 70px;
    border: 2px solid white;
    border-color: white;
    border-width: 2px;
    cursor: pointer;
  
  }
  
  .btn:hover {
    background-color: transparent;
    color: rgb(221, 79, 79);
    border: 2px solid rgb(221, 79, 79);
    border-color: rgb(221, 79, 79);
    border-width: 2px;
    cursor: pointer;
  }
}
  
  .container4 {
    .withlovecollection {
    width: 100%;
    height: 900px;
    background-size: 100% 100%;
    
  }
  .heading4 {
    position: absolute;
    top: 76%;
    left: 49%;
    transform: translate(-50%, -50%);
    background-color: transparent;
    color: rgb(221, 79, 79);
    font-size: 20px;
    padding: 14px 30px;
  }
  
 .btn{
    position: absolute;
    top: 78%;
    left: 39%;
    transform: translate(-50%, -50%);
    background-color: transparent;
    color: rgb(221, 79, 79);
    font-size: 20px;
    padding: 14px 65px;
    border: 2px solid rgb(221, 79, 79);
    border-color: rgb(221, 79, 79);
    border-width: 2px;
    cursor: pointer;
  
  }
  
 .btn2{
    position: absolute;
    top: 78%;
    left: 59%;
    transform: translate(-50%, -50%);
    background-color: transparent;
    color: rgb(221, 79, 79);
    font-size: 20px;
    padding: 14px 60px;
    border: 2px solid rgb(221, 79, 79);
    border-color: rgb(221, 79, 79);
    border-width: 2px;
    cursor: pointer;
  
  }
  
.btn:hover {
    background-color: transparent;
    color: black;
    border: 2px solid black;
    border-color: black;
    border-width: 2px;
    cursor: pointer;
  }
  
.btn2:hover {
    background-color: transparent;
    color: black;
    border: 2px solid black;
    border-color: black;
    border-width: 2px;
    cursor: pointer;
  }
}
  
  .container5 {
    .Summerneverends {
    width: 100%;
    height: 900px;
    background-size: 100% 100%;
    
  }
  .heading5 {
    position: absolute;
    top: 97%;
    left: 49%;
    transform: translate(-50%, -50%);
    background-color: transparent;
    color: white;
    font-size: 20px;
    padding: 14px 30px;
  }
  
 .btn{
    position: absolute;
    top: 99%;
    left: 49%;
    transform: translate(-50%, -50%);
    background-color: transparent;
    color: white;
    font-size: 20px;
    padding: 14px 30px;
    border: 2px solid white;
    border-color: white;
    border-width: 2px;
    cursor: pointer;
  
  }
  
  .btn:hover {
    background-color: transparent;
    color: rgb(221, 79, 79);
    border: 2px solid rgb(221, 79, 79);
    border-color: rgb(221, 79, 79);
    border-width: 2px;
    cursor: pointer;
  }
}

`;

export default Home;
