import styles from './TasksHeader.module.css';

interface TaskHeaderProps {
    createdTasksAmount: number;
}

export function TasksHeader( {createdTasksAmount}: TaskHeaderProps) {
    return (
        <header className={styles.container}>
            <section>
                <p>Tarefas criadas</p>
                <span>{ createdTasksAmount }</span>
            </section>

            <section>
                <p>Tarefas concluidas</p>
                <span>0</span>
            </section>
        </header>
    )
}