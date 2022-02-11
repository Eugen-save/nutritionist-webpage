import { About } from "./About";
import { Contacts } from "./Contacts";
import { Navigation } from "./Navigation";
import { ScrollButton } from "./ScrollButton";
import { Services } from "./Services";


export const App = () => {

    return (
        <>  
            <Navigation />
            <About />
            <Services />
            <Contacts />
            <ScrollButton />
        </>
    )
}