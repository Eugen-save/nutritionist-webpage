import { 
    CircleInsta, 
    CircleTelegram, 
    Form, 
    IconInsta, 
    IconTelegram, 
    IconWrapper, 
    Input, 
    Instagram, 
    Section, 
    Submit, 
    Telegram, 
    Text, 
    Textarea} from "./styled";
import 'react-phone-input-2/lib/style.css'
import PhoneInput from "react-phone-input-2";
import { useState } from "react";

export const Contacts = () => {
    const [value, setValue] = useState();

    return (
        <Section>
            <Form>
                <Input type="text" placecholder="Имя" required />
                <Input type="email" placeholder="E-mail" required />
                <PhoneInput
                    placeholder="(999) 999-999"
                    value={value}
                    international
                    countryCallingCodeEditable={false}
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
            <div>
                <IconWrapper>
                    <Text>Мой Telegram-канал с полезной информацией</Text>
                    <IconTelegram
                        href="https://t.me/valentina_aksyutik"
                        target="_blanc"
                    >
                        <CircleTelegram />
                        <Telegram />
                    </IconTelegram>
                </IconWrapper>
                <IconWrapper>
                    <Text>Мой Instagram с полезной информацией</Text>
                    <IconInsta
                        href="https://www.instagram.com/rebekka_james/"
                        target="_blanc"
                    >
                        <CircleInsta />
                        <Instagram />
                    </IconInsta>
                </IconWrapper>
            </div>

        </Section>
    )
}