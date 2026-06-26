import {SContainer, SContent, SWrapperBaseLayout} from "@/src/widgets/base-layout/base-layout.styles";
import {Footer} from "@/src/widgets/footer";
import {Header} from "@/src/widgets/header";
import {ReactNode} from "react";
import UserProvider from "@/src/widgets/user-provider/user-provider";
import {getUserData} from "@/src/shared/api/get-user-data";

export const BaseLayout = async ({children}:{children: ReactNode})=>{
    const userData = await getUserData();

    return (
        <SContainer>
            <SWrapperBaseLayout>
                <UserProvider userData={userData}>
                <Header/>
                <SContent>{children}</SContent>
                <Footer/>
                </UserProvider>
            </SWrapperBaseLayout>
        </SContainer>
    )
}