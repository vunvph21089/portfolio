import instance from "./config";


export const getSkills = () =>{
    const url = "/skills";
    return instance.get(url)
}

export const getSkill = (id) =>{
    const url = `skills/${id}`;
    return instance.get(url)
}

export const addSkill = (skill) =>{
    const url = `/skills`;
    return instance.post(url,skill)
}

export const deleteSkill = (id) =>{
    const url = `/skills/${id}`;
    return instance.delete(url)
}

export const updateSkill= (skill) =>{
    const url = `/skills/${skill.id}`;
    return instance.put(url,skill)
}