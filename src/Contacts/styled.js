import styled, { css } from "styled-components";
import {ReactComponent as InstagramIcon} from "./instagramLogo.svg";
import {ReactComponent as FacebookIcon} from "./facebookLogo.svg";
import {ReactComponent as TelegramIcon} from "./telegramLogo.svg";

export const Section = styled.section`
    max-width: 1368px;
    max-height: 900px;
    margin: 0 auto;
    margin-top: 120px;
`;

export const Wrapper = styled.div`
    display: grid;
    align-items: start;
    grid-template-columns: auto auto;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    border: 4px solid #fff;
    width: 500px;
    padding: 20px;
    flex-wrap: nowrap;
    gap: 20px;
`;

export const Input = styled.input`
    border: none;
    border-bottom: 2px solid #fff;
    background: none;
    padding: 10px;

    ::placeholder {
        color: ${({theme}) => theme.colors.white};
    }
`;

export const Textarea = styled.textarea`
    border: none;
    border-bottom: 2px solid #fff;
    resize: vertical;
    background: none;
`;

export const Submit = styled.input`
    border: none;
    border-radius: 15px;
    padding: 10px;
    background: ${({theme}) => theme.colors.white};
    align-items: center;
    color: ${({theme}) => theme.colors.jade};
`;

export const SectionHeader = styled.h2`
    font-size: 64px;
    line-height: 75px;
    letter-spacing: 0.05em;
    text-align: center;
    color: ${({theme}) => theme.colors.white};
`;

export const SubHeader = styled.h3`
    font-size: 40px;
    text-align: center;
    color: ${({theme}) => theme.colors.white};
`;

export const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 10px;
    align-items: center;
`;

export const Links = styled.a`
    font-size: 24px;
    color: ${({theme}) => theme.colors.white};
    padding: 10px;
    cursor: pointer;
    border-radius: 15px;
    transition: all .8s;

    ${({gmail}) => 
        gmail && css`
            &:hover {
                background-color: ${({theme}) => theme.colors.cinnabar};
                box-shadow: 0 0 20px ${({theme}) => theme.colors.cinnabar};
    }
    `}

    ${({telegram}) => 
        telegram && css`
            &:hover {
                background-color: ${({theme}) => theme.colors.curiousBlue};
                box-shadow: 0 0 20px ${({theme}) => theme.colors.curiousBlue};
    }
    `}

    ${({facebook}) => 
        facebook && css`
            &:hover {
                background-color: ${({theme}) => theme.colors.azureRadiance};
                box-shadow: 0 0 20px ${({theme}) => theme.colors.azureRadiance};
    }
    `}

    ${({instagram}) => 
        instagram && css`
            &:hover {
                background-color: ${({theme}) => theme.colors.rose};
                box-shadow: 0 0 20px ${({theme}) => theme.colors.rose};
    }
    `}
`;

export const Instagram = styled(InstagramIcon)`
    fill: ${({theme}) => theme.colors.white};
`;

export const Facebook = styled(FacebookIcon)`
    fill: ${({theme}) => theme.colors.white};
`;

export const Telegram = styled(TelegramIcon)`
    fill: ${({theme}) => theme.colors.white};
`;