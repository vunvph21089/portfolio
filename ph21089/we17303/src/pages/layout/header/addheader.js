import { addHeaders } from "../../../api/headers";
import { useEffect , useState ,router } from "../../../lib";
import headerAdmin from "../../../components/byAdmin/headerAdmin";
const addheader = () => {
    useEffect(() => {
        const form = document.querySelector("#form-addhd");
        const headersText1= document.querySelector("#headers-text1");
        const spanText1= document.querySelector("#span-text1"); 
        const fonsize1 = document.querySelector("#fontsize1")

        

        const headersText2= document.querySelector("#headers-text2");
        const spantext2= document.querySelector("#span-text2");
        const fonsize2 = document.querySelector("#fontsize2")
        const color = document.querySelector("#colortext2")

        const headersC = document.querySelector("#headersC"); 
         
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                // Tạo proejct mới
                const formData = {
                    text1: headersText1.value,
                    spantext1: spanText1.value,
                    fonsize1: fonsize1.value,

                    text2:headersText2.value,
                    spantext2: spantext2.value,
                    fonsize:fonsize2.value,
                    color:color.value,     
                    headersC:headersC.value,               
                };
                await addHeaders(formData);
                router.navigate("/admin/headers");
            } catch (error) {
                console.log(error);
            }
        });
    });
    
      return /*html*/`
      ${headerAdmin()}
      <div class="container pt-5 mt-5">
          <form action="" id="form-addhd">
          <h1>Thêm nội dung Headers</h1>
              <div class="form-group">
                  <label for="" class="form-label">Text 1</label>
                  <input type="text" class="form-control" id="headers-text1" />
              </div>

              <div class="form-group">
                  <label for="" class="form-label">Span Text 1</label>
                  <input type="text" class="form-control" id="span-text1" />
              </div>

              <div class="form-group">
              <label for="" class="form-label"> Font Size Text1(px)</label>
              <input type="text" class="form-control" id="fontsize1" />
              </div>
    

    <hr>




              <div class="form-group">
              <label for="" class="form-label"> Text 2</label>
              <input type="text" class="form-control" id="headers-text2" />
              </div>

              <div class="form-group">
              <label for="" class="form-label">Span Text 2</label>
              <input type="text" class="form-control" id="span-text2" />
          </div>
    
              <div class="form-group">
              <label for="" class="form-label"> Font Size Text2 (px)</label>
              <input type="text" class="form-control" id="fontsize2" />
              </div>

              <div class="form-group">
              <label for="" class="form-label"> Color Span Text2 (#)</label>
              <input type="text" class="form-control" id="colortext2" />
              </div>


    <hr>


              <div class="form-group">
              <label for="" class="form-label">HeadersC</label>
              <input type="text" class="form-control" id="headersC" />
              </div>
    

             
    

         
    
    
            
              <button class="btn btn-primary mt-4">Thêm Text Header</button>
          </form>
          </div>
      `
    }


export default addheader