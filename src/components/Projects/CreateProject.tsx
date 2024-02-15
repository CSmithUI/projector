import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { atom, useAtom } from "jotai";

export default function CreateProject() {
  const [name, setName] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const navigate = useNavigate();

  const newProjectAtom = atom({
    name: "",
    synopsis: "",
  });

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

    navigate("/");
  };

  return (
    <section className="flex w-full justify-center">
      <div className="w-6/12">
        <form onSubmit={handleOnSubmit}>
          <fieldset>
            <legend>
              <h2 className="w-full text-2xl text-rose-600">Add New Project</h2>
            </legend>
            <p>
              <label htmlFor="name" className="hidden">
                Project Name
              </label>
              <input
                type="text"
                name="name"
                className="mt-5 w-full rounded-md pb-1 pl-4 pr-4 pt-1 leading-8 text-stone-950 focus:bg-amber-100 focus:outline-none"
                placeholder="Enter a project name."
                value={name}
                id="name"
                onChange={onHandleChange1}
              />
            </p>
            <p>
              <label htmlFor="synopsis" className="hidden">
                Short Description
              </label>
              <input
                type="text"
                name="synopsis"
                className="mt-5 w-full rounded-md pb-1 pl-4 pr-4 pt-1 leading-8 text-stone-950 focus:bg-amber-100 focus:outline-none"
                placeholder="Enter a short description."
                value={synopsis}
                id="synopsis"
                onChange={onHandleChange2}
              />
            </p>

            <p>
              <button
                className="mt-10 rounded-full bg-lime-600 pb-2 pl-3 pr-3 pt-1 font-light leading-5 text-stone-50 hover:bg-lime-800"
                type="submit"
              >
                <span className="text-xl">+</span> Save Project
              </button>
            </p>
          </fieldset>
        </form>
      </div>
    </section>
  );
}
