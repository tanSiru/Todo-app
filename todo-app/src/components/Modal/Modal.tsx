import {createPortal} from "react-dom";
import { Button, Content, Wrapper} from "./Modal.styles";

export default function Modal({ open, children, onClose }:any) {

    if (!open) return null



    return createPortal(
        
    <>
        <Wrapper onClick={onClose}/>
        <Content>
            <Button onClick={onClose}>X</Button>

            {children}
        </Content>
    </>,
    document.getElementById('modal')!
    )
}