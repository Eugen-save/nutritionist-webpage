import styled from "styled-components";
import poster2 from "./poster2.jpg";

export const Section = styled.section`
    max-width: 1368px;
    max-height: 900px;
    margin: 0 auto;
    margin-top: 120px;
`;

export const Wrapper = styled.div`
    display: grid;
    align-items: start;
    grid-template-columns: 467px 467px;
    justify-content: center;
    gap: 40px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    border: 4px solid #fff;
    width: 400px;
    height: 600px;
    padding: 20px;
    flex-wrap: nowrap;
    gap: 20px;
    background-color: rgba(255,255,255,0.5);
`;

export const Input = styled.input`
    border: none;
    border-bottom: 2px solid ${({theme}) => theme.colors.woodsmoke};
    background: none;
    padding: 20px;
    color: ${({theme}) => theme.colors.woodsmoke};


    }
`;

export const Textarea = styled.textarea`
    border: none;
    border-bottom: 2px solid ${({theme}) => theme.colors.woodsmoke};
    resize: vertical;
    background: none;
`;

export const Submit = styled.input`
    border: none;
    border-radius: 15px;
    padding: 10px;
    background: ${({theme}) => theme.colors.jade};
    align-items: center;
    color: ${({theme}) => theme.colors.white};
    padding: 20px;
    font-size: 20px;
    width: 200px;
`;

export const SectionHeader = styled.h2`
    font-size: 64px;
    line-height: 75px;
    letter-spacing: 0.05em;
    text-align: center;
    color: ${({theme}) => theme.colors.white};
`;

export const SubHeader = styled.h3`
    font-size: 40px;
    text-align: center;
    color: ${({theme}) => theme.colors.white};
`;

export const LinksWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 10px;
    align-items: center;
    justify-content: center;
`;

export const Links = styled.a`
    font-size: 24px;
    color: ${({theme}) => theme.colors.white};
    padding: 10px;
    cursor: pointer;
    border-radius: 15px;
    transition: all .8s;
`;

export const PosterContacts = styled.div`
    width: 467px;
    height: 700px;
    background-image: url("${poster2}");
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow:  8px 8px 34px -10px rgba(24, 24, 27, 1);
`;

export const FormWrapper = styled.div`
    display: grid;
    grid-template-rows: 600px auto;
    gap: 20px;
    justify-content: center;
`;