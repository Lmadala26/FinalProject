import styles from './topic.module.css'
export function Topic (){
    return(
    <ul className={styles.Topic__list}>
        <li className={styles.Topic}><a className={styles.Topic1}>DEPORTES</a></li>
        <li className={styles.Topic}><a className={styles.Topic2}>MÚSICA</a></li>
        <li className={styles.Topic}><a className={styles.Topic3}>TECNOLOGÍA</a></li>
        <li className={styles.Topic}><a className={styles.Topic4}>ECONOMÍA</a></li>
        <li className={styles.Topic}><a className={styles.Topic5}>VIAJES</a></li>
    </ul>
    )
}