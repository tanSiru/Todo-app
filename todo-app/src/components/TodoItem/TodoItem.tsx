import React from 'react'
import { Check, Content, Text, Wrapper } from './TodoItem.styles'

export default function TodoItem() {
    return (
    <Wrapper>
        <Content>
            <Text>
                Homework
            </Text>
            <Check/>
        </Content>
    </Wrapper>
    )
}
