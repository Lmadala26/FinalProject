
import styles from './profileUserHero.module.css';
import profilepicture from '../../assets/ejFotoPerfil.png'
import backgroundProfile from '../../assets/ejFondoPerfil.png'

export const ProfileUserHero = () => {
    return (
        <>
            <section className={styles.brackgroundprofile}>
                <article className={styles.boxuser}>
                 <img className={styles.imageprofile} src={profilepicture} alt="picture profile"/>
                 <p className={styles.username}>dfdsdsfsf</p>
                </article>
            </section>
            <div className={styles.divimg}>
                    <img className= {styles.imgBackground} src={backgroundProfile}></img>
            </div>
        </>
)}
