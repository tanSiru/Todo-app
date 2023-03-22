import TodoItem from '../TodoItem/TodoItem'
import { Content, Wrapper } from './TodoList.styles'

const data = [
    {"task":"jaidjasdiajs",
    "details":[
        "ijpdjiasasdad",
        "ijijdadasd",
        "ijdasijsdasd"
    ]
    },
    {"task":"jaidjasdiajs",
    "details":[
        "ijpdjiasasdad",
        "ijijdadasd",
        "ijdasijsdasd"
    ]
    },
    {"task":"jaidjasdiajs",
    "details":[
        "ijpdjiasasdad",
        "ijijdadasd",
        "ijdasijsdasd"
    ]
    },
    {"task":"jaidjasdiajs",
    "details":[
        "ijpdjiasasdad",
        "ijijdadasd",
        "ijdasijsdasd"
    ]
    },
    {"task":"jaidjasdiajs",
    "details":[
        "ijpdjiasasdad",
        "ijijdadasd",
        "ijdasijsdasd"
    ]
    },
    {"task":"jaidjasdiajs",
    "details":[
        "ijpdjiasasdad",
        "ijijdadasd",
        "ijdasijsdasd"
    ]
    },
    {"task":"jaidjasdiajs",
    "details":[
        "ijpdjiasasdad",
        "ijijdadasd",
        "ijdasijsdasd"
    ]
    },
    {"task":"jaidjasdiajs",
    "details":[
        "ijpdjiasasdad",
        "ijijdadasd",
        "ijdasijsdasd"
    ]
    },
]

export default function TodoList() {
    return (
    <Wrapper>
        <Content>
            {data.map((task,index:any)=><TodoItem key={index} task={task.task} details={task.details}/>)}
        </Content>
    </Wrapper>
    )
}
