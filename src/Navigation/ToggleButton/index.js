import { FaBars } from "react-icons/fa";
import { Button } from "./styled";

export const ToggleButton = ({handleNavToggle}) => {

    return (
        <Button
            onClick={handleNavToggle}
        >
            <FaBars />
        </Button>
    )
}