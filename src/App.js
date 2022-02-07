import { useState } from "react";
import { About } from "./About";
import { Backdrop } from "./Backdrop";
import { Contacts } from "./Contacts";
import { MiddleBackdrop } from "./MiddleBackdrop";
import { Navigation } from "./Navigation";
import { ToggleButton } from "./Navigation/ToggleButton";
import { ScrollButton } from "./ScrollButton";
import { Services } from "./Services";


export const App = () => {

    return (
        <>
        { navToggled ? <Navigation handleNavToggle={handleNavToggle} /> : null }
            <Navigation />
            <Backdrop />
            <About />
            <MiddleBackdrop />
            <Services />
            <Contacts />
            <ScrollButton />
        </>
    )
}