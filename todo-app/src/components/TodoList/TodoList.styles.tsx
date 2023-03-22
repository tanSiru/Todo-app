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
    border:1px solid black;
`;