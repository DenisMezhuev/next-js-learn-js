import styled from "styled-components";

export const SWrapperFilter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 70px;
    height: fit-content;
`

export const SLabel = styled.span`
    color: grey;
    font-size: 16px;
`

export const SFilter = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    list-style-type: none;
    
    `
export const SFilterItem = styled.li<{ $isActive?: boolean }>`
    color: black;
    font-size: 14px;
    cursor: pointer;
    position: relative;
    font-weight: ${({ $isActive }) => ($isActive ? '700' : '500')};

    &::before {
        content: '•';
        position: absolute;
        left: -10px;
        display:  ${({ $isActive }) => ($isActive ? 'block' : 'none')};
        color: black;
    }
`;

