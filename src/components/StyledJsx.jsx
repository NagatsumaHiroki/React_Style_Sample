export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p>CssModles</p>
        <button>FIGIT!!</button>
      </div>
      <style jsx>{`
        .container {
          border: solid 2px #392eff;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
        }
      `}</style>
    </>
  );
};
