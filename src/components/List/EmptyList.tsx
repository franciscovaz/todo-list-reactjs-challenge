import styles from './EmptyList.module.css';
import emptyClipboard from '../../assets/clipboard-empty.svg';

export function EmptyList() {
    return (
        <div className={styles.container}>
            <img src={emptyClipboard} alt="empty list icon" />

            <p>
                <strong>You still don't have task registered.</strong>
                Create tasks and organize your items to do.
            </p>
        </div>
    )
}