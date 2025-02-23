import styles from '../Comment/styles.module.css'
import Comment from "../Comment/Comment"; 
import { Comment as CommentType } from "../../types/Comment";

interface CommentListProps {
    comments: CommentType[];
    onDeleteComment: (commentId: number) => void;
}

export default function CommentList({comments, onDeleteComment}: CommentListProps){

    if (comments.length === 0) return null

    return(
        <div className={styles.commentListContainer}>
            {comments.map((comment) => (
                <Comment key={comment.id} comment={comment} onDeleteComment={onDeleteComment} />
            ))}
        </div>
    )
}