import { About } from "./About";
import { Backdrop } from "./Backdrop";
import { Contacts } from "./Contacts";
import { MiddleBackdrop } from "./MiddleBackdrop";
import { Navigation } from "./Navigation";
import { ScrollButton } from "./ScrollButton";
import { Services } from "./Services";


export const App = () => {
    return (
        <>
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