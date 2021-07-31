/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

export const Emotion = () => {
  const ContainerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
  `;
  const titleStyle = css({ magin: 0, color: "#3d84a8" });
  return (
    <div css={ContainerStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <button>FIGIT!!</button>
    </div>
  );
};
