import { useEffect , useState } from "../../lib";
import { getAllIcons } from "../../api/icons";
const icons = () => {
  
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    getAllIcons()
    .then(({ data }) => setIcons(data))
    .catch((error) => console.log(error));
}, []); 

  return `
      <ul>
      ${icons
        .map((icon, index) => {
            return `
            <li><a  href="${icon.link}"><i style="color:${icon.color}; font-size:${icon.fonsize}" class="${icon.showicon}"></i></a></li>
        `;
        })
        .join("")} 
                      
                  </ul>
  `
}

export default icons