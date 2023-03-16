 import { addProduct } from "../../../api/products";
 import { useEffect, router , useState } from "../../../lib";

import axios from "axios";
import headerAdmin from "../../../components/byAdmin/headerAdmin";



const addNew = () => {

    const [data, setCategories] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/categorys")
            .then((response) => response.json())
            .then((data) => setCategories(data));
    }, [])
  


    useEffect(() => {
        const form = document.querySelector("#form-add");
        const projectTechnolory = document.querySelector("#product-technolory");
        const projectName = document.querySelector("#product-name");
        const projectDescription = document.querySelector("#product-description");
        const projectimgs = document.getElementById("product-imgs");
        const projectGithub = document.querySelector("#product-github");
        const projectPreview = document.querySelector("#product-preview");
        const projectTime = document.querySelector("#product-time");
        const projectAuthor = document.querySelector("#product-author");
        
       
        // hien anh
        // var uploadedImage = "";
        // projectimg.addEventListener("change", function() {
        //           const reader = new FileReader();
        //           reader.addEventListener("load",() => {
        //               uploadedImage = reader.result;
        //               document.querySelector("#hienanh").src = uploadedImage;
        //           });
        //           reader.readAsDataURL(this.files[0]);
        //       })
        //end
      

        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            // doi day nhieu anh
           const urlsImges = await upLoadFiles(projectimgs.files)

            try {
                const formData = {
                    categoryId: Number(projectTechnolory.value),
                    name: projectName.value,
                    description: projectDescription.value,
                    imgs: urlsImges,
                    github: projectGithub.value,
                    preview: projectPreview.value,
                    time: projectTime.value,
                    author: projectAuthor.value,
                };
                await addProduct(formData);
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

    return /*html*/ `
    
        ${headerAdmin()}
    <div class="container pt-5 mt-5">
        <form action="" id="form-add">



    <div class="card">
        <div class="card-header">
            <h5 class="card-title mb-0">Technolory</h5>
        </div>
        <div class="card-body">
            <select class="form-select" id="product-technolory"  data-choices data-choices-search-false>
            ${data 
                .map(({ name, id }) => {
                    return `
                    <option  data-id="" value="${id}">${name}</option>              
                    `;
                })
            }
            </select>
        </div>
    </div>


            <div class="form-group">
                <label for="" class="form-label">Product name (Tên dự án)</label>
                <input type="text" class="form-control" id="product-name" />
            </div>

            <div class="form-group">
                <label for="" class="form-label">Description (Mô tả)</label>
                <input type="text" class="form-control" id="product-description" />
            </div>
            
           
          
            <div class="form-group">
            <label for="" class="form-label">Img (Ảnh mô tả)</label>
            <input type="file"  multiple class="form-control" id="product-imgs">
            </div>

            <div class="form-group">
                <label for="" class="form-label">Link Github</label>
                <input type="text" class="form-control" id="product-github" />
            </div>

            <div class="form-group">
                <label for="" class="form-label">Link Preview</label>
                <input type="text" class="form-control" id="product-preview" />
             </div>

             <div class="form-group">
                <label for="" class="form-label">Working time(Thời gian làm)</label>
                <input type="text" class="form-control" id="product-time" />
             </div>

            <div class="form-group">
                <label for="" class="form-label">Author (Tác giả)</label>
                <input type="text" class="form-control" id="product-author" />
            </div>
            <button class="btn btn-primary mt-4 ">Thêm dự án</button>
            
        </form>
        </div>

        
        `
}


export default addNew