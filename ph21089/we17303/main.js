
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js"
import { render , router } from "./src/lib";
import $ from "jquery";
import 'jquery-validation' 
window.$ = $;
window.jQuery = $;



import HomePage from "./src/pages/home";
import detailPage from "./src/pages/detailPage";

// import admin

import SignIn from "./src/pages/signin";
import SignUp from "./src/pages/signup";


import homeAdmin from "./src/pages/admin/homeAdmin";
import addNew from "./src/pages/admin/products/addNew";
import editNew from "./src/pages/admin/products/editNew";
import indexProducts from "./src/pages/admin/products/indexProducts";
import AdminAddCategory from "./src/pages/admin/categorys/addCategory"
import AdminCategorys from "./src/pages/admin/categorys/indexCategorys";
import AdminEditCategorys from "./src/pages/admin/categorys/editCategorys";


import indexBG from "./src/pages/layout/background/indexBG";
import addBG from "./src/pages/layout/background/addBG";
import editBG from "./src/pages/layout/background/editBG";

import addLinkIcons from "./src/pages/layout/linkicon/addLinkIcons";
import editLinkIcons from "./src/pages/layout/linkicon/editLinkIcons";
import indexLinkIcons from "./src/pages/layout/linkicon/indexLinkIcons";

import indexheader from "./src/pages/layout/header/indexheader";
import addheader from "./src/pages/layout/header/addheader";
import editheader from "./src/pages/layout/header/editheader";

import indexAbout from "./src/pages/layout/about/indexAbout";
import addAbout from "./src/pages/layout/about/addAbout";
import editAbout from "./src/pages/layout/about/editAbout";

import AdminSkillAddPage from "./src/pages/layout/skills/skills-add";
import AdminSkillsEditPage from "./src/pages/layout/skills/skills-edit";
import AdminSkillsPage from "./src/pages/layout/skills/skills";


const app = document.querySelector("#app");



router.on("/",() => render(HomePage,app))
router.on("/products/:id", ({ data }) => render(() => detailPage(data), app))


// admin

router.on("/signin", () => render(SignIn,app))
router.on("/signup", () => render(SignUp,app))



router.on("/admin/*", () => {}, {
	before(done, match) {
		if (localStorage.getItem('user')) {
			const userRole = JSON.parse(localStorage.getItem('user')).role;
			if (userRole === 1) {
				done();
			} else {
				document.location.href = "/";
			}
		} else {
			document.location.href = "/";
		}
	}
})


//thêm sửa xóa products
router.on("/admin", () => render(homeAdmin,app))
router.on("/admin/products", () => render(indexProducts,app))
router.on("/admin/products/add", () => render(addNew,app))
router.on("/admin/products/:id/edit", ({ data }) => render(() => editNew(data), app))
// thêm sửa xóa danh mục
router.on("/admin/categorys", () => render(AdminCategorys,app))
router.on("/admin/categorys/add", () => render(AdminAddCategory,app))
router.on("admin/categorys/:id/edit" , ({ data}) => render(() => AdminEditCategorys(data),app))

// thêm sửa xóa background
router.on("/admin/backgrounds",() => render(indexBG,app))
router.on("/admin/backgrounds/add", () => render(addBG,app))
router.on("/admin/backgrounds/:id/edit", ({ data }) => render(() => editBG(data), app))
 
// icon header

router.on("/admin/iconsLink",() => render(indexLinkIcons,app))
router.on("/admin/iconsLink/add", () => render(addLinkIcons,app))
router.on("/admin/iconsLink/:id/edit", ({ data }) => render(() => editLinkIcons(data), app))


// text header

router.on("/admin/headers",() => render(indexheader,app))
router.on("/admin/headers/add", () => render(addheader,app))
router.on("/admin/headers/:id/edit", ({ data }) => render(() => editheader(data), app))

//edit about

router.on("/admin/abouts",() => render(indexAbout,app))
router.on("/admin/abouts/add", () => render(addAbout,app))
router.on("/admin/abouts/:id/edit", ({ data }) => render(() => editAbout(data), app))

//edit my skill

router.on("/admin/myskills",() => render(AdminSkillsPage,app))
router.on("/admin/myskills/add", () => render(AdminSkillAddPage,app))
router.on("/admin/myskills/:id/edit", ({ data }) => render(() => AdminSkillsEditPage(data), app))

router.resolve();