import TodoItem from '../TodoItem/TodoItem'
import { Content, Refresh, Wrapper } from './TodoList.styles'
import {useState} from 'react';
var randomSentence = require('random-sentence');

var data = [
    {"task":randomSentence({min: 1, max: 3}),
    "details":[
        randomSentence({min: 1, max: 3}),
        randomSentence({min: 3, max: 8}),
        randomSentence({min: 3, max: 8})
    ]
    ,
    "completetion":false
    },
    {"task":randomSentence({min: 1, max: 3}),
    "details":[
        randomSentence({min: 1, max: 3}),
        randomSentence({min: 3, max: 8}),
        randomSentence({min: 3, max: 8})
    ]
    ,
    "completetion":false
    },
    {"task":randomSentence({min: 1, max: 3}),
    "details":[
        randomSentence({min: 1, max: 3}),
        randomSentence({min: 3, max: 8}),
        randomSentence({min: 3, max: 8})
    ]
    ,
    "completetion":false
    },
    {"task":randomSentence({min: 1, max: 3}),
    "details":[
        randomSentence({min: 1, max: 3}),
        randomSentence({min: 3, max: 8}),
        randomSentence({min: 3, max: 8})
    ]
    ,
    "completetion":false
    },
    {"task":randomSentence({min: 1, max: 3}),
    "details":[
        randomSentence({min: 1, max: 3}),
        randomSentence({min: 3, max: 8}),
        randomSentence({min: 3, max: 8})
    ]
    ,
    "completetion":false
    },
    {"task":randomSentence({min: 1, max: 3}),
    "details":[
        randomSentence({min: 1, max: 3}),
        randomSentence({min: 3, max: 8}),
        randomSentence({min: 3, max: 8})
    ]
    ,
    "completetion":false
    },
    {"task":randomSentence({min: 1, max: 3}),
    "details":[
        randomSentence({min: 1, max: 3}),
        randomSentence({min: 3, max: 8}),
        randomSentence({min: 3, max: 8})
    ]
    ,
    "completetion":false
    },
    {"task":randomSentence({min: 1, max: 3}),
    "details":[
        randomSentence({min: 1, max: 3}),
        randomSentence({min: 3, max: 8}),
        randomSentence({min: 3, max: 8})
    ]
    ,
    "completetion":false
    },
    {"task":randomSentence({min: 1, max: 3}),
    "details":[
        randomSentence({min: 1, max: 3}),
        randomSentence({min: 3, max: 8}),
        randomSentence({min: 3, max: 8})
    ]
    ,
    "completetion":false
    },
    {"task":randomSentence({min: 1, max: 3}),
    "details":[
        randomSentence({min: 1, max: 3}),
        randomSentence({min: 3, max: 8}),
        randomSentence({min: 3, max: 8})
    ]
    ,
    "completetion":false
    },
    {"task":randomSentence({min: 1, max: 3}),
    "details":[
        randomSentence({min: 1, max: 3}),
        randomSentence({min: 3, max: 8}),
        randomSentence({min: 3, max: 8})
    ]
    ,
    "completetion":false
    },
    {"task":randomSentence({min: 1, max: 3}),
    "details":[
        randomSentence({min: 1, max: 3}),
        randomSentence({min: 3, max: 8}),
        randomSentence({min: 3, max: 8})
    ]
    ,
    "completetion":false
    },

]

export default function TodoList() {
    const [tasks,setTasks] = useState(data)


    function timeout(delay: number) {
        return new Promise( res => setTimeout(res, delay) );
    }

    async function handleDelete(key:any){
        let temp = tasks.filter((task, _) => task.task !== key)
        await timeout(1000) 
        setTasks(temp)
    }

    function doRefresh(){
        setTasks(data)
    }

    return (
    <Wrapper>
        <Content>
            {tasks.map((task,_)=><TodoItem key={task.task} task={task.task} details={task.details} handleDelete={handleDelete} />)}
        </Content>
    </Wrapper>
    )
}
