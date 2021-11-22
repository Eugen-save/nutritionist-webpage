import { Info, InfoWrapper, Main, Poster, Title } from "./styled";

export const About = () => (
    <Main>
        <Poster />
        <InfoWrapper>
            <Title>
                Обо мне
            </Title>
            <Info>
                Нутрициолог, диетолог.
            </Info>
            <Info>
                Приветствую! Меня зовут Валентина Аксютик.
            </Info>
        </InfoWrapper>
    </Main>
)