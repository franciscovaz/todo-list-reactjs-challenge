import styles from './Task.module.css';
import { Check, Trash } from 'phosphor-react';

export function Task() {

    function handleRemoveTask() {
        console.log('Remove task!');
        
    }

    return (
        <div className={styles.container}>
            <div>
                <label htmlFor="checkbox">
                    <input type="checkbox" readOnly checked={false} />
                    <span className={styles.checkbox}>
                        <Check size={12}/> 
                    </span>

                    <p className={styles.paragraph}>
                        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                    </p>
                </label>
            </div>
            <button onClick={handleRemoveTask}>
                <Trash size={16} color="#808080" />
            </button>
        </div>
    )
}