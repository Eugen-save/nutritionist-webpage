import styled from "styled-components";
import poster from "./middle-poster.jpg";

export const MiddlePoster = styled.div`
    background-image: url("${poster}");
    background-repeat: no-repeat;
    background-size: cover;
    height: 950px;
    margin-top: 80px;
`;

export const BlackRectangle = styled.div`
    background-color: ${({theme}) => theme.colors.woodsmokeLight};
    height: 950px;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const MiddleHeader = styled.h2`
    font-weight: bold;
    font-size: 64px;
    line-height: 75px;
    letter-spacing: 0.05em;
    color: ${({theme}) => theme.colors.white};
    height: 100px;
`;

export const SubHeader = styled.h3`
    font-weight: normal;
    font-size: 48px;
    color: ${({theme}) => theme.colors.white};
`;

export const WrapperInfo = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
`;

export const List = styled.ul`
    color: ${({theme}) => theme.colors.white};
    font-size: 32px;
`;

export const ListItem = styled.li`
    padding: 10px;
`;

export const Button = styled.button`
    padding: 20px;
    margin: 20px;
    border-radius: 15px;
    border: none;
    font-size: 32px;
    color: ${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.jade};
`;