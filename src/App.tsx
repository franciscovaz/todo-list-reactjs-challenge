import './App.module.css'
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { TasksList } from './components/List/TasksList'
import { TasksHeader } from './components/TasksHeader'
import styles from './App.module.css';
import './global.css'
import { useState } from 'react';
import { EmptyList } from './components/List/EmptyList'
import { Task } from './components/List/Task'

interface Task {
  id: number;
  description: string;
  isChecked: boolean;
}

function App() {
  const mockedTasks: Task[] = [
    {
      id: 1,
      description: 'Esta é a minha primeira tarefa',
      isChecked: true,
    },
    {
      id: 2,
      description: 'Esta é a minha segunda tarefa',
      isChecked: false,
    }
  ]
  const [tasksList, setTasksList] = useState([mockedTasks]);

  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <NewTask />
        </div>

        <div className={styles.tasksList}>
            <TasksHeader/>

            <div>
              { tasksList.length === 0 
                ? <EmptyList /> 
                : (
                  <>
                    <Task />
                    <Task />
                    <Task />
                  </>   
                )}
            </div>
        </div>
      </section>
    </main>
  )
}

export default App
