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
                Записаться на консультацию
            </Button>
            </WrapperInfo>
        </BlackRectangle>
    </MiddlePoster>
)