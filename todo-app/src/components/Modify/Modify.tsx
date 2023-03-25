import { Content, Wrapper, Add, Refresh } from './Modify.styles'

export default function Modify({children}:any) {
    return (
    <Wrapper>
        <Content>
            {children}
        </Content>
    </Wrapper>
    )
}
