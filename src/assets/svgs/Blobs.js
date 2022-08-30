import React from "react";
import styled from "styled-components";

const SvgBlobs = ({ blobs }) => {
  return (
    <StyledSVG viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
      <g ref={(element) => (blobs.current[0] = element)}>
        <g transform="translate(1100, 1100)">
          <path
            d="M1559 3.58236C1559 618.239 1003.61 1246 381.955 1246C-239.696 1246 -1559 749.65 -1559 -184.09C-1559 -1117.83 -1103.77 -1245 433.402 -1245C1055.05 -1245 1559 -611.074 1559 3.58236Z"
            fill="#f9868d"
          />
        </g>
        <g transform="translate(-100, -100)">
          <path
            d="M1664 170.677C1664 1030.49 258.646 1486 -340.87 1486C-940.386 1486 -1663 844.461 -1663 244.755C-1663 -354.951 -951.361 -2124.12 -115.096 -1244.02C657.685 -349.996 1664 -1130.4 1664 170.677Z"
            fill="#f9868d"
          />
        </g>
      </g>
      <g ref={(element) => (blobs.current[1] = element)}>
        <g transform="translate(-100, -100)">
          <path
            d="M1664 170.677C1664 1030.49 258.646 1486 -340.87 1486C-940.386 1486 -1663 844.461 -1663 244.755C-1663 -354.951 -951.361 -2124.12 -115.096 -1244.02C657.685 -349.996 1664 -1130.4 1664 170.677Z"
            fill="#8652ff"
          />
        </g>
        <g transform="translate(500, 1100)">
          <path
            d="M1664 170.677C1664 1030.49 258.646 1486 -340.87 1486C-940.386 1486 -1663 844.461 -1663 244.755C-1663 -354.951 -951.361 -2124.12 -115.096 -1244.02C657.685 -349.996 1664 -1130.4 1664 170.677Z"
            fill="#8652ff"
          />
        </g>
      </g>
      <g ref={(element) => (blobs.current[2] = element)}>
        <g transform="translate(1100, 1100)">
          <path
            d="M1559 3.58236C1559 618.239 1003.61 1246 381.955 1246C-239.696 1246 -1559 749.65 -1559 -184.09C-1559 -1117.83 -1103.77 -1245 433.402 -1245C1055.05 -1245 1559 -611.074 1559 3.58236Z"
            fill="#ff4141"
          />
        </g>
      </g>
      <g ref={(element) => (blobs.current[3] = element)}>
        <g transform="translate(-100, -100)">
          <path
            d="M1664 170.677C1664 1030.49 258.646 1486 -340.87 1486C-940.386 1486 -1663 844.461 -1663 244.755C-1663 -354.951 -951.361 -2124.12 -115.096 -1244.02C657.685 -349.996 1664 -1130.4 1664 170.677Z"
            fill="#ffffff"
          />
        </g>
      </g>
    </StyledSVG>
  );
};

const StyledSVG = styled.svg`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100vh;
  mix-blend-mode: multiply;
  pointer-events: none;
/*   path {
    transform: scale(0.5);
  } */
`;

export default SvgBlobs;
