import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height:415px;
`;

export const Content = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    overflow-y: auto;
`;

export const Modify = styled.div`
    width:100%;
    height:80px;
    /* background-color: red; */
    display:flex;
    flex-direction: row;
    justify-content: center; 
    align-items: center;
    border:1px solid black;
`;

export const TaskList= styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    overflow-y: auto;
`;


export const Refresh = styled.button`
    width:70px;
    height:50px;
    background-color: white;
    font-weight: bold;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin-left: 20px;
    font-weight: bold;
`;

export const Add = styled.button`
    width:70px;
    height:50px;
    background-color: white;
    font-weight: bold;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    font-weight: bold;

`;