import { useEffect, useState } from "../lib";
import { getSkills } from "../api/skills";
const myskill = () => {
  const [skills, setAllSkills] = useState([]);

  useEffect(() => {
    getSkills ()
      .then(({ data }) => setAllSkills(data))
      .catch((error) => console.log(error));
  }, []); 
  return `

          <div class="bg-black skill">
          <h3>MY SKILL</h3>
           <p>I have knowledge of programming languages such as Java, C++, C and software development-related  <br>technologies such as HTML, CSS,and JavaScript,...</p>

<div class="bg-black pt-5 pb-5">
${skills
  .map((skill, index) => {
      return `
      <i style="color:${skill.color}; font-size:${skill.fonsize}" class="${skill.showicon} pl-4 pr-4 "></i>
  `;
  })
  .join("")} 
</div>
</div>

  `
}

export default myskill