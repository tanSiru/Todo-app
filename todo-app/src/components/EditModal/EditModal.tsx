import {createPortal} from "react-dom";
import { Button, Content, Wrapper} from "./EditModal.styles";

export default function Modal({ open, children, onClose }:any) {

    if (!open) return null



    return createPortal(
        
    <>
        <Wrapper onClick={onClose}/>
        <Content>
            <Button onClick={onClose}>X</Button>
            What would you like to change the title to?

            {children}
        </Content>
    </>,
    document.getElementById('modal')!
    )
}