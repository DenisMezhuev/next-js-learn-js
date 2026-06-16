import {HeaderNav} from "@/src/features/header-nav";
import {SContainer, SText, SWrapper,} from "@/src/widgets/header/header.styles";
import Image from 'next/image'
import racketIcon from "@/public/racket.png"

export const Header = ()=>{

    return (
        <SContainer>
            <SWrapper>
                <Image src={racketIcon} width={32} height={32}  alt='rackets'/>
                <SText>TENNIS STORE</SText>
                <HeaderNav/>
            </SWrapper>
        </SContainer>)
}