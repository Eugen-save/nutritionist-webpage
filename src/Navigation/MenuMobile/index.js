import { ToggleButton } from "../ToggleButton";
import { Link, animateScroll as scroll } from "react-scroll";
import { Menu, MenuContainer, MenuItem } from "./styled";
import { useState } from "react";

export const MenuMobile = (props) => {

    const [isOpen, setOpen] = useState(false);

    return (
        <MenuContainer>
            <ToggleButton isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
            {isOpen && (
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
            )}
        </MenuContainer>
    )
}