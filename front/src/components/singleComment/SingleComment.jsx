import styles from './singleComment.module.css'

import userphoto1 from '../../assets/ejFotoPerfil.png'
import iconTitle1 from '../../assets/icons/videogames.svg'
import commentPhoto1 from '../../assets/a.jpg'
import commentPhoto2 from '../../assets/b.jpg'
import commentPhoto3 from '../../assets/c.png'


export const SingleComment = () => {
    return (
        <>
            <h1 className={styles.h11}> user profile</h1>
            <section className={styles.sectionDad}>
                <section className={styles.son1}>
                    <img className={styles.photoProfile} src={userphoto1} alt="picture profile"></img>
                    <p className={styles.username}>UserName</p>
                </section>
                <section className={styles.son2}>
                    <div className={styles.divTitle}>
                        <p className={styles.title}>Titulo</p>
                        <img className={styles.iconTitle} src={iconTitle1} alt=""></img>
                    </div>
                    <p className={styles.date}>02/08/2024</p>
                    <div className={styles.divCommentDad}>
                        <div className={styles.divComment}>
                            <p className={styles.comment} >Comentario Prueba Comentario PruebaComentario 
                            PruebaComentario PruebaComentario PruebaComentario PruebaComentario PruebaComentario Prueba
                            PruebaComentario PruebaComentario PruebaComentario PruebaComentario PruebaComentario Prueba
                            PruebaComentario PruebaComentario PruebaComentario PruebaComentario PruebaComentario Prueba
                            PruebaComentario PruebaComentario PruebaComentario PruebaComentario PruebaComentario Prueba

                            </p>
                        </div>
                        <div className={styles.divPhotos}>

                            <div className={styles.divPhotos1}>
                                <img className={styles.photo1} src={commentPhoto1} alt=""></img>
                            </div>
                            <div className={styles.divPhotos2}>
                                <img className={styles.photo2} src={commentPhoto2} alt=""></img>
                            </div>
                            <div className={styles.divPhotos3}>
                                <img className={styles.photo3} src={commentPhoto3} alt=""></img>
                            </div>

                        </div>
                    </div>
                </section>
                <section className={styles.son3}>
                    <button className={styles.likeButton}></button>
                    <button className={styles.dislikeButton}></button>
                </section>
            </section>
        </>
    );
  };