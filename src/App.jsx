import Card from './components/Card'
import Header from './components/Header'
import Body from './components/Body'
import Task from './components/Task'
import Footer_active from './components/Footer_active'
import Footer_default from './components/Footer_default'
export function App() {
  return (
    <Card>
      <Header />
      <Body>
        <Task />
      </Body>
      <Footer_active />
      <Footer_default />
    </Card>
  )
}
