import styles from './styles.module.css'
import teste from '../../assets/op3.jpeg'
import LikeButton from '../LikeButton'
import TrashButton from '../TrashButton'


export default function Comment(){
    return (
        <div className={styles.commentContainer}>
            <img src={teste}></img>
            <div className={styles.bodyAndLikesContainer}>
                <div className={styles.commentBody}>
                    <div className={styles.commentHeader}>
                        <div className={styles.opInfo}>
                            <h4>Fulano</h4>
                            <span>Cerca de </span>
                        </div>
                        <TrashButton />
                    </div>
                    <p>Est aspernatur quis eos natus dicta et internos</p>
                </div>
                <LikeButton />
            </div>
        </div>
    )
}