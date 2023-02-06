import Card from './components/Card'
import Header from './components/Header'
import Main from './components/Main'
import Task from './components/Task'
import Footer_active from './components/Footer_active'
import { useState } from 'react'
// import Footer_default from './components/Footer_default'

export function App() {
  const [taskList, setTaskList] = useState(['test1', 'test2'])
  // setTaskList([...taskList, taskName])
  const doSubmit = (task) => {
    setTaskList([...taskList, task])
  }

  return (
    <>
      <Card>
        <Header onSubmit={doSubmit} />
        <Main>
          {/* <div>{JSON.stringify(taskList)}</div> */}
          {taskList.map((task, index) => (
            <Task key={index} name={task} index={index + 1} />
          ))}
        </Main>
        <Footer_active />
        {/* <Footer_default /> */}
      </Card>
    </>
  )
}
