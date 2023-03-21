import { Wrapper,Content,TitleText, Edit, Form, Limit, NewTitle, Submit } from './Title.styles';
import {useState} from 'react';
import Modal from '../Modal/Modal';

export default function Title() {
    const [isOpen,setIsOpen] = useState(false);
    const [title,setTitle] = useState("Temp Title");

    const[text,setText] = useState("")

    const limit = 20;
    const check = text.length === limit ? true : false;

    function handleChange(event:any) {
        setText(event.target.value.slice(0, limit))
        console.log(text.length)
    }

    function onClose(){
        setIsOpen(false);
        setText("")
    }

    function onSubmit(event:any){
        event.preventDefault()
        setTitle(text)
        setIsOpen(false);
    }
    

    return (
    <Wrapper>
        <Content>

            <TitleText>
                {title}
            </TitleText>

            <Edit onClick={() => setIsOpen(true)}>
                Edit
            </Edit>

            
        </Content>
        <Modal open={isOpen} onClose={onClose} handleChange={handleChange} text={text} limit={limit} onSubmit={onSubmit}>
            What would you like to change the title to?

            <Form onSubmit={onSubmit}>
                <NewTitle  limit={check} value={text} onChange={handleChange}/>
                {check && <Limit>Max limit is {limit} chars!</Limit>}
                <Submit/>
            </Form>
        </Modal>
            
            
    </Wrapper>
    )
}
