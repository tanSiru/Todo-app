import TodoItem from '../TodoItem/TodoItem'
import { Add, Content, Empty, Modify, Refresh, Reset, TaskList, Wrapper, Form, Submit, Limit,  NewTask, Detail, AddDetail, List, Item} from './TodoList.styles'
import {useState} from 'react';
import Modal from '../Modal/Modal';
import ModifyTask from '../Modify/Modify'
var randomSentence = require('random-sentence')

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
    const[detail,setDetail] = useState("");
    const[details,setDetails] = useState<string[]>([]);
    const [focus,setFocus] = useState("");
    



    const limit = 20;
    const check = text.length === limit ? true : false;
    const check1 = detail.length === limit ? true : false;
    const final = check || check1;



    function handleChange(event:any) {
        setText(event.target.value.slice(0, limit))
    }

    function handleDetail(event:any) {
        setDetail(event.target.value.slice(0, limit))
    }

    function handleAddDetail(e:any){
        setDetails(details => [...details,detail])
        setDetail("")
        console.log(details)
        e.preventDefault();
    }

    function onClose(){
        setIsOpen(false);
    }

    function onSubmit(event:any){
        event.preventDefault()
        let temp =  {
            "task":text,
            "details":details,
        "completetion":false
    }
        data.push(temp);
        setIsOpen(false);
        doRefresh();
        setText("")
        setDetail("")
        setDetails([])
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

    function changeFocus(task:string){
        setFocus(task)
    }

        

    return (
        <>
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
                {tasks.map((task,_)=><TodoItem key={task.task} task={task.task} details={task.details} handleDelete={handleDelete} changeFocus={changeFocus}/>)}
                {tasks.length === 0 && <Empty>Currently no tasks are recorded!</Empty>}
            </TaskList>
            <Modal open={isOpen} onClose={onClose} handleChange={handleChange}  limit={limit} onSubmit={onSubmit}>
            What would you like to change the title to?

                <Form onSubmit={onSubmit}>
                    New Task:
                    <NewTask limit={final} value={text} onChange={handleChange} required/>

                    Detail 
                    <Detail limit={final} value={detail} onChange={handleDetail}/>
                    {final && <Limit>Max limit is {limit} chars!</Limit>}

                    <AddDetail onClick={handleAddDetail}>
                        Add Detail
                    </AddDetail>
                    <Submit/>
                </Form>
                <List>
                    Details
                    {details.map((detail:any,index:any)=><Item key={index}>{detail}</Item>)}
                    {details.length === 0 && <Empty>Currently no details are recorded!</Empty>}
                </List>
        </Modal>

        </Content>
        <ModifyTask>
            NPC
        </ModifyTask>

    </Wrapper>

    </>
    )
}
