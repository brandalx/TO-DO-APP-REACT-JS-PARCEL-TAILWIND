import Card from './components/Card'
import Header from './components/Header'
import Main from './components/Main'
import Task from './components/Task'
import Counter from './components/Counter'
import { v4 as uuidv4 } from 'uuid'
import { useEffect, useState } from 'react'

export function App() {
  const [taskList, setTaskList] = useState([])
  const countCompletedTask = taskList.reduce((acc, value) => (value.completed ? acc + 1 : acc), 0)

  const handleCompleted = (checked, id) => {
    // const newTaskList = completedTaskList.includes(task)
    //   ? completedTaskList.filter((tasks) => tasks !== task)
    //   : [...completedTaskList, task]
    // setcompletedTaskList(newTaskList)
    // window.localStorage.setItem('completedTask', JSON.stringify(newTaskList))

    const newTaskList = taskList.map((task) => {
      if (task.id == id) {
        task.completed = checked
      }
      return task
    })
    setTaskList(newTaskList)
  }

  // useEffect(() => {
  //   const taskListString = window.localStorage.getItem('taskList')
  //   if (taskListString) {
  //     const taskList = JSON.parse(taskListString)
  //     setTaskList(taskList)
  //   }
  //   const completedTaskListString = window.localStorage.getItem('completedTask')
  //   if (completedTaskListString) {
  //     const taskList = JSON.parse(completedTaskListString)
  //     setcompletedTaskList(taskList)
  //   }
  // }, [])

  const doSubmit = (task) => {
    const newTaskItem = {
      id: uuidv4(),
      name: task,
      completed: false
    }
    const newTaskList = [...taskList, newTaskItem]
    setTaskList(newTaskList)
    // window.localStorage.setItem('taskList', JSON.stringify(newTaskList))
  }

  const handleDelete = (id) => {
    const newTaskList = taskList.filter((task) => task.id !== id)
    setTaskList(newTaskList)
    // window.localStorage.setItem('taskList', JSON.stringify(newTaskList))
    // const newCompTaskList = completedTaskList.filter((t) => t !== task)

    // window.localStorage.setItem('completedTask', JSON.stringify(newCompTaskList))
    // setcompletedTaskList(newCompTaskList)
  }

  return (
    <>
      <Card>
        <Header onSubmit={doSubmit} />
        <Main>
          {taskList.map((task, index) => {
            return (
              <Task
                key={task.id}
                name={task.name}
                index={index}
                onCompleted={(checked) => handleCompleted(checked, task.id)}
                completed={task.completed}
                onDelete={() => handleDelete(task.id)}
              />
            )
          })}
        </Main>
        <Counter activecount={countCompletedTask} totalcount={taskList.length} />
        {/* <Footer_default /> */}
      </Card>
    </>
  )
}
