import React from "react";
import styled from "styled-components";

const SvgArrow = ({ setRef }) => {
  return (
    <StyledSvg
      width="24"
      height="60"
      viewBox="0 0 24 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={setRef}
    >
      <path
        d="M12 60L23.547 40L0.452993 40L12 60ZM10 -8.74228e-08L10 42L14 42L14 8.74228e-08L10 -8.74228e-08Z"
        fill="black"
      />
    </StyledSvg>
  );
};

const StyledSvg = styled.svg`
  position: fixed;
  bottom: 32px;
  left: 50%;
  transform: translate(50%, 0);
`;

export default SvgArrow;
