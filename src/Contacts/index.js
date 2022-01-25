import { Circle, CircleInsta, CircleTelegram, Icon, IconInsta, IconTelegram, IconWrapper, Instagram, Main, Section, Telegram, Text } from "./styled";

export const Contacts = () => (
    <Section>
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