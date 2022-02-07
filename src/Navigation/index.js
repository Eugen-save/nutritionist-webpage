
import { useEffect, useState } from "react";
import { MenuLarge } from "./MenuLarge";
import { MenuMobile } from "./MenuMobile";


export const Navigation = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 767;

    const [navToggled, setNavToggled] = useState(false);

    const handleNavToggle = () => {
      setNavToggled(!navToggled);
    }

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    return (
        <>
        {width > breakpoint ? <MenuLarge /> :  <MenuMobile />}
        </>
    )
}