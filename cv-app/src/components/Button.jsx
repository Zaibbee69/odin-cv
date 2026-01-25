function Button({ text, type, handleDummyData }) {
  return (
    <button
      onClick={handleDummyData}
      style={{
        backgroundColor: type === "default" ? "#eb334eff" : "#eb334eff",
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
