import Card from './components/Card'
import Header from './components/Header'
import Main from './components/Main'
import Task from './components/Task'
import Footer_active from './components/Footer_active'
import { useState } from 'react'
// import Footer_default from './components/Footer_default'

export function App() {
  const [taskList, setTaskList] = useState(['test1', 'test2'])
  const [completedtaskList, setcompletedTaskList] = useState([])

  // setTaskList([...taskList, taskName])
  const doSubmit = (task) => {
    setTaskList([...taskList, task])
  }

  const handleCompleted = (task) => {
    if (completedtaskList.includes(task)) {
      setcompletedTaskList(completedtaskList.filter((tasks) => tasks !== task))
    } else {
      setcompletedTaskList([...completedtaskList, task])
    }
  }
  return (
    <>
      <Card>
        <Header onSubmit={doSubmit} />
        <Main>
          {/* <div>{JSON.stringify(taskList)}</div> */}
          {taskList.map((task, index) => (
            <Task
              key={index}
              name={task}
              index={index + 1}
              onCompleted={handleCompleted}
              completed={completedtaskList.includes(task)}
            />
          ))}
        </Main>
        <div>length is {completedtaskList.length}</div>
        <div>items is {JSON.stringify(taskList)}</div>
        <Footer_active />
        {/* <Footer_default /> */}
      </Card>
    </>
  )
}
