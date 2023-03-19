import { Wrapper,Content,TitleText, Edit } from './Title.styles';
import {useState} from 'react';
import Modal from '../EditModal/EditModal';

export default function Title() {
    const [isOpen,setIsOpen] = useState(false);
    const [title,setTitle] = useState("Temp Title");

    const[text,setText] = useState("")

    const limit = 30;

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
        <Modal open={isOpen} onClose={onClose} handleChange={handleChange} text={text} limit={limit} onSubmit={onSubmit}/>
            
            
    </Wrapper>
    )
}
