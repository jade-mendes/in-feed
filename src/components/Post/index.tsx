import Button from '../Button'
import Comment from '../Comment'
import styles from './styles.module.css'

interface PostProps {
    profilePicturePath: string
    name: string
    role: string
}

export default function Post({profilePicturePath, name, role} : PostProps){
    return(
        <div className={styles.postContainer}>

            <div className={styles.postHeader}>
                <div className={styles.opInfoContainer}>
                    <img src={profilePicturePath} className={styles.opProfilePic}></img>
                    <div className={styles.opInfo}>
                        <h4>{name}</h4>
                        <h6>{role}</h6>
                    </div>
                </div>
                <span>Publicado há {}</span>
            </div>

            <div className={styles.postContent}>
                <p>
                Lorem ipsum dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates.
                Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! 
                Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet. 
                Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!
                </p>
            </div>

            <div className={styles.feedbackContainer}>
                <h4>Deixe seu feedback</h4>
                <textarea placeholder='Escreva um comentário...'></textarea>
                <Button />
            </div>

            <Comment />
        </div>
    )
}