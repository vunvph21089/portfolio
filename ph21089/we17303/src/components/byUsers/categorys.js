 import { useEffect } from "../../lib";
const Category = ({ categories, onClick }) => {
  useEffect(() => {
      const btns = document.querySelectorAll(".btn");
      for (const btn of btns) {
          btn.addEventListener("click", function () {
              const id = btn.dataset.id;
              onClick(id);
          });
      }
  }) 
return `
  <div>
  ${categories.map(({ name, id }) => {
        return `<button type="button" class="btn btn-danger ml-2 mr-2" data-id="${id}" class="btn">${name}</button>
        
        `;
    })
    .join("")}
  </div>
`
}

export default Category