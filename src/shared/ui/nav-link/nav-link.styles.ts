import styled from "styled-components";
import Link from "next/link";


export const SNavLink = styled(Link)<{$isActive?: boolean}>`
    color: ${({ $isActive }) => ($isActive ? 'orange' : 'black')};
    font-size: 14px;
    text-decoration: none;
    
    &:hover{
        text-decoration: underline;
    }
`