import ReactDOM from "react-dom";
import { Button, Content, Wrapper } from "./EditModal.styles";

export default function Modal({ open, children, onClose }:any) {
    if (!open) return null


    return ReactDOM.createPortal(
        
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