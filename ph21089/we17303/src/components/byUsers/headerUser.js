import { useEffect, useState } from "../../lib";
import { getBgAll } from "../../api/background";
import { getAllHeaders } from "../../api/headers";
import icons from "./icons";

const headerUser = () => {


    const [backgrounds, setBackgrounds] = useState([]);

    useEffect(() => {
        getBgAll()
        .then(({ data }) => setBackgrounds(data))
        .catch((error) => console.log(error));
    }, []); 


    const [headers, setHeaders] = useState([]);

    useEffect(() => {
        getAllHeaders()
        .then(({ data }) => setHeaders(data))
        .catch((error) => console.log(error));
    }, []); 

  return /*html*/ `
  <section id="home"
  
  style="background:url(${backgrounds .map((background, index) => {return `${background.imgs[0]}`;}).join("")})no-repeat center;">
  <header>
      <div class="container">
          <div class="main-nav">
              <div class="logo">
                  <h2>Vu.</h2>
              </div>
              <div class="social-media">
                  <ul>
                      ${icons()}
                  </ul>
              </div>
              <div onclick="show_menu()" class="my-toogle">
                  <span><i class="flaticon-menu"></i></span>
              </div>
          </div>
      </div>
  </header>
  <div class="container">
      
          ${headers
            .map((header, index) => {
                return `
                <div class="row">
          <div class="my-wrapper">
                <div class="inter">
                <h6>Introduce</h6>
            </div>
            <div class="welcome-box">
                <h3 style="font-size:${header.fonsize1};">${header.text1}<span >${header.spantext1}</span></h3>
               
            </div>
            
            <div class="name-box">
                <h1 style="font-size:${header.fonsize}; ">${header.text2} <span style="${header.color}">${header.spantext2}</span></h1>
                
               
            </div>

            <div class="line"></div>
            </div>
            
            <div class="copy-right">
                <h6>${header.headersC}</h6>
            </div>
        </div>
            `;
            })
            .join("")} 
           
              
        
  </div>
</section>
  `
}

export default headerUser