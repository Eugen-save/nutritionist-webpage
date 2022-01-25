import styled from "styled-components";
import {ReactComponent as CircleIcon} from "./circle.svg";
import {ReactComponent as InstagramIcon} from "./instagram-brands.svg";
import {ReactComponent as TelegramIcon} from "./telegram.svg"

export const Section = styled.section`
    display: grid;
    align-items: center;
    max-width: 1368px;
    max-height: 900px;
    margin: 0 auto;
`;

export const Main = styled.div`
    position: absolute;
    transform: translate(-50%, -50%);
    cursor: pointer;
`;

export const IconInsta = styled.a`
    width: 80px;
    height: 80px;
    margin: 20px;
    border-radius: 50px;
    transition: all .8s;
    display: flex;

    &:hover {
        background: #e60073;
        box-shadow: 0 0 20px #e60073;
    }
`;

export const CircleInsta = styled(CircleIcon)`
    stroke-dasharray: 150;
    transition: all .8s;
    position: absolute;

    &:hover {
        stroke-dasharray: 220;
    }
`;

export const Instagram = styled(InstagramIcon)`
	position: relative;
    top: 15px;
    left: 15px;
    transform: translated(-50%, -50%);
`;

export const IconTelegram = styled.a`
    width: 80px;
    height: 80px;
    margin: 20px;
    border-radius: 50px;
    transition: all .8s;
    display: flex;

    &:hover {
        background: #0088cc;
        box-shadow: 0 0 20px #0088cc;
    }
`;

export const CircleTelegram = styled(CircleIcon)`
    stroke-dasharray: 150;
    transition: all .8s;
    position: absolute;

    &:hover {
        stroke-dasharray: 220;
    }
`;

export const Telegram = styled(TelegramIcon)`
	position: relative;
    top: 14px;
    left: 14px;
    transform: translated(-50%, -50%);
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Text = styled.p`
    color: ${({theme}) => theme.colors.jade};
    font-weight: 700;
    font-size: 20px;
`;

