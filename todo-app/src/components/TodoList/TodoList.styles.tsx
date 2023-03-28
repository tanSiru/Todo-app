import styled from 'styled-components';

type Props = {
    limit:boolean;
}

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
    font-size:18px;
`;


export const Submit = styled.input.attrs({type:"submit"})`
    height:35px;
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

export const NewTask = styled.textarea<Props>`
    width:500px;
    height:35px;
    font-size:20px;
    border:${props=>props.limit ? "1px solid red" : "1px solid black"};
    :focus{
        outline:none;
    }
    `;

export const Detail = styled.textarea<Props>`
    width:500px;
    height:30px;
    font-size:20px;
    border:${props=>props.limit ? "1px solid red" : "1px solid black"};
    :focus{
        outline:none;
    }
    `;

export const AddDetail = styled.button`
    width:80px;
    height:35px;
    border-radius:15px;
    border: 1px solid black;
    margin-right:10px;
`;

export const List =  styled.ul`
    overflow-y: auto;
    font-size:20px;
    width:100%;
    height:150px;
`;

export const Item = styled.li``;

export const Change = styled.input.attrs({type:"text"})`
    width:70%;
    height:100%;
    font-size:20px;
`;

export const Button = styled.button`
    width: 50px;
    height: 50px;
    background-color:red;

`;