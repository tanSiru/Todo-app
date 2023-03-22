import { useState } from 'react'
import Modal from '../Modal/Modal';
import { Check, Content, Item, List, Text, Wrapper } from './TodoItem.styles'

type Props = {
    task:string;
    details:any;
}

export default function TodoItem({task,details}:Props) {
    const [isOpen,setIsOpen] = useState(false);
    const [isDone,setIsDone] = useState(false);



    function onClose(){
        setIsOpen(false);
    }


    return (
    <Wrapper>
        <Content>
            <Text onClick={() => setIsOpen(true)}>
                {task}
            </Text>
            <Check onClick={()=>setIsDone(!isDone)}>
                {isDone && <div>X</div>}
            </Check>
            <Modal open={isOpen} onClose={onClose}>
                More details:
                <List>
                    {details.map((detail:any,index:any)=><Item key={index}>{detail}</Item>)}
                </List>
            </Modal>
        </Content>
    </Wrapper>
    )
}
