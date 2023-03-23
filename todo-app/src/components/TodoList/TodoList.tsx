import TodoItem from '../TodoItem/TodoItem'
import { Add, Content, Empty, Modify, Refresh, Reset, TaskList, Wrapper, Form, Submit, Limit,  NewTask, Detail} from './TodoList.styles'
import {useState} from 'react';
import Modal from '../Modal/Modal';
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
    const [isOpen,setIsOpen] = useState(false);
    const[text,setText] = useState("");
    const[detail1,setdDetail1] = useState("");
    const[detail2,setdDetail2] = useState("");
    const[detail3,setdDetail3] = useState("");


    const limit = 20;
    const check = text.length === limit ? true : false;
    const check1 = detail1.length === limit ? true : false;
    const check2 = detail2.length === limit ? true : false;
    const check3 = detail3.length === limit ? true : false;

    const final = check || check1 || check2 || check3;


    function handleChange(event:any) {
        setText(event.target.value.slice(0, limit))
    }

    function handleDetail1(event:any) {
        setdDetail1(event.target.value.slice(0, limit))
    }

    function handleDetail2(event:any) {
        setdDetail2(event.target.value.slice(0, limit))
    }

    function handleDetail3(event:any) {
        setdDetail3(event.target.value.slice(0, limit))
    }



    function onClose(){
        setIsOpen(false);
    }

    function onSubmit(event:any){
        event.preventDefault()
        let temp =  {
            "task":text,
            "details":[
                detail1,
                detail2,
                detail3,
            ],
        "completetion":false
    }
        data.push(temp);
        setIsOpen(false);
        doRefresh();
        setText("")
        setdDetail1("")
        setdDetail2("")
        setdDetail3("")


    }

    async function handleDelete(key:any){
        data =  data.filter((task, _) => task.task !== key)
    }

    function doRefresh(){
        setTasks(data)
    }

    function doReset(){
        setTasks([])
        data = []
    }

        

    return (
    <Wrapper>
        <Content>
            <Modify>
                <Add onClick={() => setIsOpen(true)}>
                    Add Item
                </Add>
                <Refresh onClick={doRefresh}>
                    Refresh
                </Refresh>
                <Reset onClick={doReset}>
                    Reset
                </Reset>
            </Modify>
            <TaskList>
                {tasks.map((task,_)=><TodoItem key={task.task} task={task.task} details={task.details} handleDelete={handleDelete} />)}
                {tasks.length === 0 && <Empty>Currently no tasks are recorded!</Empty>}
            </TaskList>
            <Modal open={isOpen} onClose={onClose} handleChange={handleChange}  limit={limit} onSubmit={onSubmit}>
            What would you like to change the title to?

            <Form onSubmit={onSubmit}>
                New Task:
                <NewTask limit={final} value={text} onChange={handleChange} required/>

                Detail 1
                <Detail limit={final} value={detail1} onChange={handleDetail1}/>
                Detail 2
                <Detail limit={final} value={detail2} onChange={handleDetail2}/>
                Detail 3
                <Detail limit={final} value={detail3} onChange={handleDetail3}/>

                {final && <Limit>Max limit is {limit} chars!</Limit>}

                <Submit/>
            </Form>
        </Modal>
        </Content>
    </Wrapper>
    )
}
