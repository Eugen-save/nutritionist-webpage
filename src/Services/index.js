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
                    <ListItem>Заполнение личной анкеты</ListItem>
                    <ListItem>Анализ рациона питания, 
                        вкусовых предпочтений, 
                        пищевых привычек, 
                        физической активности, 
                        образа жизни, 
                        режима питания, 
                        состояния здоровья</ListItem>
                    <ListItem>Список анализов, которые Вам необходимо сдать</ListItem>
                    <ListItem>Расшифровка лабораторных исследований</ListItem>
                    <ListItem>Подбор витаминно-минеральной поддержки и биологически активных добавок</ListItem>
                    <ListItem>Составление программы питания</ListItem>
                </List>
            </Description>
        </SectionItem>
        <SectionItem section2>
            <SubHeader>Вторичная консультация</SubHeader>
            <Description>
                <List>
                    <ListItem>Чек-ап дефицитных показателей</ListItem>
                    <ListItem>Коррекция схемы нутрицевтиков и рациона питания</ListItem>

                </List>
            </Description>
        </SectionItem>
    </Section>
)