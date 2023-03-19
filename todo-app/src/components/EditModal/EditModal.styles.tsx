import styled from 'styled-components';

type Props = {
    limit:boolean;
}

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, .5);
    z-index: 1000;
`

export const Content = styled.div`
    position: fixed;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    background-color: white;
    padding:50px;
    z-index:1000; 
    color:black;
    display:flex;
    flex-direction: column;
    border-radius: 15px;
    width:600px;
    height:350px;
    border:1px solid black;
    font-weight: bold;
    font-size: 32px;
    `

export const Button = styled.button`
    margin-top: -25px;;
    margin-left: -25px;
    width:30px;
    height:30px;
    position: absolute;
    color:black;
    font-size: 16px;
    border-radius: 9999px;
    :hover{
        background: rgba(255, 255, 255, .25) 
    }
    justify-items: center;
    align-items:center;
`

export const Form = styled.form`
    width:500px;
    height:300px;
    align-self: center;
`;

export const NewTitle = styled.textarea<Props>`
    width:500px;
    height:150px;
    border:${props=>props.limit ? "1px solid red" : "1px solid black"};
    font-size:20px;
    :focus{
        outline:none;
    }
    `;

export const Limit = styled.div`
    font-size: 20px;
    font-weight: bold;
    color:red;
`;

export const Submit = styled.input.attrs({type:"submit"})`
    height:25px;
    width:80px;
    border-radius: 15px;
    border: 1px solid black;
    margin-left: auto;
    margin-right: 10px;
    `;

