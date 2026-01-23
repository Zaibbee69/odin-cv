export default function CVBody({ date, location, institute, degree }) {
  return (
    <div className="cv-element-body-ctn">
      <div className="cv-element-date-ctn">
        <p>{date}</p>
        <p>{location}</p>
      </div>
      <div className="cv-element-body">
        <h2>{institute}</h2>
        <p>{degree}</p>
      </div>
    </div>
  );
}
