import styled from 'styled-components';

export const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 40px 20px;
  background: var(--gray-900);
  text-align: center;
`;

export const SErrorCode = styled.h1`
  font-size: 120px;
  font-weight: 700;
  line-height: 1;
  margin: 0;
    
`;

export const SErrorTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin: 16px 0 8px;
  color: var(--gray-200);
    
`;

export const SErrorMessage = styled.p`
  font-size: 18px;
  color: var(--gray-300);
  max-width: 500px;
  margin: 8px 0 32px;
  line-height: 1.6;
`;

export const SErrorDescription = styled.p`
  font-size: 16px;
  color: var(--gray-400);
  max-width: 500px;
  margin: 0 0 32px;
  line-height: 1.6;
`;

export const SButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SButton = styled.button<{ $primary?: boolean }>`
  padding: 12px 32px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  background: ${({ $primary }) => ($primary ? 'var(--blue-300)' : 'transparent')};
  color: ${({ $primary }) => ($primary ? 'var(--gray-900)' : 'var(--blue-300)')};
  border: ${({ $primary }) => ($primary ? 'none' : '2px solid var(--blue-300)')};

  &:hover {
    background: ${({ $primary }) => ($primary ? 'var(--blue-200)' : 'var(--blue-700)')};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
`;
