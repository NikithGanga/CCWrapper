import { S3 } from "aws-sdk";
import fs from "fs";
import dotenv from 'dotenv';
dotenv.config();


// replace with your own credentials
const s3 = new S3({
    accessKeyId: process.env.accessKeyId as string,
    secretAccessKey: process.env.secretAccessKey as string,
    endpoint: process.env.endpoint as string
})

// fileName => output/12312/src/App.jsx
// filePath => /Users/harkiratsingh/vercel/dist/output/12312/src/App.jsx
export const uploadFile = async (fileName: string, localFilePath: string) => {
    const fileContent = fs.readFileSync(localFilePath);
    const response = await s3.upload({
        Body: fileContent,
        Bucket: "wrapperclassbucket",
        Key: fileName,
    }).promise();
    console.log(response);
}