import { getBgAll ,removeBg } from "../../../api/background";
import { useEffect ,useState } from "../../../lib";
import headerAdmin from "../../../components/byAdmin/headerAdmin";

const indexBG = () => {
  const [backgrounds, setBackgrounds] = useState([]);
  useEffect(() => {
    getBgAll()
      .then(({ data }) => setBackgrounds(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect( function() {
      const btns = document.querySelectorAll(".btn-remove");
      for (let btn of btns) {
          btn.addEventListener("click", function () {
              const id = this.dataset.id;
              const confirm = window.confirm("Ban co chac chan muon xoa du an nay khong?");
              if (confirm) {
                removeBg(id)
                      .then(() => {
                          const newProjects = backgrounds.filter((background) => background.id != id);
                          setBackgrounds(newProjects);
                      })
                      .catch((error) => console.log(error));
              }
          });
      }
  });

  return `
  ${headerAdmin()}
  <div class="container pt-5 mt-5">
            <h1>Quản lý Background</h1>
            <a href="/admin/backgrounds/add" class="btn btn-primary bg-success text-white mt-5 mb-3" role="button" aria-disabled="true">Add Category</a>
            <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên danh mục</th>
                            <th>Imges</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${backgrounds
                            .map((background, index) => {
                                return `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>${background.name}</td>
                                    <td><img width="500"  src="${background.imgs[0]}" alt=""></td>
                                    <td>
                                        <button data-name="Dat" data-id="${
                                          background.id
                                        }"class="btn btn-danger btn-remove">Remove</button>
                                        <a href="/admin/backgrounds/${background.id}/edit">Edit</a>
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

export default indexBG