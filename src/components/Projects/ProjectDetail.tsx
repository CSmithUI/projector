import { Link, useParams } from "react-router-dom";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

import { Project } from "../../utilities/types";

export default function ProjectDetail() {
  // retrieve selected project's id from the URL params
  const { projectId } = useParams();

  if (projectId == undefined) {
    return;
  } else {
    // convex query call
    const projectArr: Project[] | undefined = useQuery(
      api.queries.getProjectDetail,
      {
        projectId,
      },
    );

    if (projectArr) {
      // extract the project from the returned array
      let [project] = projectArr;

      return (
        <div>
          <h2 className="text-rose-300">{project.projName}</h2>
          <p>{project.synopsis}</p>
        </div>
      );
    }
  }
}
