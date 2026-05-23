import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
    try {

        if (!localFilePath) return null;
        //upload file to cloudinary
        const response = await cloudinary.uploader.upload(
            localFilePath,
            {
                resource_type: 'auto'
            }
        );

        console.log("file is uploaded to cloudinary successfully", response.url);
        return response;

        // delete local file after upload
        //fs.unlinkSync(localFilePath);

    } catch (error) {

        // remove local file if upload fails
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }

        console.error('Error uploading to Cloudinary:', error);

        return null;
    }
};

export { uploadOnCloudinary };