import styled from 'styled-components';

export const Wrapper = styled.div`
    width:100%;
    height: 75px;
    
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    :hover{
        background-color: #f3f3fe;
    }
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Text = styled.div`
    color:black;
    font-weight: bold;
    font-size: 24px;
    margin-left: 5px;
`;

export const Check = styled.div`
    width:50px;
    height:50px;
    background-color: red;
    margin-left: auto;
    margin-right: 10px;
`;