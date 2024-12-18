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
  const [tasks, setTasks] = useState<TaskItem[]>([]);

  const [createdTasks, setCreatedTasks] = useState(tasks.length);

  const checkedTasks = tasks.filter(task => task.isChecked).length;

  function newTask(taskContent: string) {
    const taskToAdd: TaskItem = {
      id: tasks.length +1,
      description: taskContent,
      isChecked: false,
    }
    setTasks(
      [
        ...tasks, 
        taskToAdd
      ])

      setCreatedTasks(createdTasks + 1);
  }

  function deleteTask(id: number) {
    const tasksListWithoutDeletedOne = tasks.filter(task => {
      return task.id !== id;
    })

    setTasks(tasksListWithoutDeletedOne)
  }

  function toggleTask(id: number, isChecked: boolean) {    
    const tasksListWithNewCheckState = tasks.map((task) => {
      if(task.id === id) {
        return { ...task, isChecked }
      }

      return { ...task };
    })

    setTasks(tasksListWithNewCheckState);
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
                tasks.length === 0 
                ? <EmptyList /> 
                : tasks.map(task => (
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
