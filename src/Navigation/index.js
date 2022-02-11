import { Link, animateScroll as scroll } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import { DeviceSize } from "../theme";
import { MenuLarge } from "./MenuLarge";
import { MenuMobile } from "./MenuMobile";
import { BackdropPoster, Button, List, ListItem, NavigationBar, SideBackdropInfo, SubHeader, WrapperInfo } from "./styled";

export const Navigation = (props) => {
    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

    return (
        <>
            <BackdropPoster>
                <SideBackdropInfo>
                    <WrapperInfo>
                        <SubHeader>Я помогу Вам</SubHeader>
                        <List>
                            <ListItem>нормализовать вес</ListItem>
                            <ListItem>улучшить настроение и общее самочувствие</ListItem>
                            <ListItem>увеличить работоспособность и концентрацию внимания</ListItem>
                            <ListItem>повысить стрессоустойчивость, иммунитет</ListItem>
                        </List>
                        <Button>
                            <Link
                                activeClass="active"
                                to="contacts"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Записаться на консультацию
                            </Link>
                        </Button>
                    </WrapperInfo>
                </SideBackdropInfo>
                <NavigationBar>
                    {isMobile ? <MenuMobile /> : <MenuLarge />}
                </NavigationBar>
            </BackdropPoster>
        </>
    )
}