import styles from './styles.module.css'

function sendComment(){
    console.log("comentou")
}

export default function Button(){
    return(
        <button className={styles.button}
        onSubmit={sendComment}
        >
            Comentar
        </button>
    )
}