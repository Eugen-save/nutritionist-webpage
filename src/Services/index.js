import { Description, List, ListItem, Section, SectionHeader, SectionItem, SubHeader } from "./styled";

export const Services = () => (
    <Section id="service">
        <SectionHeader>
            Мои услуги
        </SectionHeader>
        <SectionItem>
            <SubHeader>Первичная консультация</SubHeader>
            <Description>
                <List>
                    <ListItem>Анализ рациона питания,
                        вкусовых предпочтений,
                        образа жизни и состояния здоровья</ListItem>
                    <ListItem>Список анализов, которые необходимо сдать</ListItem>
                    <ListItem>Расшифровка лабораторных исследований</ListItem>
                    <ListItem>Подбор витаминно-минеральной поддержки</ListItem>
                    <ListItem>Составление программы питания</ListItem>
                </List>
            </Description>
        </SectionItem>
        <SectionItem section2>
            <SubHeader>Вторичная консультация</SubHeader>
            <Description>
                <List>
                    <ListItem>Анализ режима питания, пищевых привычек и физической активности</ListItem>
                    <ListItem>Чек-ап дефицитных показателей</ListItem>
                    <ListItem>Расшифровка лабораторных исследований</ListItem>
                    <ListItem>Корректировка схемы биологически активныз добавок</ListItem>
                    <ListItem>Рекомендации по рациону питания и образу жизни</ListItem>
                </List>
            </Description>
        </SectionItem>
    </Section>
)