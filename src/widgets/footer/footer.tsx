import {SCopyright, SFooterContainer, SFooterText, SLeftContent} from "@/src/widgets/footer/footer.styles";

export const Footer = () => {

    return(
        <SFooterContainer>
            <SLeftContent>
                <SFooterText>TENNIS STORE</SFooterText>
                <SCopyright> 2025 Tennis Store. All rights reserved</SCopyright>
            </SLeftContent>
        </SFooterContainer>
    )
}