import { addIcons } from "../../../api/icons";
import { useEffect , useState ,router } from "../../../lib";
import headerAdmin from "../../../components/byAdmin/headerAdmin"

const addLinkIcons = () => {

  useEffect(() => {
    const form = document.querySelector("#form-addic");
    const iconsName = document.querySelector("#icons-name");
    const icons = document.querySelector("#icons");
    const iconsLink = document.querySelector("#iconsLink");
    const color = document.querySelector("#color")
    const fonsize = document.querySelector("#fontsize")
  

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        try {
            // Tạo proejct mới
            const formData = {
                name: iconsName.value,
                showicon:icons.value,
                fonsize:fonsize.value,
                color:color.value,
                link:iconsLink.value
            };
            await addIcons(formData);
            router.navigate("/admin/iconsLink");
        } catch (error) {
            console.log(error);
        }
    });
});

  return /*html*/`
  ${headerAdmin()}
  <div class="container pt-5 mt-5">
      <form action="" id="form-addic">
      <h1>Thêm Icons</h1>
          <div class="form-group">
              <label for="" class="form-label">Name Icons</label>
              <input type="text" class="form-control" id="icons-name" />
          </div>

          <div class="form-group">
          <label for="" class="form-label"> Icons (fontawesome.com)</label>
          <input type="text" class="form-control" id="icons" />
          </div>

          <div class="form-group">
          <label for="" class="form-label">Color Icon</label>
          <input type="color" class="form-control" id="color" />
          </div>

          <div class="form-group">
          <label for="" class="form-label">Font Size Icons (px)</label>
          <input type="text" class="form-control" id="fontsize" />
          </div>

          <div class="form-group">
          <label for="" class="form-label">Link Icon</label>
          <input type="text" class="form-control" id="iconsLink" />
          </div>

          <button class="btn btn-primary mt-4">Thêm Icons</button>
      </form>
      </div>
  `
}

export default addLinkIcons