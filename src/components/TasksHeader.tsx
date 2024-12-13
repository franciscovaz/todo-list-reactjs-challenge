import styles from './TasksHeader.module.css';

export function TasksHeader() {
    return (
        <header className={styles.container}>
            <section>
                <p>Tarefas criadas</p>
                <span>0</span>
            </section>

            <section>
                <p>Tarefas concluidas</p>
                <span>0</span>
            </section>
        </header>
    )
}