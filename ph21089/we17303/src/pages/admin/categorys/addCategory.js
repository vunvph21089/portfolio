import { add } from "../../../api/category";
import { useEffect, router } from "../../../lib";
import headerAdmin from "../../../components/byAdmin/headerAdmin";
import $ from "jquery"

const AdminCategorys = () => {
    useEffect(() => {
        const form = $("#form-addct");
        const projectName = document.querySelector("#project-name");
      
        form.validate({
            rules:{
                "project-name": {
                    required: true,
                    minlength: 3,
                }
            },
            messages:{
                "project-name": {
                    required: "<span style='color:red'>Ko dc trong</span>",
                    minlength: "tren 3 ki tu"
                }
            },
            submitHandler: function(){
                const dataFrom ={
                    name: projectName.value,
                }
                add(dataFrom)
                .then(() => {
                alert("them thanh conng")
                router.navigate("/admin/categorys")
            })
            }
        })
    
    });
    return `
    ${headerAdmin()}
    <div class="container pt-5 mt-5">
        <form action="" id="form-addct">
            <div class="form-group">
                <label for="" class="form-label">Tên danh mục</label>
                <input type="text" name ="project-name" class="form-control" id="project-name" />
            </div>
           
            <button class="btn btn-primary mt-4">Thêm dự án</button>
        </form>
        </div>`;
};

export default AdminCategorys;