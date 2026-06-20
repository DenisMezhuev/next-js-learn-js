import styled from 'styled-components';

export const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 40px 20px;
  background: #ffffff;
  text-align: center;
`;

export const SErrorCode = styled.h1<{ statusCode: number }>`
  font-size: 120px;
  font-weight: 700;
  line-height: 1;
  margin: 0;
  
  color: ${({ statusCode }) => {
    if (statusCode >= 500) return '#ff2929';
    if (statusCode === 404) return '#ff9328';
    return '#44464b';
}};
    
`;

export const SErrorTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin: 16px 0 8px;
  color: #44464b;
`;

export const SErrorMessage = styled.p`
  font-size: 18px;
  color: #808080;
  max-width: 500px;
  margin: 8px 0 32px;
  line-height: 1.6;
`;

export const SErrorDescription = styled.p`
  font-size: 16px;
  color: #b9bbbd;
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

  background: ${({ $primary }) => ($primary ? '#1062d8' : 'transparent')};
  color: ${({ $primary }) => ($primary ? '#ffffff' : '#1062d8')};
  border: ${({ $primary }) => ($primary ? 'none' : '2px solid #1062d8')};

  &:hover {
    background: ${({ $primary }) => ($primary ? '#0051c5' : '#ebf5ff')};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const SIconWrapper = styled.div`
  margin-bottom: 24px;
  font-size: 64px;
`;