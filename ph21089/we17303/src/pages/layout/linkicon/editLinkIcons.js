import { updateIcons , getIcons } from "../../../api/icons";
import { useEffect , useState ,router } from "../../../lib";
import headerAdmin from "../../../components/byAdmin/headerAdmin"

const editLinkIcons = ({ id }) => {

  const [icons , setIcons] = useState({});

  useEffect(() => {
    getIcons(id)
        .then(({ data }) => setIcons(data))
        .catch((error) => console.log(error));
    },[]);


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
                id,
                name: iconsName.value,
                showicon:icons.value,
                fonsize:fonsize.value,
                color:color.value,
                link:iconsLink.value
            };
            await updateIcons(formData);
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
      <h1>Sửa Icons</h1>
          <div class="form-group">
              <label for="" class="form-label">Name Icons</label>
              <input type="text" class="form-control" value="${icons.name}" id="icons-name" />
          </div>

          <div class="form-group">
          <label for="" class="form-label"> Icons (fontawesome.com)</label>
          <input type="text" class="form-control" value="${icons.showicon}" id="icons" />
          </div>

          <div class="form-group">
          <label for="" class="form-label">Color Icon</label>
          <input type="color" class="form-control" value="${icons.color}" id="color" />
          </div>

          <div class="form-group">
          <label for="" class="form-label">Font Size Icons (px)</label>
          <input type="text" class="form-control" value="${icons.fonsize}" id="fontsize" />
          </div>

          <div class="form-group">
          <label for="" class="form-label">Link Icon</label>
          <input type="text" class="form-control"  value="${icons.link}" id="iconsLink" />
          </div>

          <button class="btn btn-primary mt-4">Sửa Icons</button>
      </form>
      </div>
  `
}


export default editLinkIcons