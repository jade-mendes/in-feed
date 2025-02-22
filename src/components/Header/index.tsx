import styles from './styles.module.css'
import logo from '/assets/in-logo.png'

function Header(){
    return (
        <header className={styles.header}>
            <img src={logo} alt='Logo da IN Júnior'></img>
            <h1>Feed</h1>
        </header>
    )
}

export default Header