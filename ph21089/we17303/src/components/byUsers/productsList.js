import { getProducts } from "../../api/products";
import { useEffect , useState } from "../../lib";

const productsList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getProducts()
        .then(({ data }) => setProjects(data))
        .catch((error) => console.log(error));
    }, []); 
          return`
          ${projects.map((project , id)=>{
            return/*html*/`
            <div class="project">
            <a href="/products/${id}">
              <img
                src="${project.imgs[0]}"
                class="features__img lazy-img"
              />
            </a>
              <div class="text-project textnoidung">
                  <div class="features__icon">
                    <svg>
                      <use xlink:href="img/icons.svg#icon-monitor"></use>
                    </svg>
                  </div>
                  <h3 class="features__header">${project.name}</h3>
                  <h4>${project.description}</h4>
                  <p>Completion time: ${project.time} days</p>
                  <h5>Programmer: ${project.author}</h5>
                  <a href="${project.github}" class="badge badge-sm bg-danger text-decoration-none pl-2 pt-2 pr-2 pb-2">View on github</a>
                  <a href="${project.preview}" class="badge badge-sm bg-danger text-decoration-none pl-2 pt-2 pr-2 pb-2">Live </a>
              </div>
          </div>
            `
          }).join("")}<div class="features">
            
    `
  }

export default productsList