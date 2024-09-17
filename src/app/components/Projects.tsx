import projectsData from "../data/projects";

export default function Projects() {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold text-center mb-6">プロジェクト</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">{project.name}</h3>
              <p>{project.description}</p>
              <div className="card-actions justify-end">
                {/* <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  詳細を見る
                </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
