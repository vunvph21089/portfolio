import { useEffect } from "../../lib"

const NavAdmin = () => {
  
useEffect(() =>{
  const btnLogout = document.querySelector('#logout');
  console.log(JSON.parse(localStorage.getItem('user')).email);

  btnLogout.addEventListener('click', function () {
    localStorage.removeItem('user')
  alert('Bạn đã đăng xuất thành công');

  location.reload();

    
    
    
    
  });
})


  return /*html*/ `
  <nav class="navbar navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
   <nav class="navbar navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand fs-3 fw-bold" href="/">Vu.</a>
   
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/admin">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/admin/products">products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/admin/categorys">Category</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/admin/backgrounds">BackGround</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="/admin/headers">Nội dung Header</a>
        </li>
          <li class="nav-item">
            <a class="nav-link" href="/admin/iconsLink">Icon Header</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/admin/abouts">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/admin/myskills">Skill</a>
          </li>
        </ul>
       ${localStorage.getItem('user') ? '<li class="inline-block mx-3"><button id="logout" >Đăng Xuất</button></li>' :""}
      </div>
    </div>
  </div>
</nav>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
  `
}

export default NavAdmin