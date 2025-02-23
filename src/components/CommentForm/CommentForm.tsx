import { useRef} from 'react';
import Button from '../Button/Button'
import styles from './styles.module.css'

interface CommentFormProps {
    onAddComment: (comment: string) => void;
}

export default function CommentForm({ onAddComment }: CommentFormProps){
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        if (textareaRef.current) {
            onAddComment(textareaRef.current.value);
            textareaRef.current.value = "";
          }
    }

    return(
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <h4>Deixe seu feedback</h4>
            <textarea ref={textareaRef} placeholder='Escreva um comentário...' required></textarea>
            <Button /> 
        </form>

    )
}