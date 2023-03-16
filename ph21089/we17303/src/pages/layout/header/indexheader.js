import { useEffect , useState  } from "../../../lib";
import headerAdmin from "../../../components/byAdmin/headerAdmin";
import { removeHeaders , getAllHeaders } from "../../../api/headers";

const indexheader = () => {
  const [headers, setAllHeaders] = useState([]);

  useEffect(() => {
    getAllHeaders()
      .then(({data}) => setAllHeaders(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect( () => {
      const btns = document.querySelectorAll(".btn-remove");
      for (let btn of btns) {
          btn.addEventListener("click", function(){
              try {
                  const id = this.dataset.id;

                  removeHeaders(id).then(() => {
                      const newHeaders = headers.filter((header) => header.id != id);
                      setIcons(newHeaders);
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
          <h1>Quản lý Icons</h1>
          <a href="/admin/headers/add" class="btn btn-primary bg-success text-white mt-5 mb-3" role="button" aria-disabled="true">Add Text Header</a>
          <table class="table table-bordered">
                  <thead>
                      <tr>
                          
                          <th>Tex1</th>
                          <th>Span1</th>
                          <th>Text2</th>
                          <th>Span2</th>
                          <th>headersC</th>
                          <th>Chức Năng</th>
                      </tr>
                  </thead>
                  <tbody>
                      ${headers
                          .map((header, index) => {
                              return `
                              <tr>                              
                                 
                                  <td style=" font-size:${header.fonsize1}"><p>${header.text1}</p></td>
                                  <td style=" font-size:${header.fonsize1}"><p>${header.spantext1}</p></td>
                                 

                                  <td style="font-size:${header.fonsize}"><p>${header.text2}</p></td>
                                  <td style="color:${header.color}; font-size:${header.fonsize}"><p>${header.spantext2}</p></td>
                                       

                                  <td><p style="font-size:${header.fonsize1}">${header.headersC}</p></td>

                                  <td>
                                      <button data-name="Dat" data-id="${header.id}"class="btn btn-danger btn-remove">Remove</button><br>
                                      <a href="/admin/headers/${header.id}/edit">Edit</a>
                                  </td>
                                  
                                  
                              </tr>
                          `;
                          })
                          .join("")} 
                      
                      
                  </tbody>
              </table>
  </div>
  `
}

export default indexheader