import { deleteProduct, getProducts } from "../../../api/products";
import { useState, useEffect } from "../../../lib";
import headerAdmin from "../../../components/byAdmin/headerAdmin";
const indexProducts = () => {

    const [products, setProjects] = useState([]);
    useEffect(() => {
        getProducts()
        .then(({ data }) => setProjects(data))
        .catch((error) => console.log(error));
    }, []);

    useEffect( function() {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", function () {
                const id = this.dataset.id;
                const confirm = window.confirm("Ban co chac chan muon xoa du an nay khong?");
                if (confirm) {
                    deleteProduct(id)
                        .then(() => {
                            const newProjects = products.filter((project) => project.id != id);
                            setProjects(newProjects);
                        })
                        .catch((error) => console.log(error));
                }
            });
        }
    });


return `
  ${headerAdmin()}
  
<div class="container-fluid pt-5 mt-5">
<h1>Quản lý dự án</h1>
        <a href="/admin/products/add" class="btn btn-primary bg-success text-white mt-5 mb-3" role="button" aria-disabled="true">Add Product</a>
        <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Technolory</th>
                        <th>Product name</th>
                        <th>Imges</th>
                        <th>Description</th>
                        <th>Link Github</th>
                        <th>Link Preview</th>
                        
                    </tr>
                </thead>
                <tbody>
                ${products
                    .map((product, index) => {
                            return `
                            <tr>
                                <td>${index + 1}</td>
                                <td>${product.categoryId}</td>
                                <td>${product.name}</td>
                                <td><img width="200" src="${product.imgs[0]}" alt=""> </td>
                                <td>${product.description}</td>
                                <td><a href="${product.github}">${product.github}</a> </td>
                                <td><a href="${product.preview}">${product.preview}</a> </td>
                                <td>
                                    <button data-id="${
                                      product.id
                                    }"class="btn btn-danger btn-remove">Remove</button>
                                    <a href="/admin/products/${product.id}/edit">Edit</a>
                                </td>
                            </tr>
                        `;
                        })
                .join("")} 
                    
                    
                </tbody>
            </table>
</div>

`;
};

export default indexProducts