import './App.module.css'
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { TasksHeader } from './components/TasksHeader'
import styles from './App.module.css';
import './global.css'
import { useState } from 'react';
import { EmptyList } from './components/List/EmptyList'
import { Task } from './components/List/Task'

export interface TaskItem {
  id: number;
  description: string;
  isChecked: boolean;
}

function App() {
  const mockedTasks: TaskItem[] = [
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
  const [tasksList, setTasksList] = useState(mockedTasks);

  const [createdTasks, setCreatedTasks] = useState(tasksList.length);

  const checkedTasks = tasksList.filter(task => task.isChecked).length;

  function newTask(taskContent: string) {
    const taskToAdd: TaskItem = {
      id: tasksList.length +1,
      description: taskContent,
      isChecked: false,
    }
    setTasksList(
      [
        ...tasksList, 
        taskToAdd
      ])

      setCreatedTasks(createdTasks + 1);
  }

  function deleteTask(id: number) {
    const tasksListWithoutDeletedOne = tasksList.filter(task => {
      return task.id !== id;
    })

    setTasksList(tasksListWithoutDeletedOne)
  }

  function toggleTask(id: number, isChecked: boolean) {    
    const tasksListWithNewCheckState = tasksList.map((task) => {
      if(task.id === id) {
        return { ...task, isChecked }
      }

      return { ...task };
    })

    setTasksList(tasksListWithNewCheckState);
  }

  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <NewTask onCreateNewTask={newTask} />
        </div>

        <div className={styles.tasksList}>
            <TasksHeader createdTasksAmount={createdTasks} checkedTasksAmount={checkedTasks} />

            <div>
              {
                tasksList.length === 0 
                ? <EmptyList /> 
                : tasksList.map(task => (
                  <Task 
                    key={task.id} 
                    id={task.id} 
                    description={task.description} 
                    isChecked={task.isChecked}
                    onDeleteTask={deleteTask}
                    onToggleTask={toggleTask}
                  />
                ))}
            </div>
        </div>
      </section>
    </main>
  )
}

export default App
