import Button from '../Button'
import styles from './styles.module.css'

export default function CommentForm(){
    return(
        <form className={styles.formContainer}>
                <h4>Deixe seu feedback</h4>
                <textarea placeholder='Escreva um comentário...'></textarea>
                <Button />
        </form>
    )
}