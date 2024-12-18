import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './NewTask.module.css';
import { PlusCircle } from 'phosphor-react';

interface NewTaskProps {
    onCreateNewTask: (content: string) => void;
}

export function NewTask({onCreateNewTask}: NewTaskProps) {
    const [taskContent, setTaskContent] = useState('');

    function handleNewTaskContentChange(event: ChangeEvent<HTMLInputElement>) {
        setTaskContent(event.target.value);
    }

    function handleCreateNewTaskContent(event: FormEvent){
        event.preventDefault();
        onCreateNewTask(taskContent);
        setTaskContent('');
    }

    return (
        <form onSubmit={handleCreateNewTaskContent}>
            <section className={styles.container}>
                <input 
                    type="text" 
                    value={taskContent}
                    onChange={handleNewTaskContentChange}
                    placeholder='Add new task'
                    required/>
                <button>
                    Create
                    <PlusCircle />
                </button>
            </section>
        </form>
    )
}