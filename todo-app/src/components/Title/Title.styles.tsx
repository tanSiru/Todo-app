import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 55px;
    border-radius: inherit;
`;

export const Content = styled.div`
    border-radius: inherit;
    width: 100%;
    height:100%;
    :hover{
        background-color: #f3f3fe;
    }
    display:flex;
    flex-direction: row;
    /* justify-content: center; */
    align-items: center;
`;

export const TitleText = styled.div`
    color:black;
    font-size:24px;
    font-weight:bold;
    margin-left: 5px;
`;



export const Edit = styled.button`
    height:25px;
    width:80px;
    border-radius: 15px;
    border: 1px solid black;
    margin-left: auto;
    margin-right: 10px;
`