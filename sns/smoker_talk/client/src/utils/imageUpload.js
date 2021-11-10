export const checkImage = (file) => {
    let err = ""
    if(!file) return err = "파일이 존재하지 않습니다."

    if(file.size > 1024 * 1024) // 1mb
    err = "최대파일 크기는 1MB 입니다."

    if(file.type !== 'image/jpeg' && file.type !== 'image/png' )
    err = "파일 확장자를 확인해주세요."
    
    return err;
}


export const imageUpload = async (images) => {
    let imgArr = [];
    for(const item of images){
        const formData = new FormData()

        if(item.camera){
            formData.append("file", item.camera)
        }else{
            formData.append("file", item)
        }
        
        formData.append("upload_preset", "efxjficn")
        formData.append("cloud_name", "devat-channel")

        const res = await fetch("https://api.cloudinary.com/v1_1/devat-channel/upload", {
            method: "POST",
            body: formData
        })
        
        const data = await res.json()
        imgArr.push({public_id: data.public_id, url: data.secure_url})
    }
    return imgArr;
}