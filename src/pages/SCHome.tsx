import styled from 'styled-components';

export const SCHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  text-align: center;
  height: calc(100vh - 50px);
  background: rgb(111, 66, 193);
  background: linear-gradient(
    90deg,
    rgba(111, 66, 193, 1) 66%,
    rgba(93, 12, 226, 1) 100%
  );
  color: white;
  .header-animations {
    margin: 0 auto;
    max-width: 200px;
    height: auto;
  }
`;

export const SCHomeContent = styled.div`
  padding: 1rem 0;
  /* background-color: rgba(139, 0, 139, 0.7); */
  background: rgb(165, 81, 173);
  background: linear-gradient(
    90deg,
    rgba(165, 81, 173, 1) 18%,
    rgba(252, 70, 107, 1) 100%
  );
  .home-content {
    position: sticky;
    top: 50px;
    padding: 1rem;
    text-align: center;
    &:nth-child(n) {
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      min-height: 70vh;
    }
    &:nth-child(1) {
      position: sticky;
      top: 55px;
      z-index: 1;
      background-color: rgba(75, 0, 130, 0.5);
      color: white;
    }
    &:nth-child(2) {
      position: sticky;
      top: 55px;
      z-index: 2;
      background-color: rgba(95, 15, 139, 1);
      color: white;
    }
    &:nth-child(3) {
      position: sticky;
      top: 55px;
      z-index: 5;
      background-color: rgba(123, 38, 151, 1);
      color: white;
    }
  }
`;
