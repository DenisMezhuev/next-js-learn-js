import {SContainer, SWrapper, STitle , SStyledLink, SDescription, SSubtitle} from "@/src/widgets/not-found/not-found.styles";



export default function NotFound() {
    return (
        <SContainer>
            <SWrapper>
                <STitle>404</STitle>
                <SSubtitle>Страница не найдена</SSubtitle>
                <SDescription>Извините, такой ракетки не существует.</SDescription>
                <SStyledLink href="/">Вернуться на главную</SStyledLink>
            </SWrapper>
        </SContainer>
    );
}