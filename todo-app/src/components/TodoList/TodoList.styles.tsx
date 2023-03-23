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

export const Reset = styled.button`
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

export const Empty = styled.div`
    width:100%;
    height:100px;
    color:black;
    font-size:28px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Form = styled.form`
    width:500px;
    height:300px;
    align-self: center;
`;


export const Submit = styled.input.attrs({type:"submit"})`
    height:25px;
    width:80px;
    border-radius: 15px;
    border: 1px solid black;
    margin-left: auto;
    margin-right: 10px;
    `;


export const Limit = styled.div`
    font-size: 20px;
    font-weight: bold;
    color:red;
`;

export const NewTask = styled.textarea`
    width:500px;
    height:50px;
    font-size:30px;
    :focus{
        outline:none;
    }
    `;
