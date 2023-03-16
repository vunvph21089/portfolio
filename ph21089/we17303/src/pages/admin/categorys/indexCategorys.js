import { remove , getAll } from "../../../api/category";
import { useEffect, useState } from "../../../lib";
import headerAdmin from "../../../components/byAdmin/headerAdmin";

const AdminCategorysPage = () => {
    // localStorage
    const [categorys, setCategorys] = useState([]);

    useEffect(() => {
        getAll()
        .then(({data}) => setCategorys(data))
        .catch((error) => console.log(error));
    }, []);

    useEffect( () => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", function(){
                try {
                    const id = this.dataset.id;

                    remove(id).then(() => {
                        const newCategorys = categorys.filter((category) => category.id != id);
                        setCategorys(newCategorys);
                    });
                } catch (error) {
                    console.log(error);
                }
            });
        }
    });

    return `
    ${headerAdmin()}
    <div class="container pt-5 mt-5">
            <h1>Quản lý danh mục</h1>
            <a href="/admin/categorys/add" class="btn btn-primary bg-success text-white mt-5 mb-3" role="button" aria-disabled="true">Add Category</a>
            <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên danh mục</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${categorys
                            .map((category, index) => {
                                return `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>${category.name}</td>
                                    <td>
                                        <button data-name="Dat" data-id="${
                                            category.id
                                        }"class="btn btn-danger btn-remove">Remove</button>
                                        <a href="/admin/categorys/${category.id}/edit">Edit</a>
                                    </td>
                                </tr>
                            `;
                            })
                            .join("")} 
                        
                        
                    </tbody>
                </table>
    </div>`;
};

export default AdminCategorysPage;