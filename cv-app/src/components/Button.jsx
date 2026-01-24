function Button({ text, type }) {
  return (
    <button
      style={{
        backgroundColor: type === "default" ? "#eb334eff" : "black",
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
