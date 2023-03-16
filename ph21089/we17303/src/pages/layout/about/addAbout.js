import axios from "axios";
import { addAbouts } from "../../../api/about";
import headerAdmin from "../../../components/byAdmin/headerAdmin";
import { useEffect, useState , router } from "../../../lib";
axios
const addAbout = () => {



    useEffect(() => {
        const form = document.querySelector("#form-add");
        const text1 = document.querySelector("#text1");
        const span = document.querySelector("#span"); 
        const colorspan = document.querySelector("#colorspan");
        const text2 = document.querySelector("#text2");
        const p = document.querySelector("#textp");
       
           
        const abuttons = document.querySelector("#content-buttons");
        const alinkbuttons = document.querySelector("#buttons-link");
      

        const projectimgs = document.getElementById("product-imgs");
        
       
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
                    text1: text1.value,
                    span: span.value,
                    colorspan:colorspan.value,
                    text2: text2.value,
                    p: p.value,
                    button: abuttons.value,
                    buttonlink: alinkbuttons.value,
                    img: urlsImges,
                    
                };
                await addAbouts(formData);
                router.navigate("/admin/abouts");
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



            <div class="form-group">
                <label for="" class="form-label">Text 1</label>
                <input type="text" class="form-control" id="text1" />
            </div>

            <div class="form-group">
                <label for="" class="form-label">Span</label>
                <input type="text" class="form-control" id="span" />
            </div>
            
            <div class="form-group">
            <label for="" class="form-label"> Color Span</label>
            <input type="text" class="form-control" id="colorspan" />
            </div>
           
            <div class="form-group">
                <label for="" class="form-label">Text 2</label>
                <input type="text" class="form-control" id="text2" />
            </div>

            <div class="form-group">
                <label for="" class="form-label">P</label>
                <input type="text" class="form-control" id="textp" />
             </div>

             <div class="form-group">
                <label for="" class="form-label">Content-buttons</label>
                <input type="text" class="form-control" id="content-buttons" />
             </div>

            <div class="form-group">
                <label for="" class="form-label">Link in button</label>
                <input type="text" class="form-control" id="buttons-link" />
            </div>

            <div class="form-group">
            <label for="" class="form-label">Img (Ảnh mô tả)</label>
            <input type="file"  multiple class="form-control" id="product-imgs">
            </div>

            <button class="btn btn-primary mt-4 ">Thêm dự án</button>
            

           



        </form>
        </div>

        
        `
}


export default addAbout