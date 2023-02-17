import Card from './components/Card'
import Header from './components/Header'
import Main from './components/Main'
import Task from './components/Task'
import Footer_active from './components/Footer_active'
import { useEffect, useState } from 'react'

export function App() {
  const [taskList, setTaskList] = useState([])

  const handleCompleted = (task) => {
    const newTaskList = completedtaskList.includes(task)
      ? completedtaskList.filter((tasks) => tasks !== task)
      : [...completedtaskList, task]
    setcompletedTaskList(newTaskList)
    window.localStorage.setItem('completedTask', JSON.stringify(newTaskList))
  }

  useEffect(() => {
    const taskListString = window.localStorage.getItem('taskList')
    if (taskListString) {
      const taskList = JSON.parse(taskListString)
      setTaskList(taskList)
    }
    const completedTaskListString = window.localStorage.getItem('completedTask')
    if (completedTaskListString) {
      const taskList = JSON.parse(completedTaskListString)
      setcompletedTaskList(taskList)
    }
  }, [])

  const [completedtaskList, setcompletedTaskList] = useState([])

  const doSubmit = (task) => {
    const newTaskList = [...taskList, task]
    setTaskList(newTaskList)
    window.localStorage.setItem('taskList', JSON.stringify(newTaskList))
  }

  const handleDelete = (task) => {
    const newTaskList = taskList.filter((t) => t !== task)
    setTaskList(newTaskList)
    window.localStorage.setItem('taskList', JSON.stringify(newTaskList))
    const newCompTaskList = completedtaskList.filter((t) => t !== task)

    window.localStorage.setItem('completedTask', JSON.stringify(newCompTaskList))
    setcompletedTaskList(newCompTaskList)
  }

  return (
    <>
      <Card>
        <Header onSubmit={doSubmit} />
        <Main>
          {taskList.map((task, index) => {
            return (
              <Task
                key={index}
                name={task}
                index={index}
                onCompleted={handleCompleted}
                completed={completedtaskList.includes(task)}
                onDelete={handleDelete}
              />
            )
          })}
        </Main>
        <Footer_active activecount={completedtaskList.length} totalcount={taskList.length} />
        {/* <Footer_default /> */}
      </Card>
    </>
  )
}
