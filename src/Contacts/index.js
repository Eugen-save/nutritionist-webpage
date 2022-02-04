import {
    Facebook,
    Form,
    Input,
    Instagram,
    Links,
    LinksWrapper,
    Section,
    SectionHeader,
    SubHeader,
    Submit,
    Telegram,
    Textarea,
    Wrapper
} from "./styled";
import 'react-phone-input-2/lib/style.css'
import PhoneInput from "react-phone-input-2";
import { useState } from "react";

export const Contacts = () => {
    const [value, setValue] = useState();

    return (
        <Section>
            <SectionHeader>Запись на консультацию</SectionHeader>
            <SubHeader>Со мной можно свзяаться любым удобным для Вас способом, либо оставьте свои данные ниже, и я Вам напишу/перезвоню</SubHeader>
            <Wrapper>
                <Form>
                    <Input type="text" placecholder="Имя" required />
                    <Input type="email" placeholder="E-mail" required />
                    <PhoneInput
                        placeholder="(999) 999-999"
                        value={value}
                        international
                        onChange={setValue}
                        country={'pl'}
                        containerStyle={{
                            border: "none"
                        }}
                        inputStyle={{
                            background: "none",
                            border: "0 0 0 1px solid #fff",
                            color: "white"
                        }}
                        buttonStyle={{
                            background: "none"
                        }}
                        required />
                    <Textarea rows="5" type="text" placecholder="Комментарий" required />
                    <Submit type="submit" value="Выслать" />
                </Form>
            </Wrapper>
            <SubHeader>Мои контакты</SubHeader>
            <LinksWrapper>
                <Links gmail href="mailto: {v.aksyutik@gmail.com}" target="_blanc">v.aksyutik@gmail.com</Links>
                <Links telegram href="https://t.me/valentina_aksyutik" target="_blanc">Мой Telegram-канал</Links>
                <Links facebook href="https://www.facebook.com/valentina.nutriciolog" target="_blanc">Моя страница на Facebook</Links>
                <Links instagram href="https://www.instagram.com/rebekka_james/" target="_blanc">Мой Instagram</Links>
                <div>
                    <Instagram />
                    <Telegram />
                    <Facebook />
                </div>
            </LinksWrapper>
        </Section>
    )
}