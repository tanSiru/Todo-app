import { useState } from 'react'
import Modal from '../Modal/Modal';
import { Check, Content, Empty, Item, List, Text, Wrapper } from './TodoItem.styles'

type Props = {
    task:string;
    details:any;
    handleDelete:Function;
    changeFocus:Function
}

export default function TodoItem({task,details,handleDelete, changeFocus}:Props) {
    const [isOpen,setIsOpen] = useState(false);
    const [isDone,setIsDone] = useState(false);

    function onClose(){
        setIsOpen(false);
    }

    function onChange(){
        setIsDone(!isDone);
        handleDelete(task)
    }

    function handleClick(){
        setIsOpen(true)
        changeFocus(task)
    }


    return (
    <Wrapper>
        <Content>
            <Text onClick={handleClick}>
                {task}
            </Text>
            <Check onClick={onChange}>
                {isDone && <div>X</div>}
            </Check>
            <Modal open={isOpen} onClose={onClose}>
                More details:
                <List>
                    {details.map((detail:any,index:any)=><Item key={index}>{detail}</Item>)}
                    {details.length === 0 && <Empty>Currently no details are recorded!</Empty>}
                </List>
            </Modal>
        </Content>
    </Wrapper>
    )
}
