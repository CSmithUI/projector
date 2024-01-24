import ProjectTile from ".././ProjectTile";
import { Link } from "react-router-dom";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

import { Project } from "../../utilities/types";

export function UserHome() {
  const projects = useQuery(api.queries.getUserProjects);
  console.log(projects);

  return (
    <div>
      <Link to="/CreateProject">
        <button className="mb-10 rounded-full bg-lime-600 pb-2 pl-3 pr-3 pt-1 font-light leading-5 text-stone-50 hover:bg-lime-800">
          <span className="text-xl">+</span> Add New Project
        </button>
      </Link>
      <div className="w-100 flex flex-wrap content-center">
        {projects?.map(
          (project: Project): JSX.Element => (
            <div className="mr-8 " key={project._id}>
              <ProjectTile
                name={project.projName}
                synopsis={project.synopsis}
                key={project._id}
              />
            </div>
          ),
        )}
      </div>
    </div>
  );
}
