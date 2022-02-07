import { Link, animateScroll as scroll } from "react-scroll";
import { 
    BlackRectangle, 
    Button, 
    List, 
    ListItem, 
    MiddleHeader, 
    MiddlePoster, 
    SubHeader, 
    WrapperInfo 
} from "./styled";

export const MiddleBackdrop = () => (
    <MiddlePoster>
        <BlackRectangle>
            <WrapperInfo>
            <MiddleHeader>
                Почему стоит обратиться ко мне?
            </MiddleHeader>
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
        </BlackRectangle>
    </MiddlePoster>
)