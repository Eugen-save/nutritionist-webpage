import styled from "styled-components";
import poster from "./middle-poster.jpg";

export const MiddlePoster = styled.div`
    background-image: url("${poster}");
    background-repeat: no-repeat;
    background-size: cover;
    height: 797px;
    margin-top: 120px;
`;

export const BlackRectangle = styled.div`
    background-color: ${({theme}) => theme.colors.woodsmokeLight};
    height: 797px;
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
    align-self: center;
`;