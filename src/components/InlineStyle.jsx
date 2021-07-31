export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px #392eff",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px"
  };
  const titleStyle = {
    margin: "0px",
    color: "#3d84a8"
  };
  const buttonStyle = {
    backgroundColor: "#adedd8"
  };

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>-Style-</p>
      <button style={buttonStyle}>FIGIT!!</button>
    </div>
  );
};
