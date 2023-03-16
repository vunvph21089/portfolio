import { useEffect, useState } from "../lib";


import Projects from "../components/byUsers/Projects";
import Category from "../components/byUsers/categorys";

import menu from "../components/byUsers/menu";
import headerUser from "../components/byUsers/headerUser";
import aboutPage from "./aboutPage"
import myskill from "./myskill";
import contactPage from "./contactPage";
import productsPage from "./productsPage";



const HomePage = () => {

	const [categories, setCategories] = useState([]);
	const [products, setProjects] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/categorys")
			.then((response) => response.json())
			.then((data) => setCategories(data));
	}, []);

	const onHandleClick = (id) => {
		fetch(`http://localhost:3000/categorys/${id}?_embed=products`)
			.then((response) => response.json())
			.then(({ products }) => setProjects(products));
	};

	return /*html*/ `  
	${menu()}
	${headerUser()}
	${aboutPage()}
	${myskill()}
	${productsPage()}
	<section id="portfolio">
	<div class="container">
	
		<div class="row">
  
   
			<div class="my-wrapper">
			
				<div class="wrapper-box">
				
					<div class="content">
					
					<ul class="nav nav-tabs border-0" id="myTab" role="tablist">
	${Category({ categories, onClick: onHandleClick })}
	</ul>
	<div class="tab-content" id="">
	<!-- ------------***----------- -->
	<div class="tab-pane fade show active" id="free" role="tabpanel" aria-labelledby="free-template">
		<div class="content-list">
			<ol>
	${Projects({ products })}
	</ol>
                              </div>
                          </div>
                   
                      </div>
                  </div>
              </div>
              <div class="inter">
                  <h6>Category</h6>
              </div>
          </div>
      </div>
  </div>

	

	${contactPage()}


  `;
};

export default HomePage;