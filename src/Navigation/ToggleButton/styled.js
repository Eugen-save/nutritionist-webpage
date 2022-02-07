import styled from "styled-components";

export const Button = styled.button`
    position: fixed;
    top: 1%;
    left: 2%;
    color: ${({theme}) => theme.colors.jade};
    background: ${({theme}) => theme.colors.white};
    border: none;
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    padding: 10px;
    display: flex;
    place-items: center;
    font-size: 2rem;
    cursor: pointer;
`;