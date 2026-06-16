import styled from "styled-components";


export const SFooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 200px;
    border-top: 1px solid grey;
`

export const SLeftContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 200px;
    width: 330px;
    gap: 50px;
`

export const SFooterText = styled.div`
    font-size: 18px;
    color: black;
`

export const SCopyright = styled.div`
    font-size: 14px;
    color: grey;
`