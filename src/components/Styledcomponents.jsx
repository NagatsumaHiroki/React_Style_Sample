import styled from "styled-components";

export const Styledcomponents = () => {
  return (
    <Container>
      <p>CssModles</p>
      <button>FIGIT!!</button>
    </Container>
  );
};

const Container = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
`;
