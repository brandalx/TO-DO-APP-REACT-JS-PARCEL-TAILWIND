import Card from './components/Card'
import Header from './components/Header'
import Main from './components/Main'
import Task from './components/Task'
import Footer_active from './components/Footer_active'
import { useEffect, useState } from 'react'

export function App() {
  const [taskList, setTaskList] = useState([])
  //option #1 for local storage call
  // const [taskList, setTaskList] = useState( () => JSON.parse(window.localStorage.getItem('taskList')) )

  //option #2 useEffect Hook
  useEffect(() => {
    //#option one (short)
    // setTaskList(JSON.parse(window.localStorage.getItem('taskList')))

    // option two
    if (localStorage.getItem('taskList') == null) {
      console.log('local storage is empry')
    } else {
      const taskListString = window.localStorage.getItem('taskList')
      const taskList = JSON.parse(taskListString)
      setTaskList(taskList)
    }
  }, [])

  const [completedtaskList, setcompletedTaskList] = useState([])

  const doSubmit = (task) => {
    setTaskList([...taskList, task])
    const newTaskList = [...taskList, task]
    setTaskList(newTaskList)
    window.localStorage.setItem('taskList', JSON.stringify(newTaskList))
  }

  const handleCompleted = (task) => {
    if (completedtaskList.includes(task)) {
      setcompletedTaskList(completedtaskList.filter((tasks) => tasks !== task))
    } else {
      setcompletedTaskList([...completedtaskList, task])
    }
  }

  const handleDelete = (task) => {
    setTaskList(taskList.filter((t) => t !== task))
    // const taskListString = window.localStorage.getItem('taskList')

    let parsed = JSON.parse(window.localStorage.getItem('taskList'))
    let indexToDel = parsed.findIndex((t) => t == task)
    let final = parsed.slice((indexToDel, +1))
    window.localStorage.setItem('taskList', JSON.stringify(final))
  }

  return (
    <>
      <Card>
        <Header onSubmit={doSubmit} />
        <Main>
          {taskList.map((task, index) => (
            <Task
              key={index}
              name={task}
              index={index + 1}
              onCompleted={handleCompleted}
              completed={completedtaskList.includes(task)}
              onDelete={handleDelete}
            />
          ))}
        </Main>
        <Footer_active activecount={completedtaskList.length} totalcount={taskList.length} />
        {/* <Footer_default /> */}
      </Card>
    </>
  )
}
