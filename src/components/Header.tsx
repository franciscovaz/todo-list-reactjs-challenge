import styles from './Header.module.css';
import todoLogo from '../assets/todo_logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={todoLogo} alt="todo Logo" />
        </header>
    )
}