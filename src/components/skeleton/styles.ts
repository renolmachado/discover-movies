import styled, { keyframes } from 'styled-components';

const skeletonLoading = keyframes`
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
`;

export const SkeletonAnimation = styled.div`
  animation: ${skeletonLoading} 2s linear infinite alternate;
`;
