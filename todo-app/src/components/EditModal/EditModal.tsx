import {createPortal} from "react-dom";
import { Button, Content, Form, Limit, NewTitle, Submit, Wrapper } from "./EditModal.styles";

export default function Modal({ open, handleChange, onClose, text, limit, onSubmit }:any) {

    if (!open) return null

    const check = text.length === limit ? true : false;


    return createPortal(
        
    <>
        <Wrapper onClick={onClose}/>
        <Content>
            <Button onClick={onClose}>X</Button>
            What would you like to change the title to?

            <Form onSubmit={onSubmit}>
                <NewTitle  limit={check} value={text} onChange={handleChange}/>
                {check && <Limit>Max limit is 30 chars!</Limit>}
                <Submit/>
            </Form>
        </Content>
    </>,
    document.getElementById('modal')!
    )
}