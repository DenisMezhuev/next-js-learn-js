import styled from "styled-components";
import Link from "next/link";


export const SWrapperCard = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
    width: 440px;
    height: 600px;
    text-decoration: none;
`

export const SImg = styled.img`
    width: 100%;
    height: 100%;
    border: 1px solid grey;
    border-radius: 10px;
`

export const SNameBrand = styled.p`
    font-size: 16px;
    color: black;
`