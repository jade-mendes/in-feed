import styles from './styles.module.css'
import LikeButton from '../LikeButton/LikeButton'
import TrashButton from '../TrashButton/TrashButton'

interface CommentProps {
    profilePicturePath: string
    name: string
    content: string
}

export default function Comment({profilePicturePath, name, content} : CommentProps){
    return (
        <div className={styles.commentContainer}>
            <img src={profilePicturePath}></img>
            <div className={styles.textAndLikesContainer}>
                <div className={styles.commentBody}>
                    <div className={styles.commentHeader}>
                        <div className={styles.opInfo}>
                            <h4>{name}</h4>
                            <span>Cerca de 1h</span>
                        </div>
                        <TrashButton />
                    </div>
                    <p>{content}</p>
                </div>
                <LikeButton />
            </div>
        </div>
    )
}