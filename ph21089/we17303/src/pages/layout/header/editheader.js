import { useEffect , useState , router  } from "../../../lib";
import headerAdmin from "../../../components/byAdmin/headerAdmin";
import { updateHeaders , getHeaders } from "../../../api/headers";

const editheader = ({id}) => {


  const [headers , setHeaders] = useState({});

  useEffect(() => {
    getHeaders(id)
        .then(({ data }) => setHeaders(data))
        .catch((error) => console.log(error));
    },[]);
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
              id,
                text1: headersText1.value,
                spantext1: spanText1.value,
                fonsize1: fonsize1.value,

                text2:headersText2.value,
                spantext2: spantext2.value,
                fonsize:fonsize2.value,
                color:color.value,     
                headersC:headersC.value,               
            };
            await updateHeaders(formData);
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
              <input type="text" class="form-control" value="${headers.text1}" id="headers-text1" />
          </div>

          <div class="form-group">
              <label for="" class="form-label">Span Text 1</label>
              <input type="text" class="form-control" value="${headers.spantext1}" id="span-text1" />
          </div>

          <div class="form-group">
          <label for="" class="form-label"> Font Size Text1(px)</label>
          <input type="text" class="form-control" value="${headers.fonsize1}" id="fontsize1" />
          </div>


<hr>




          <div class="form-group">
          <label for="" class="form-label"> Text 2</label>
          <input type="text" class="form-control" value="${headers.text2}" id="headers-text2" />
          </div>

          <div class="form-group">
          <label for="" class="form-label">Span Text 2</label>
          <input type="text" class="form-control" value="${headers.spantext2}" id="span-text2" />
      </div>

          <div class="form-group">
          <label for="" class="form-label"> Font Size Text2 (px)</label>
          <input type="text" class="form-control" value="${headers.fonsize}" id="fontsize2" />
          </div>

          <div class="form-group">
          <label for="" class="form-label"> Color Span Text2 (#)</label>
          <input type="text" class="form-control" value="${headers.color}" id="colortext2" />
          </div>


<hr>


          <div class="form-group">
          <label for="" class="form-label">HeadersC</label>
          <input type="text" class="form-control" value="${headers.headersC}" id="headersC" />
          </div>


         


     


        
          <button class="btn btn-primary mt-4">Thêm Text Header</button>
      </form>
      </div>
  `
}


export default editheader