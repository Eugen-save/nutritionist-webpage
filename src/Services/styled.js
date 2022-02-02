import styled, {css} from "styled-components";

export const Section = styled.section`
    max-width: 1368px;
    max-height: 900px;
    margin: 0 auto;
    margin-top: 120px;
    display: grid;
    justify-content: space-around;
    align-items: start;
    gap: 20px;
    padding: 20px;
    grid-template-areas: "head head"
                        "section1 section2";
`;

export const SectionHeader = styled.h2`
    font-size: 64px;
    line-height: 75px;
    letter-spacing: 0.05em;
    grid-area: head;
    margin: 0;
    text-align: center;
`;

export const SectionItem = styled.div`
    grid-area: section1;
    background-color: ${({theme}) => theme.colors.white};
    box-shadow: 8px 8px 34px -10px rgba(24, 24, 27, 1);
    padding: 20px;

    ${({section2}) =>
        section2 && css`
            grid-area: section2;
    `}
`;

export const SubHeader = styled.h3`
    color: ${({theme}) => theme.colors.jade};
    text-align: center;
    font-size: 32px;
`;

export const Description = styled.div`
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 0.105em;
    font-weight: 300;
`;

export const List = styled.ul`
    font-size: 24px;
    list-style-type: none;
`;

export const ListItem = styled.li`
    padding: 10px;
`;