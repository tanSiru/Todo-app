import { useState } from 'react'
import Modal from '../Modal/Modal';
import { Check, Content, Item, List, Text, Wrapper } from './TodoItem.styles'

export default function TodoItem() {
    const [isOpen,setIsOpen] = useState(false);
    const [isDone,setIsDone] = useState(false);



    function onClose(){
        setIsOpen(false);
    }


    return (
    <Wrapper>
        <Content>
            <Text onClick={() => setIsOpen(true)}>
                Homework
            </Text>
            <Check onClick={()=>setIsDone(!isDone)}>
                {isDone && <div>X</div>}
            </Check>
            <Modal open={isOpen} onClose={onClose}>
                More details:
                <List>
                    <Item>
                        sasdasdasdas
                    </Item>
                    <Item>
                        sasdasdasdas
                    </Item> <Item>
                        sasdasdasdas
                    </Item>
                    <Item>
                        sasdasdasdas
                    </Item>
                    <Item>
                        sasdasdasdas
                    </Item>
                    <Item>
                        sasdasdasdas
                    </Item> <Item>
                        sasdasdasdas
                    </Item>
                    <Item>
                        sasdasdasdas
                    </Item>
                    <Item>
                        sasdasdasdas
                    </Item>
                    <Item>
                        sasdasdasdas
                    </Item> <Item>
                        sasdasdasdas
                    </Item>
                    <Item>
                        sasdasdasdas
                    </Item>
                </List>
            </Modal>
        </Content>
    </Wrapper>
    )
}
