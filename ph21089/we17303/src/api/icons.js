import instance from "./config";


export const getAllIcons = () =>{
    const url = "/icons";
    return instance.get(url)
}

export const getIcons = (id) =>{
    const url = `icons/${id}`;
    return instance.get(url)
}

export const addIcons = (icon) =>{
    const url = `/icons`;
    return instance.post(url,icon)
}

export const removeIcons = (id) =>{
    const url = `/icons/${id}`;
    return instance.delete(url)
}

export const updateIcons = (icon) =>{
    const url = `/icons/${icon.id}`;
    return instance.put(url, icon);
}