import React from "react";
import styled from "styled-components";
export default (props) => (
  <StyledFooter>
    <span>
      {" "}
      Desenvolvido com <i className="fa fa-heart text-danger"></i> por{" "}
      <strong> Glaucielle</strong>
    </span>
  </StyledFooter>
);

const StyledFooter = styled.footer`
  grid-area: footer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 25px;
  background-color: ${({ theme }) => theme.light};
  box-shadow: ${({ theme }) => theme.shadow};
`;
