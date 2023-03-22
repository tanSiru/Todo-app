import Title from '../Title/Title'
import TodoItem from '../TodoItem/TodoItem'
import TodoList from '../TodoList/TodoList'
import { Content, Wrapper } from './Todo.styles'

export default function Todo() {
  return (
    <Wrapper>
        <Content>
            <Title/>
            <TodoList/>
        </Content>
    </Wrapper>
  )
}
