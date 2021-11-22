import { Header, HeaderSubTitle, HeaderTitle, HeaderWrapper, Logo, Menu, NavigationBar } from "./styled";


export const Navigation = () => (
    <NavigationBar>
        <HeaderWrapper>
            <Logo />
            <Header>
                <HeaderTitle>Аксютик Валентина</HeaderTitle>
                <HeaderSubTitle>Диетолог • Нутрициолог</HeaderSubTitle>
            </Header>
        </HeaderWrapper>
            <Menu>
                <li>Главная</li>
                <li>Обо мне</li>
                <li>Услуги</li>
                <li>Обратная связь</li>
            </Menu>
    </NavigationBar>
)