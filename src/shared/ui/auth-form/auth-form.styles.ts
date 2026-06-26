import styled from 'styled-components';

export const SForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  margin: 0 auto;
  padding: 24px;
  width: 100%;
`;

export const STitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: gray;
  text-align: center;
  margin: 0 0 8px;
  
`;

export const SFieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: gray;
`;

export const SInput = styled.input`
  padding: 10px 14px;
  font-size: 16px;
  color: #d6d0d0;
  background: gray;
  border: 1px solid gray;
  border-radius: 8px;
  outline: none;
  transition: all 0.3s ease;
  width: 100%;

  &:focus {
    border-color: #8e8edc;
    box-shadow: 0 0 0 3px rgba(16, 98, 216, 0.2);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }


`;

export const SError = styled.p`
  font-size: 14px;
  color: red;
  margin: 4px 0 0;
`;

export const SButton = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: gray;
  background: blue;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  
  &:hover:not(:disabled) {
    background: blue;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(16, 98, 216, 0.3);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const SLinkWrapper = styled.div`
  text-align: center;
  font-size: 14px;
  color: gray;
  margin-top: 4px;
`;

export const SLink = styled.a`
  color: blue;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;