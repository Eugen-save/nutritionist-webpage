import {
    Form,
    FormWrapper,
    Input,
    Links,
    LinksWrapper,
    PosterContacts,
    Section,
    SectionHeader,
    SubHeader,
    Submit,
    Textarea,
    Wrapper
} from "./styled";
import {ReactComponent as InstagramIcon} from "./instagramLogo.svg";
import {ReactComponent as FacebookIcon} from "./facebookLogo.svg";
import {ReactComponent as TelegramIcon} from "./telegramLogo.svg";
import {ReactComponent as MailIcon} from "./mailLogo.svg";
import 'react-phone-input-2/lib/style.css'
import PhoneInput from "react-phone-input-2";
import { useState } from "react";

export const Contacts = () => {
    const [value, setValue] = useState();

    return (
        <Section id="contacts">
            <SectionHeader>Запись на консультацию</SectionHeader>
            <SubHeader>Чтобы связаться со мной оставьте свои данные ниже, и я Вам напишу</SubHeader>
            <Wrapper>
                <PosterContacts />
                <FormWrapper>
                <Form 
                    action="mailto: {v.aksyutik@gmail.com}" 
                    method="POST"
                    enctype="multipart/form-data"
                >
                    <Input type="text" placeholder="Имя" required />
                    <Input type="email" placeholder="E-mail" required />
                    <PhoneInput
                        value={value}
                        onChange={setValue}
                        country={'pl'}
                        containerStyle={{
                            border: "none"
                        }}
                        inputStyle={{
                            background: "none",
                            color: "#18181B"
                        }}
                        buttonStyle={{
                            background: "#fff"
                        }}
                        required />
                    <Textarea rows="5" type="text" placeholder="Комментарий" required />
                    <Submit type="submit" value="Выслать" />
                </Form>
                <LinksWrapper>
                <Links href="mailto: {v.aksyutik@gmail.com}" target="_blanc"><MailIcon /></Links>
                <Links href="https://t.me/valentina_aksyutik" target="_blanc"><TelegramIcon /></Links>
                <Links href="https://www.facebook.com/valentina.nutriciolog" target="_blanc"><FacebookIcon /></Links>
                <Links href="https://www.instagram.com/rebekka_james/" target="_blanc"><InstagramIcon /></Links>
            </LinksWrapper>
            </FormWrapper>
            </Wrapper>

        </Section>
    )
}