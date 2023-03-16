import instance from "./config";


export const getAllAbouts = () =>{
    const url = "/abouts";
    return instance.get(url)
}

export const getAbouts = (id) =>{
    const url = `abouts/${id}`;
    return instance.get(url)
}

export const addAbouts = (about) =>{
    const url = `/abouts`;
    return instance.post(url,about)
}

export const removeAbouts = (id) =>{
    const url = `/abouts/${id}`;
    return instance.delete(url)
}

export const updateAbouts = (about) =>{
    const url = `/abouts/${about.id}`;
    return instance.put(url,about)
}
