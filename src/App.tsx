import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import styles from './styles/App.module.css'
import './styles/index.css'

export function App() {
  return (
    <div className="App">
        <Header/>
        <div className={styles.wrapper}> 
            <NewTask />
        </div>
    </div>
  )
};