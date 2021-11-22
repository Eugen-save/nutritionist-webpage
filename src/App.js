import { About } from "./About";
import { Backdrop } from "./Backdrop";
import { MiddleBackdrop } from "./MiddleBackdrop";
import { Navigation } from "./Navigation";
import { Services } from "./Services";


export const App = () => {
    return (
        <>
            <Navigation />
            <Backdrop />
            <About />
            <MiddleBackdrop />
            <Services />
        </>
    )
}