
import headerAdmin from '../../components/byAdmin/headerAdmin'


const homeAdmin = () => {
  return  /*html*/`
  <div style="min-height:100%;
  position:relative;" class =" admin">
   ${headerAdmin()}
    <div class="container-fluid pt-5">
    <h1 style= "" class="mt-5 ">Đây là Admin</h1>
    </div>
   </div>
  `
}

export default homeAdmin