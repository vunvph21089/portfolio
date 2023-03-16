

const menu = () => {
  return` 
  <div id="show_menuitems" class="my-menu">
  <div class="menu-box">
      <span>
          <i onclick="hide_menu()" class="flaticon-cancel"></i>
      </span>
      <ul>
          <li><a class="text-decoration-none" onclick="hide_menu()" href="#home">Home</a></li>
          <li><a class="text-decoration-none" onclick="hide_menu()" href="#about">About me</a></li>
          <li><a class="text-decoration-none" onclick="hide_menu()" href="assets/vu.jpg" download="CV-Ngô Văn Vụ">Resume</a></li>
          <li><a class="text-decoration-none" onclick="hide_menu()" href="#portfolio">Projects</a></li>
          <li><a class="text-decoration-none" onclick="hide_menu()" href="#contact">Contact</a></li>
      </ul>
  </div>
</div>
  `
}

export default menu