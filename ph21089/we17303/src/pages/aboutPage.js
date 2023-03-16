import { useEffect, useState } from "../lib";
import { getAllAbouts } from "../api/about";

const aboutPage = () => {

  const [abouts, setAllAbouts] = useState([]);

  useEffect(() => {
    getAllAbouts()
      .then(({ data }) => setAllAbouts(data))
      .catch((error) => console.log(error));
  }, []); 
    return /*html*/ `
    ${abouts .map((about, index) => {return `
    <section id="about">
  <div class="container">

  
      <div class="row">
          <div class="wrapper">
              <div class="left-wrapper">
                  <div class="content">
                      <div class="title">
                          <h4>About me</h4>
                          <h2>${about.text1} <span style="color:${about.colorspan}">${about.span}</span>
                      
                          ${about.text2}</h2>
                          <p>
                          ${about.p}
                         </p>
                      </div>
                      <div>
                      <button type="button"  class="btn btn-outline-danger"><a class="text-decoration-none text-light" href="${about.buttonlink}" download="CV-Ngô Văn Vụ" >${about.button}</a></button>
                      </div>
                  </div>
              </div>
              <div class="right-wrapper">
                  <div class="content _yt_er_ol">

                  <!-- Trigger the Modal -->
<img id="myImg" src="${about.buttonlink}" alt="Snow" style="width:100%;max-width:500px">

<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- The Close Button -->
  <span class="close">&times;</span>

  <!-- Modal Content (The Image) -->
  <img class="modal-content" id="img01">

  <!-- Modal Caption (Image Text) -->
  <div id="caption"></div>
</div>

                  </div>
              </div>
                  <div class="inter">
                      <h6>WHAT I DO</h6>
                  </div>
          </div>
      </div>

   
      </div>
    </section>
    
  </div>
 
    `;}).join("")}
  
   
  `


}

export default aboutPage