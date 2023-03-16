
import { useEffect , useState  } from "../../../lib";
import headerAdmin from "../../../components/byAdmin/headerAdmin";
import { getAllAbouts , removeAbouts } from "../../../api/about";
const indexAbout = () => {
    const [abouts, setAllAbouts] = useState([]);

    useEffect(() => {
        getAllAbouts()
        .then(({data}) => setAllAbouts(data))
        .catch((error) => console.log(error));
    }, []);
  
    useEffect( () => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", function(){
                try {
                    const id = this.dataset.id;
  
                    removeAbouts(id).then(() => {
                        const newAbouts = abouts.filter((abouts) => abouts.id != id);
                        setAllAbouts(newAbouts);
                    });
                } catch (error) {
                    console.log(error);
                }
            });
        }
    });
    return `
    ${headerAdmin()}
    <div class="container pt-5 mt-5">
            <h1>Quản lý Icons</h1>
            <a href="/admin/abouts/add" class="btn btn-primary bg-success text-white mt-5 mb-3" role="button" aria-disabled="true">Add Abouts</a>
            <table class="table table-bordered">
                    <thead>
                        <tr>
                            
                            <th>Tex1</th>
                            <th>Span</th>
                            <th>Tex2</th>
                            <th>P</th>
                            <th>imgs</th>
                            <th>Chức Năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${abouts
                            .map((about, index) => {
                                return `
                                <tr>                              
                                   
                                    <td><p>${about.text1}</p></td>
                                    <td><p style="color:${about.colorspan};">${about.span}</p></td>
                                   
  
                                    <td ><p>${about.text2}</p></td>
                                    
                                         
  
                                    <td><p>${about.p}</p></td>
                                    <td><img width="200" src="${about.img[0]}" alt=""></td>
  
                                    <td>
                                        <button data-name="Dat" data-id="${about.id}"class="btn btn-danger btn-remove">Remove</button><br>
                                        <a href="/admin/abouts/${about.id}/edit">Edit</a>
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
  

export default indexAbout