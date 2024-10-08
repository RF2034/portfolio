import timelineData from "../data/timeline";

export default function Timeline() {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Biography</h2>
      <ul className="timeline timeline-vertical">
        {timelineData.map((item, index) => (
          <li key={index}>
            <div className="timeline-start">{item.date}</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`w-5 h-5 ${item.flag ? "text-primary" : ""}`}
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {index !== 0 && <hr className="bg-primary" />}
            <div className="timeline-end timeline-box">{item.description}</div>
            {index !== timelineData.length - 1 && <hr className="bg-primary" />}
          </li>
        ))}
      </ul>
    </section>
  );
}
