import styled from "styled-components";
import logo from "./logoWhite.png";
import background from "./brain-food.jpeg";

export const NavigationBar = styled.nav`
    width: 100%;
    height: 150px;
    top: 0;
    display: flex;
    align-items: center;
    padding: 40px;
    justify-content: space-between;
    position: absolute;
    overflow: hidden;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        padding: 10px;
        height: 50px;
  }
`;

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 30px;
`;

export const Logo = styled.img.attrs({
    src: `${logo}`
})`
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
    color: ${({theme}) => theme.colors.white};
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

export const MenuItem = styled.li`
    color: ${({theme}) => theme.colors.white};
    cursor: pointer;

    &:hover {
        color: ${({theme}) => theme.colors.salmon};
    }
`;

export const BackdropPoster = styled.div`
    background-image: url("${background}");
    background-repeat: no-repeat;
    background-size: cover;
    height: 950px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        height: 300px;
  }
`;

export const SideBackdropInfo = styled.div`
    display: flex;
    align-items: center;
    height: 950px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        align-items: flex-start;
  }
`;

export const WrapperInfo = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    width: 590px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}) {
        width: 300px;
    }
    
`;

export const List = styled.ul`
    color: ${({theme}) => theme.colors.white};
    font-size: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font-size: 16px;
  }
`;

export const ListItem = styled.li`
    padding: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        padding: 2px;
  }
`;

export const Button = styled.button`
    padding: 20px;
    margin: 20px;
    border-radius: 15px;
    border: none;
    font-size: 24px;
    color: ${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.jade};
    transition: 0.5s;

    &:hover {
        background-color: ${({theme}) => theme.colors.salmon};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        margin: 5px;
        font-size: 16px;
        padding: 10px;
  }
`;

export const SubHeader = styled.h3`
    font-weight: normal;
    font-size: 40px;
    color: ${({theme}) => theme.colors.white};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font-size: 20px;
  }
`;