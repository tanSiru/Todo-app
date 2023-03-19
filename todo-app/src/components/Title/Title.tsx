import { Wrapper,Content,TitleText, Edit } from './Title.styles';
import {useState} from 'react';
import Modal from '../EditModal/EditModal';

export default function Title() {
    const [isOpen,setIsOpen] = useState(false);

    return (
    <Wrapper>
        <Content>

            <TitleText>
                Temp Title
            </TitleText>

            <Edit onClick={() => setIsOpen(true)}>
                Edit
            </Edit>

            
        </Content>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            Fancy Modal
        </Modal>
            
    </Wrapper>
    )
}
