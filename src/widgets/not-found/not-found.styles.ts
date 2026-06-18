import styled from "styled-components";
import Link from "next/link";

export const SContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

export const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 500px;
  padding: 60px 40px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const STitle = styled.h1`
  font-size: 120px;
  font-weight: 900;
  margin: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  letter-spacing: -5px;

  @media (max-width: 768px) {
    font-size: 80px;
  }
`;

export const SSubtitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin: 16px 0 8px;
  color: #2d3748;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const SDescription = styled.p`
  color: #718096;
  font-size: 18px;
  margin: 8px 0 32px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const SStyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: 600;
  font-size: 16px;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
  }

  &:active {
    transform: translateY(0);
  }
`;