import styled from 'styled-components';

type Props = {
    limit:boolean;
}

export const Wrapper = styled.div`
    width: 100%;
    height: 85px;
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
    align-items: center;
`;

export const TitleText = styled.div`
    color:black;
    font-size:30px;
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

