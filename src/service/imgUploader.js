class ImgUploader{
    async upload(file){

        const cloud_name='di0rvlo3b';
        const unsigned_upload_preset = 'n41ampz3';
        var POST_URL = "https://api.cloudinary.com/v1_1/" + cloud_name + "/auto/upload";

        const data = new FormData();
        data.append('file',file);
        data.append('upload_preset',unsigned_upload_preset)


        const res = await fetch(
            
            POST_URL,{


///DJFLSJDFLJLK

            method:'POST',
            body:data
        });

        return res.json();
    }
}

export default ImgUploader;