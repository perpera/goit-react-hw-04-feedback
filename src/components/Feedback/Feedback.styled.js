import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    100% {
        transform: rotate(1turn);
    }
`;

export const FeedbackWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 20px;
  flex-direction: column;
  padding: 20px;
  gap: 12px;
  position: relative;
  z-index: 0;
  width: 400px;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  padding: 2rem;

  &::before {
    content: '';
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: #15110b;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-image: conic-gradient(
      transparent,
      rgba(240, 228, 167, 1),
      transparent 30%
    );
    animation: ${rotate} 4s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 6px;
    top: 6px;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    background: #f6f4f1;
    border-radius: 5px;
  }
`;
