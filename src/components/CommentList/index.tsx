import styles from './styles.module.css'
import { Comment } from '../../types/Comment'
import TrashButton from '../TrashButton'
import LikeButton from '../LikeButton'

interface CommentListProps {
    comments: Comment[]
    profilePicturePath: string
    name: string
    content: string
}

export default function CommentList(props: CommentListProps){
    const { comments } = props

    if (comments.length === 0) return null

    return(
        <div>
        {comments.map((comment) => (
            <div className={styles.commentContainer}>
            <img src={comment.profilePicturePath}></img>
            <div className={styles.textAndLikesContainer}>
                <div className={styles.commentBody}>
                    <div className={styles.commentHeader}>
                        <div className={styles.opInfo}>
                            <h4>{comment.author}</h4>
                            <span>Cerca de </span>
                        </div>
                        <TrashButton />
                    </div>
                    <p>{comment.text}</p>
                </div>
                <LikeButton />
            </div>
        </div>
        ))}
        </div>
    )
}