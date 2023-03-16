import { getProduct } from "../api/products";
import { getBgAll } from "../api/background";
import { useEffect , useState } from "../lib";

const detailPage = ({id}) => {



  const [backgrounds, setBackgrounds] = useState([]);

  useEffect(() => {
      getBgAll()
      .then(({ data }) => setBackgrounds(data))
      .catch((error) => console.log(error));
  }, []); 
  const [products, setProducts] = useState({});
  useEffect(() => {
    getProduct(id)
      .then(({ data }) => setProducts(data))
      .catch((error) => console.log(error))
  }, []);
    return /*html*/ `
    <div style="background-color:black;">
    <section class="w-100" style="background:url(${backgrounds .map((background, index) => {return `${background.imgs[0]}`;}).join("")})no-repeat center; mt-5">

  <div class="row gx-5">
    <div class="col">
     <div class="p-3">
     
     <div id="carouselExampleIndicators" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" >
        <img src="${products.imgs}" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="${products.imgs}" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="${products.imgs}" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
     </div>
    </div>
    <div class="col">
      <div class="p-3">
      <h2 class="text-danger">${products.name}</h2>
      
                  <h4 class="text-white">${products.description}</h4>
                  <p class="text-white">Completion time: ${products.time} days</p>
                  <h5 class="text-white">Programmer: ${products.author}</h5>
                  <a href="${products.github}" class="badge badge-sm bg-danger text-decoration-none pl-2 pt-2 pr-2 pb-2">View on github</a>
                  <a href="${products.github}" class="badge badge-sm bg-danger text-decoration-none pl-2 pt-2 pr-2 pb-2">Live</a>
      </div>
    </div>
  </div>

  

</section>














    
    `}

export default detailPage