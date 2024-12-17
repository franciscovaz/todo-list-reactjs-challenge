import styles from './TasksHeader.module.css';

interface TaskHeaderProps {
    createdTasksAmount: number;
    checkedTasksAmount: number;
}

export function TasksHeader( {createdTasksAmount, checkedTasksAmount}: TaskHeaderProps) {
    return (
        <header className={styles.container}>
            <section>
                <p>Created Tasks</p>
                <span>{ createdTasksAmount }</span>
            </section>

            <section>
                <p>Finished Tasks</p>
                <span>{ checkedTasksAmount } of { createdTasksAmount }</span>
            </section>
        </header>
    )
}