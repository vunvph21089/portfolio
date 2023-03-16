
const Projects = ({ products }) => {
    return `<div>
        ${products.map(({ name , imgs ,id}) => ` <li>
        <div class="_ok-vd_zs">
            <figure>
                <img src="${imgs[0]}">
                <div class="inner-content">
                    <a href="/products/${id}">Xem</a>                                                          
                </div>
               
            </figure>
        </div>
    </li>`).join("")}

    
    </div>`;
};
  
  export default Projects