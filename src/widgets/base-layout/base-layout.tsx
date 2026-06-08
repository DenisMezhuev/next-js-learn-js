import {SContainer, SContent, SWrapperBaseLayout} from "@/src/widgets/base-layout/base-layout.styles";
import {Footer} from "@/src/widgets/footer";
import {Header} from "@/src/widgets/header";
import {ReactNode} from "react";

export const BaseLayout = ({children}:{children: ReactNode})=>{
    return (
        <SContainer>
            <SWrapperBaseLayout>
                <Header/>
                <SContent>{children}</SContent>
                <Footer/>
            </SWrapperBaseLayout>
        </SContainer>
    )
}