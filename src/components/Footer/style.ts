import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 2rem;
  padding: 0 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  
  span {
    color: ${props => props.theme['gray-500']};
    font-size: 0.875rem;
  }
`;

export const ResetButton = styled.button`
  background: transparent;
  border: 0;
  color: ${props => props.theme['green-500']};
  font-size: 0.875rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s, color 0.2s;

  &:hover {
    color: ${props => props.theme['green-300']};
    border-color: ${props => props.theme['green-300']};
  }
`;
