import bgImagePath from '/assets/dev-profile-wallpaper.jpg'
import profilePicPath from '/assets/dev-profile-pic.jpg'
import styles from './styles.module.css'

export default function DevProfile(){
    return(
        <div className={styles.container}>
            <img src={bgImagePath} className={styles.bgImage}></img>
            <div>
                <img src={profilePicPath} className={styles.profilePic}></img>
                <h2>Jade Mendes</h2>
                <h4> Dev Front-end</h4>
            </div>
        </div>
    )
}