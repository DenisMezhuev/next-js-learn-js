import styled from "styled-components";


export const SContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 30px;
    margin: 40px 0;
`


export const SWrapperBrand = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    min-height: 200px;
    gap: 20px;
`

export const SBrandName = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: #666;
    margin: 0 0 8px 0;
    text-transform: uppercase;
`;

export const SModel = styled.h2`
    font-size: 18px;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0;
`

export const SDescription = styled.p`
    font-size: 15px;
    color: black;
`

export const SImgContainer = styled.img`
    width: 600px;
    height: 730px;
    border: 1px solid grey;
    border-radius: 10px ;
`
export const SWrapperPrice = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 200px;
`

export const SPrice = styled.div`
    color: black;
    font-size: 24px;
    font-weight: bold;

 
`