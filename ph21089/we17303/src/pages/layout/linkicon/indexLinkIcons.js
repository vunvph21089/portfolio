import headerAdmin from "../../../components/byAdmin/headerAdmin";
import { useEffect ,useState} from "../../../lib";
import { getAllIcons ,removeIcons } from "../../../api/icons";


const indexLinkIcons = () => {

  const [icons, setIcons] = useState([]);

  useEffect(() => {
    getAllIcons()
      .then(({data}) => setIcons(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect( () => {
      const btns = document.querySelectorAll(".btn-remove");
      for (let btn of btns) {
          btn.addEventListener("click", function(){
              try {
                  const id = this.dataset.id;

                  removeIcons(id).then(() => {
                      const newCategorys = icons.filter((icon) => icon.id != id);
                      setIcons(newCategorys);
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
          <a href="/admin/iconsLink/add" class="btn btn-primary bg-success text-white mt-5 mb-3" role="button" aria-disabled="true">Add Category</a>
          <table class="table table-bordered">
                  <thead>
                      <tr>
                          
                          <th>Tên Icons</th>
                          <th>Icons</th>
                          <th>Link Icons</th>
                          <th>Color</th>
                          <th>Font-size</th>
                          <th>Chức Năng</th>
                      </tr>
                  </thead>
                  <tbody>
                      ${icons
                          .map((icon, index) => {
                              return `
                              <tr>                              
                                 
                                  <td>${icon.name}</td>

                                  <td><i style="color:${icon.color}; font-size: 30px" class="${icon.showicon}"></i></td>

                                  <td>${icon.link}</td>      

                                  <td><p style="color:${icon.color}; font-size: 15px">${icon.color}</p></td>

                                  <td><p style="font-size:${icon.fonsize}">${icon.fonsize}</p></td>

                                  <td>
                                      <button data-name="Dat" data-id="${icon.id}"class="btn btn-danger btn-remove">Remove</button>
                                      <a href="/admin/iconsLink/${icon.id}/edit">Edit</a>
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

export default indexLinkIcons