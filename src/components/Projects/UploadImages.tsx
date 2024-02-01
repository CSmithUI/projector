import { useNavigate } from "react-router-dom";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { UploadFileResponse, UploadDropzone } from "@xixixao/uploadstuff/react";
import "@xixixao/uploadstuff/react/styles.css";

export default function UploadImages() {
  const navigate = useNavigate();

  ///// "UploadStuff" npm package multiple image upload flow
  const generateUploadUrl = useMutation(api.files.generateUploadUrl);
  const saveStorageId = useMutation(api.files.saveStorageIds);
  const saveAfterUpload = async (uploaded: UploadFileResponse[]) => {
    await saveStorageId({
      uploaded: uploaded.map(({ response }) => ({
        storageId: (response as any).storageId,
        projectId: "r",
      })),
    });
    //navigate back to home
    navigate("/Home");
  };
  /////

  return (
    <section className="flex w-full justify-center">
      <div className="w-6/12">
        <div className="mt-10 w-full cursor-pointer">
          <UploadDropzone
            uploadUrl={generateUploadUrl}
            fileTypes={{
              "image/*": [".png", ".gif", ".jpeg", ".jpg"],
            }}
            multiple
            onUploadComplete={saveAfterUpload}
            onUploadError={(error: unknown) => {
              // Do something with the error.
              alert(`ERROR! ${error}`);
            }}
          />
        </div>
      </div>
    </section>
  );
}
