import styles from './post.module.css'

export function Post(){
    return(
        <>
        <form className={styles.content}>
                <select id={styles.topics} text="select topic">
                   <option className={styles.topic1}>DEPORTES</option>
                   <option className={styles.topic2}>MÚSICA</option>
                   <option className={styles.topic3}>TECNOLOGÍA</option>
                   <option className={styles.topic4}>ECONOMÍA</option>
                   <option className={styles.topic5}>VIAJES</option>
                </select>
                <input type="text" name="" id={styles.title} />
                <textarea name="" id="" cols="30" rows="10" className={styles.comment}></textarea>
                <input type="submit"  className={styles.post}/>
        </form>
        </>
    )
}