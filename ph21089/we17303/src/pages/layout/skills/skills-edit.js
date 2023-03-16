import { useEffect , useState ,router } from "../../../lib";
import headerAdmin from "../../../components/byAdmin/headerAdmin"
import { getSkill, updateSkill } from "../../../api/skills";

const AdminSkillsEditPage = ({ id }) => {
  const [skills , setSkills] = useState({});

  useEffect(() => {
    getSkill(id)
        .then(({ data }) => setSkills(data))
        .catch((error) => console.log(error));
    },[]);


  useEffect(() => {
    const form = document.querySelector("#form-addic");
    const skillsName = document.querySelector("#skills-name");
    const skills = document.querySelector("#skills");
    const skillsLink = document.querySelector("#skillsLink");
    const color = document.querySelector("#color")
    const fonsize = document.querySelector("#fontsize")
  

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        try {
            // Tạo proejct mới
            const formData = {
                id,
                name: skillsName.value,
                showicon:skills.value,
                fonsize:fonsize.value,
                color:color.value,
                link:skillsLink.value
            };
            await updateSkill(formData);
            router.navigate("/admin/myskills");
        } catch (error) {
            console.log(error);
        }
    });
});

  return /*html*/`
  ${headerAdmin()}
  <div class="container pt-5 mt-5">
      <form action="" id="form-addic">
      <h1>Sửa Skills</h1>
          <div class="form-group">
              <label for="" class="form-label">Name Skills</label>
              <input type="text" class="form-control" value="${skills.name}" id="skills-name" />
          </div>

          <div class="form-group">
          <label for="" class="form-label"> Skills (fontawesome.com)</label>
          <input type="text" class="form-control" value="${skills.showicon}" id="skills" />
          </div>

          <div class="form-group">
          <label for="" class="form-label">Color Icon</label>
          <input type="color" class="form-control" value="${skills.color}" id="color" />
          </div>

          <div class="form-group">
          <label for="" class="form-label">Font Size Skills (px)</label>
          <input type="text" class="form-control" value="${skills.fonsize}" id="fontsize" />
          </div>

          <div class="form-group">
          <label for="" class="form-label">Link Icon</label>
          <input type="text" class="form-control"  value="${skills.link}" id="skillsLink" />
          </div>

          <button class="btn btn-primary mt-4">Sửa Skills</button>
      </form>
      </div>
  `
}
export default AdminSkillsEditPage;