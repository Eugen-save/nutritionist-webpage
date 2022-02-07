import { Menu, MenuItem, NavigationBar } from "../styled";
import { ToggleButton } from "../ToggleButton";
import { Link, animateScroll as scroll } from "react-scroll";

export const MenuMobile = () => (
    <NavigationBar>
        <ToggleButton />
        <Menu>
            <MenuItem>
                <Link
                    activeClass="active"
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Обо мне
                </Link>
            </MenuItem>
            <MenuItem>
                <Link
                    activeClass="active"
                    to="service"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Услуги
                </Link>
            </MenuItem>
            <MenuItem>
                <Link
                    activeClass="active"
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Обратная связь
                </Link>
            </MenuItem>
        </Menu>
    </NavigationBar>
)