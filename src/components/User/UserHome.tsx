import ProjectTile from ".././ProjectTile";
import { Link } from "react-router-dom";

export function UserHome() {
  return (
    <div>
      <Link to="/CreateProject">
        <button className="rounded-full bg-rose-600 pb-2 pl-3 pr-3 pt-2">
          Add NewProject
        </button>
      </Link>
      <ProjectTile />
    </div>
  );
}
