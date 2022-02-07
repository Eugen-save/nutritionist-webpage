import { Info, InfoWrapper, Main, Poster, Title } from "./styled";

export const About = () => (
    <Main id="about">
        <Poster />
        <InfoWrapper>
            <Title>
                Обо мне
            </Title>
            <Info>
                Рада приветствовать Вас!
            </Info>
            <Info>
                Я сертифицированный диетолог и привентивный нутрициолог.
            </Info>
            <Info>
                Расскажу Вам, как при помощи индивидуально подобранного рациона питания и нутрицевтиков 
                можно изменить качество Вашей жизни и жизни Вашей семьи.
            </Info>
        </InfoWrapper>
    </Main>
)