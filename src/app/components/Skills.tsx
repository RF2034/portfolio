import skillsData from "../data/skills";

export default function Skills() {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-base-content">
        スキル
      </h2>
      <div className="flex flex-wrap justify-center gap-4 text-base-content">
        {skillsData.map((skill, index) => (
          <div key={index} className="badge badge-lg">
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
}
