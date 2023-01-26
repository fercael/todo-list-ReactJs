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

export const PageTitle = styled.h1`
  padding: 2rem;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  color: var(${props => props.theme.colors.title});
`;