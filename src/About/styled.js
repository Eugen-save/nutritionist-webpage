import styled from "styled-components";
import poster from "./about-img.jpg";

export const Main = styled.main`
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 110px;
    max-width: 1368px;
    margin: 0 auto;
    margin-top: 120px;
`;

export const Poster = styled.div`
    width: 640px;
    height: 853px;
    background-image: url("${poster}");
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow:  8px 8px 34px -10px rgba(24, 24, 27, 1);
`;

export const InfoWrapper = styled.div`
    background-color: ${({theme}) => theme.colors.white};
    height: 853px;
    box-shadow: 8px 8px 34px -10px rgba(24, 24, 27, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40px;
`;

export const Title = styled.h1`
    font-weight: bold;
    font-size: 50px;
    line-height: 75px;
    letter-spacing: 0.05em;
`;

export const Info = styled.p`
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 0.105em;
`;

