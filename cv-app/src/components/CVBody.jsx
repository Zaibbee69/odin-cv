export default function CVBody({
  date,
  location,
  institute,
  degree,
  description,
}) {
  return (
    <div className="cv-element-body-ctn">
      <div className="cv-element-date-ctn">
        <p>{date}</p>
        <p>{location}</p>
      </div>
      <div className="cv-element-body">
        <h2>{institute}</h2>
        <p>{degree}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
