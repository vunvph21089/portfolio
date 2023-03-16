import instance from "./config"

export const getBgAll = () =>{
    const url = `/backgrounds`;
    return instance.get(url)
}

export const getBg = (id) =>{
    const url = `/backgrounds/${id}`
    return instance.get(url,id)
}

export const addBg = (background) =>{
    const url =`/backgrounds`;
    return instance.post(url,background)
}

export const editBg = (background) =>{
    const url = `/backgrounds/${background.id}`;
    return instance.put(url,background)
}

export const removeBg = (id) =>{
    const url = `/backgrounds/${id}`
    return instance.delete(url,id)
}