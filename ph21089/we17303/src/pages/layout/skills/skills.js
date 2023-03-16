import { useEffect , useState ,router } from "../../../lib";
import headerAdmin from "../../../components/byAdmin/headerAdmin"
import {deleteSkill, getSkills} from "../../../api/skills"

const AdminSkillsPage = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    getSkills()
      .then(({data}) => setSkills(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect( () => {
      const btns = document.querySelectorAll(".btn-remove");
      for (let btn of btns) {
          btn.addEventListener("click", function(){
              try {
                  const id = this.dataset.id;

                  deleteSkill(id).then(() => {
                      const newCategorys = skills.filter((skill) => skill.id != id);
                      setSkills(newCategorys);
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
          <h1>Add Skill</h1>
          <a href="/admin/myskills/add" class="btn btn-primary bg-success text-white mt-5 mb-3" role="button" aria-disabled="true">Add Skill</a>
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
                      ${skills
                          .map((skill, index) => {
                              return `
                              <tr>                              
                                 
                                  <td>${skill.name}</td>

                                  <td><i style="color:${skill.color}; font-size: 30px" class="${skill.showicon}"></i></td>

                                  <td>${skill.link}</td>      

                                  <td><p style="color:${skill.color}; font-size: 15px">${skill.color}</p></td>

                                  <td><p style="font-size:${skill.fonsize}">${skill.fonsize}</p></td>

                                  <td>
                                      <button data-name="Dat" data-id="${skill.id}"class="btn btn-danger btn-remove">Remove</button><br>
                                      <a href="/admin/myskills/${skill.id}/edit">Edit</a>
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


export default AdminSkillsPage;