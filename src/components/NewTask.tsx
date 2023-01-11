import { PlusCircle } from 'phosphor-react';
import styles from '../styles/NewTask.module.css';

export function NewTask() {
    return (
        <form >
            <input type="text" placeholder='Adicione Uma Nova Tarefa' />
            <button type='submit' disabled>
                Criar <PlusCircle size={32}/>
            </button>
        </form>
    )
}   



// className={styles.new_task_form}
