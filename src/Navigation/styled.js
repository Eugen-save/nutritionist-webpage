import styled from "styled-components";
import {ReactComponent as LogoImg} from "./logo.svg";

export const NavigationBar = styled.nav`
    width: 100%;
    height: 150px;
    box-shadow: 1px 17px 42px -19px rgba(24, 24, 27, 1);
    top: 0;
    display: flex;
    align-items: center;
    padding: 40px;
    justify-content: space-between;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 30px;
`;

export const Logo = styled(LogoImg)`
    width: 150px;
    height: 150px;
`;

export const Header = styled.header`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    gap: 10px;
    text-transform: uppercase;
    text-align: center;
`;

export const HeaderTitle = styled.h1`
    font-weight: normal;
    font-size: 30px;
    line-height: 42px;
    letter-spacing: 0.23em;
    margin: 0;
`;

export const HeaderSubTitle = styled.h2`
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.075em;
    font-weight: normal;
    margin: 0;
`;

export const Menu = styled.ul`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    flex-wrap: nowrap;
    gap: 30px;
`;