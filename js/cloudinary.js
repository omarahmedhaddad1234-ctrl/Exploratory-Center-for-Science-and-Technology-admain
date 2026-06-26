export async function uploadImage(file) {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "science_upload");

    const response = await fetch(
        "https://api.cloudinary.com/v1_1/doaipcnvd/image/upload",
        {
            method: "POST",
            body: formData
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error?.message || "فشل رفع الصورة");
    }

    return data.secure_url;
}