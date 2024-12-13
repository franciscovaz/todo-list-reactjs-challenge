import styles from './NewTask.module.css';
import { PlusCircle } from 'phosphor-react';

export function NewTask() {
    return (
        <section className={styles.container}>
            <input 
                type="text" 
                placeholder='Adicione uma nova tarefa'/>
            <button>
                Criar
                <PlusCircle />
            </button>
        </section>
    )
}