function Square(props) {
  const { backgroundColor = "blue", text } = props;
  return (
    <div
      style={{
        height: "50px",
        width: "50px",
        backgroundColor: backgroundColor,
      }}
    >
      {text}
    </div>
  );
}

export default Square;
