import styles from './styles.module.css'
import LikeButton from '../LikeButton/LikeButton'
import TrashButton from '../TrashButton/TrashButton'
import { Comment as CommentType } from "../../types/Comment";

interface CommentProps {
    comment: CommentType;
    onDeleteComment: (commentId: number) => void;
}

export default function Comment({ comment, onDeleteComment }: CommentProps){
    return (
        <div className={styles.commentContainer}>
            <img src={comment.profilePicturePath} alt='Foto de perfil'></img>
            <div className={styles.textAndLikesContainer}>
                <div className={styles.commentBody}>
                    <div className={styles.commentHeader}>
                        <div className={styles.opInfo}>
                            <h4>{comment.author}</h4>
                            <span>Cerca de 1h</span>
                        </div>
                        <TrashButton onClick={() => onDeleteComment(comment.id)}/>
                    </div>
                    <p>{comment.content}</p>
                </div>
                <LikeButton />
            </div>
        </div>
    )
}