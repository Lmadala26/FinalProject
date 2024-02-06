
import styles from'./topComments.module.css';

export function TopComments({userName, commentDate, commentTitle }) {

    return(
        
        <article className={styles.c__container}>
            <div className={styles.c__box1}>
                <a href={`https://unavatar.io/${userName}`}><img src={`https://unavatar.io/${userName}`} alt="" className={styles.user__img} /></a>
            </div>

            <div className={styles.c__content}>
            <div className={styles.c__title}><p>{commentTitle}</p></div>
                <div className={styles.user__name}>@{userName}</div>

                <div className={styles.c__date}>{commentDate}</div>
            </div>
            
        </article>
        
        
        )
    }