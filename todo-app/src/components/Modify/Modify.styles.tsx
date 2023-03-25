import styled from 'styled-components';

export const Wrapper = styled.div`
    width:475px;
    height:100px;
    position:absolute;
    margin-top: 20px;
`;

export const Content = styled.div`
    width:100%;
    height:100%;
    font-weight: bold;
    font-size: 28px;
    display: flex;
    flex-direction: row;
    justify-content: center; 
    border-radius: 15px;
    border:1px solid black;
    background-color: white;
`;

export const Add = styled.button`
    width:150px;
    height:100px;
    background-color: white;
    font-weight: bold;
    font-size: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
`;

export const Refresh = styled.button`
    width:150px;
    height:100px;
    background-color: white;
    font-weight: bold;
    font-size: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    margin-left: 20px;
`;