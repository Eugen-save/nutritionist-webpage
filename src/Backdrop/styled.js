import styled from "styled-components";
import background from "./brain-food.jpeg";
import backgroundMobile from "./backdropMobile.jpeg";

export const BackdropContainer = styled.div`
    margin: 0 auto;
`;

export const BackdropPoster = styled.div`
    background-image: url("${background}");
    background-repeat: no-repeat;
    background-size: cover;
    height: 797px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        height: 500px;
        background-image: url("${backgroundMobile}");
  }
`;

export const BackdropHeader = styled.header`
    display: flex;
    align-items: center;
    height: 797px;
`;

export const BackdropTitle = styled.h1`
    margin: 0;
    color: ${({theme}) => theme.colors.white};
    font-style: normal;
    font-weight: normal;
    font-size: 60px;
    line-height: 84px;
    text-align: center;
    width: 800px;
    flex-wrap: wrap;
`;