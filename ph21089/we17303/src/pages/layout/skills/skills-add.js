import { useEffect , useState ,router } from "../../../lib";
import headerAdmin from "../../../components/byAdmin/headerAdmin"
import { addSkill } from "../../../api/skills";

const AdminSkillAddPage = () => {
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
              name: skillsName.value,
              showicon:skills.value,
              fonsize:fonsize.value,
              color:color.value,
              link:skillsLink.value
            };
            await addSkill(formData);
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
  <h1>Add Skills</h1>
      <div class="form-group">
          <label for="" class="form-label">Name Skills</label>
          <input type="text" class="form-control"  id="skills-name" />
      </div>

      <div class="form-group">
      <label for="" class="form-label"> Skills (fontawesome.com)</label>
      <input type="text" class="form-control"  id="skills" />
      </div>

      <div class="form-group">
      <label for="" class="form-label">Color Icon</label>
      <input type="color" class="form-control"  id="color" />
      </div>

      <div class="form-group">
      <label for="" class="form-label">Font Size Skills (px)</label>
      <input type="text" class="form-control"  id="fontsize" />
      </div>

      <div class="form-group">
      <label for="" class="form-label">Link Icon</label>
      <input type="text" class="form-control"   id="skillsLink" />
      </div>

      <button class="btn btn-primary mt-4">Sửa Skills</button>
  </form>
  </div>
  `
}

export default AdminSkillAddPage;