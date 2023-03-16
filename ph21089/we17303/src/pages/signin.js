import { useEffect , useState } from "../lib"
import { signin } from "../api/users";

const SignIn = () => {

  useEffect(() =>{
    const Form = document.querySelector(".form");
    const email = document.querySelector(".email");
    const password = document.querySelector(".password");

    Form.addEventListener("submit", async (data) => {
        data.preventDefault();
        try {
            const response = await signin({
                email: email.value,
                password: password.value,
            });
            // console.log(response.data.user);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            if (response.data.user.role == 1) {
                document.location.href = "/admin";
            } else {
                document.location.href = "/";
            }
        } catch (error) {
            console.log(error.response.data);
        }
    })

  })
  return `
  <main class="grid grid-cols-8 gap-3 my-2 relative">
  <div class="col-span-8 bg-grey-lighter min-h-screen flex flex-col bg-[#f3f7f9]">
    <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <form action="" class="form">
      <h1 class="mb-8 text-3xl text-center">Đăng Nhập</h1>
            <input 
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4 email"
                name="email"
                placeholder="Email" />

            <input 
                type="password"
                class="block border border-grey-light w-full p-3 rounded mb-4 password"
                name="password"
                placeholder="Password" />
            <button
                type="submit"
                class="w-full text-center py-3 rounded bg-green-500 text-white  my-1"
            >Đăng Nhập</button>
  </form>
            <div class="text-center text-sm text-grey-dark mt-4">
                By signing up, you agree to the 
                <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                    Terms of Service
                </a> and 
                <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                    Privacy Policy
                </a>
            </div>
        </div>

        <div class="text-grey-dark mt-6">
            Bạn chưa có tài khoản? 
            <a class="no-underline border-b border-blue-500 text-blue-500" href="/signup">
                Đăng Ký
            </a>.
        </div>
    </div>
</div>
</main>
  `
}

export default SignIn