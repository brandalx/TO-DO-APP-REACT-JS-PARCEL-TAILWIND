import Card from './components/Card'
import Header from './components/Header'
import Main from './components/Main'
import Task from './components/Task'
import Footer_active from './components/Footer_active'
import { useState } from 'react'

export function App() {
  const [taskList, setTaskList] = useState([])
  const [completedtaskList, setcompletedTaskList] = useState([])

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
        <Footer_active activecount={completedtaskList.length} totalcount={taskList.length} />
        {/* <Footer_default /> */}
      </Card>
    </>
  )
}
