import Title from '../Title/Title'
import TodoItem from '../TodoItem/TodoItem'
import { Content, Wrapper } from './Todo.styles'

export default function Todo() {
  return (
    <Wrapper>
        <Content>
            <Title/>
            <TodoItem/>
        </Content>
    </Wrapper>
  )
}
