function Button({ text, type }) {
  let bg;
  if (type === "default") {
    bg = "#eb334eff";
  } else if (type === "target") {
    bg = "black";
  }

  return (
    <button
      style={{
        backgroundColor: bg,
        color: "white",
        padding: "12px 1.2rem",
        borderRadius: "4px",
        border: "none",
        marginLeft: "6px",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
}

export default Button;
