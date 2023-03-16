import { update ,get } from "../../../api/category";
import { useEffect, router ,useState} from "../../../lib";
import headerAdmin from "../../../components/byAdmin/headerAdmin";

const AdminEditCategorys = ({id}) => {
    const [category ,setCategory] = useState({});

    useEffect(() => {
        get(id)
          .then(({ data }) => setCategory(data))
          .catch((error) => console.log(error));
      },[]);
    useEffect(() => {
        const form = document.querySelector("#form-addct");
        const projectName = document.querySelector("#project-name");
      

        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                // Tạo proejct mới
                const formData = {
                    id,
                    name: projectName.value,
                };
                await update(formData);
                router.navigate("/admin/categorys");
            } catch (error) {
                console.log(error);
            }
        });
    });
    return `
    ${headerAdmin()}
    <div class="container pt-5 mt-5" >
        <form action="" id="form-addct">
            <div class="form-group">
                <label for="" class="form-label">Tên danh mục</label>
                <input type="text" class="form-control" id="project-name" value ="${category.name}" />
            </div>
           
            <button class="btn btn-primary mt-4">Thêm dự án</button>
        </form>
        </div>`;
};

export default AdminEditCategorys;