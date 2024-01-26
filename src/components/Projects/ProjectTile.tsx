export default function ProjectTile(props: { name: string; synopsis: string }) {
  return (
    <div>
      <article className="h-60 w-48 rounded-md bg-neutral-700 ">
        <div className="h-30 w-48 rounded-t-md bg-neutral-300">
          <img src="" />
        </div>
        <div className="p-4">
          <h4 className="">{props.name}</h4>
          <p className="pt-2 text-xs">{props.synopsis}</p>
        </div>
      </article>
    </div>
  );
}
