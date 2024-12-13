import './App.module.css'
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { Tasks } from './components/Tasks'
import { TasksHeader } from './components/TasksHeader'
import styles from './App.module.css';
import './global.css'

function App() {
  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <NewTask />
        </div>

        <div className={styles.tasksList}>
            <TasksHeader/>

            <Tasks />
        </div>
      </section>
    </main>
  )
}

export default App
