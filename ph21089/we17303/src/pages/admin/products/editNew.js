import { getProduct,updateProduct } from "../../../api/products";
import { getAll } from "../../../api/category";
import { useEffect,router,useState } from "../../../lib";
import headerAdmin from "../../../components/byAdmin/headerAdmin";
import axios from "axios";



const editNew = ({id}) => {
    
  const [categorys, setCategories] = useState([]);

  useEffect(() => {
    getAll(id)
      .then(({ data }) => setCategories(data))
      .catch((error) => console.log(error));
  },[]);

const [product, setProducts] = useState({});
useEffect(() => {
  getProduct(id)
    .then(({ data }) => setProducts(data))
    .catch((error) => console.log(error))
}, []);



  useEffect(() => {
    const form = document.querySelector("#form-edit");
    const projectTechnolory = document.querySelector("#product-technolory");
    const projectName = document.querySelector("#product-name");
    const projectDescription = document.querySelector("#product-description");
    const projectimgs = document.querySelector("#product-imgs");
    const projectGithub = document.querySelector("#product-github");
    const projectPreview = document.querySelector("#product-preview");
    const projectTime = document.querySelector("#product-time");
    const projectAuthor = document.querySelector("#product-author");
    

    // const projectThumbnail = document.querySelector("#product-img")

    // var uploadedImage = "";
    //       projectThumbnail.addEventListener("change", function() {
    //           const reader = new FileReader();
    //           reader.addEventListener("load",() => {
    //               uploadedImage = reader.result;
    //               document.querySelector("#hienanh").src = uploadedImage;
    //           });
    //           reader.readAsDataURL(this.files[0]);
    //       })

  

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const urlsImges = await upLoadFiles(projectimgs.files)
        try {
            const formData = {
                id,
                categoryId: Number(projectTechnolory.value),
                name: projectName.value,
                description: projectDescription.value,
                imgs: urlsImges,
                github: projectGithub.value,
                preview: projectPreview.value,
                time: projectTime.value,
                author: projectAuthor.value,
            };
            await updateProduct(formData);
            router.navigate("/admin/products");
        } catch (error) {
            console.log(error);
        }
    });
});



const upLoadFiles = async (files) =>{
  if(files){
  const CLOUD_NAME = "ddu7xygjs";
  const PRESET_NAME = "ECMA-SCRIP";
  const FOLDER_NAME ="portfolio";
  const urls = [];
  const api =`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

  const formDataFL = new FormData(); // key : value

  formDataFL.append("upload_preset",PRESET_NAME);
  formDataFL.append("folder", FOLDER_NAME);

  for(const file of files){
      formDataFL.append("file", file)
     const response= await axios.post(api,formDataFL,{
          headers: {
              "Content-Type": "multipart/form-data",
          },  
      })
      urls.push(response.data.secure_url)
     
      
  // 
  
};
console.log(urls)
return urls 
}

}


  return /*html*/`
  ${headerAdmin()}
  <div class="container pt-5 mt-5">
  <form action="" id="form-edit">
 
  <div class="card">
  <div class="card-header">
      <h5 class="card-title mb-0">Technolory (Danh mục)</h5>
  </div>
  <div class="card-body">
      <select class="form-select" id="product-technolory"  data-choices data-choices-search-false>
      ${categorys
          .map(({ name, id }) => {
              return `
              <option  data-id="${id}" value="${id}">${name}</option>              
              `;
          })
      }
      </select>
  </div>
</div>



      <div class="form-group">
          <label for="" class="form-label">Product name (Tên dự án)</label>
          <input type="text" class="form-control" id="product-name" value ="${product.name}"/>
      </div>

      <div class="form-group">
          <label for="" class="form-label">Description (Mô tả)</label>
          <input type="text" class="form-control" id="product-description" value ="${product.description}"/>
      </div>
      
      <div class="form-group">
      <label for="" class="form-label">Img (Ảnh mô tả)</label>
      <input  type="file" name="files[asdasda.jpg" multiple class="form-control" id="product-imgs" value ="${product.imgs}"/>
      </div>


      <div class="form-group">
          <label for="" class="form-label">Link Github</label>
          <input type="text" class="form-control" id="product-github" value ="${product.github}"/>
      </div>

      <div class="form-group">
          <label for="" class="form-label">Link Preview</label>
          <input type="text" class="form-control" id="product-preview" value ="${product.preview}"/>
       </div>

       <div class="form-group">
          <label for="" class="form-label">Working time(Thời gian làm)</label>
          <input type="text" class="form-control" id="product-time" value ="${product.time}"/>
       </div>

      <div class="form-group">
          <label for="" class="form-label">Author (Tác giả)</label>
          <input type="text" class="form-control" id="product-author" value ="${product.author}"/>
      </div>
      <button class="btn btn-primary mt-4 ">Sửa dự án</button>
      
  </form>
  </div>

  `
}

export default editNew