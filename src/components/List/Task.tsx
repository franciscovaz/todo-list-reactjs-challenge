import { TaskItem } from '../../App';
import styles from './Task.module.css';
import { Check, Trash } from 'phosphor-react';


interface TaskProps extends TaskItem {
    onDeleteTask: (id: number) => void;
}

export function Task({id, description, isChecked, onDeleteTask}: TaskProps) {

    function handleRemoveTask() {
        onDeleteTask(id); 
    }

    const checkboxCheckedClassname = isChecked
        ? styles['checkbox-checked']
        : styles['checkbox-unchecked']
    const paragraphCheckedClassname = isChecked
        ? styles['paragraph-checked']
        : ''

        return (
            <div className={styles.container}>
              <div>
                <label htmlFor="checkbox">
                  <input type="checkbox" readOnly checked={isChecked} />
                  <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
                    { isChecked && <Check size={12} />}
                  </span>
        
                  <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
                    {description}
                  </p>
                </label>
              </div>
        
              <button onClick={handleRemoveTask}>
                <Trash size={16} color="#808080" />
              </button>
            </div>
          )
}