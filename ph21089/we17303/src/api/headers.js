import instance from "./config";


export const getAllHeaders = () =>{
    const url = "/headers";
    return instance.get(url)
}

export const getHeaders = (id) =>{
    const url = `headers/${id}`;
    return instance.get(url)
}

export const addHeaders = (header) =>{
    const url = `/headers`;
    return instance.post(url,header)
}

export const removeHeaders = (id) =>{
    const url = `/headers/${id}`;
    return instance.delete(url)
}

export const updateHeaders = (header) =>{
    const url = `/headers/${header.id}`;
    return instance.put(url,header)
}
