import styled from 'styled-components';

export const Container = styled.main`
  width: 1216px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px){
    width: 375px;
  }
`;
