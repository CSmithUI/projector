import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function CreateProject() {
  const [name, setName] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const navigate = useNavigate();

  //const storeProject = (projectInfo: Project) => {};

  const onHandleChange1 = (e: any) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const onHandleChange2 = (e: any) => {
    e.preventDefault();
    setSynopsis(e.target.value);
  };

  const createNewProject = useMutation(api.mutations.createNewProject);

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    createNewProject({
      projName: name,
      synopsis: synopsis,
    });

    navigate("/Home");
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <fieldset>
          <legend>Add New Project</legend>
          <p>
            <input
              type="text"
              name="name"
              value={name}
              id="name"
              onChange={onHandleChange1}
            />
            <label htmlFor="name">Project Name</label>
          </p>
          <p>
            <input
              type="text"
              name="synopsis"
              value={synopsis}
              id="synopsis"
              onChange={onHandleChange2}
            />
            <label htmlFor="synopsis">Short Description</label>
          </p>
          <p>
            <button type="submit">Add Project</button>
          </p>
        </fieldset>
      </form>
      <div>
        {name}
        <br />
        {synopsis}
      </div>
    </div>
  );
}
