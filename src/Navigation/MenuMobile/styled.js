import styled from "styled-components";

export const MenuContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Menu = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 950px;
  list-style: none;
  background-color: ${({theme}) => theme.colors.white};
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 0px;
  left: 0;
  align-items: center;
`;

export const MenuItem = styled.li`
  padding: 5px;
  color: ${({theme}) => theme.colors.jade};
  font-weight: 500;
  font-size: 32px;
  text-align: center;
`;
