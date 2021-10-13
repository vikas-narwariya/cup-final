import React from "react";
import { Upload } from "@aws-sdk/lib-storage";
import { S3Client, S3 } from "@aws-sdk/client-s3";


function Aws() {

    const upload = (file) => {
        var file = file.target.files[0];

        const target = { Bucket:"gomart-images", Key:file.name, Body:file };
        const cred = { accessKeyId: "AKIASTTFFLJ33GEEAMGC"};
        try {
            const parallelUploads3 = new Upload({
                client: new S3Client({region:"us-east-1", credentials:cred}),
                // tags: [...],
                // queueSize: 4,
                // partSize: 5MB,
                leavePartsOnError: false,
                params: target,
            });

            parallelUploads3.on("httpUploadProgress", (progress) => {
                console.log(progress);
            });

         parallelUploads3.done();  
        }catch (e){
            console.log(e);
        }
    }
    return (
        <>
        <input type="file" onChange={upload} />
        </>
    );
}

export default Aws;