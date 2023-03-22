import styled from 'styled-components';

export const Wrapper = styled.div`
    width:100%;
    height: 75px;
    flex-shrink: 0;
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
    background-color: white;
    font-weight: bold;
    font-size: 24px;
    margin-left: 5px;
`;

export const Check = styled.div`
    width:30px;
    height:30px;
    background-color: white;
    margin-left: auto;
    margin-right: 15px;
    font-size: 34px;
    border:1px solid black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const List =  styled.ul`
    overflow-y: auto;
`;

export const Item = styled.li``;
