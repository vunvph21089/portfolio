import { useEffect , useState , router} from "../../../lib";
import { addBg } from "../../../api/background";
import axios from "axios";
import headerAdmin from "../../../components/byAdmin/headerAdmin";

const addBG = () => {

  useEffect(() => {
    const form = document.querySelector("#form-add");
    const projectName = document.querySelector("#bg-name");
    const projectimgs = document.getElementById("thumbnail");

   
    // hien anh
    var uploadedImage = "";
    projectimgs.addEventListener("change", function() {
              const reader = new FileReader();
              reader.addEventListener("load",() => {
                  uploadedImage = reader.result;
                  document.querySelector("#hienanh").src = uploadedImage;
              });
              reader.readAsDataURL(this.files[0]);
          })
    //end
  

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        // doi day nhieu anh
       const urlsImges = await upLoadFiles(projectimgs.files)

        try {
            const formData = {

                name: projectName.value,
                imgs: urlsImges,
               
            };
            await addBg(formData);
            router.navigate("/admin/backgrounds");
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

  return `
  ${headerAdmin()}
  <div class="container pt-5 mt-5">
  <h1 class="mb-5 text-danger">Thêm backgrounds</h1>
  <form action="" id="form-add">
  
  <div class="form-group">
  <label for="" class="form-label">Background name (Tên nền)</label>
  <input type="text" class="form-control" id="bg-name" />
  </div>

  <div class="form-group">
   
  <label for="" class="form-label">Thêm BackGround</label>
  <input type="file" multiple class="form-control" id="thumbnail" />
  </div>

  <img class="mt-2" width="500" id="hienanh" src="" alt=""><br>
     
      <button class="btn btn-primary mt-4">Thêm</button>
  </form>
  </div>

  `
}

export default addBG