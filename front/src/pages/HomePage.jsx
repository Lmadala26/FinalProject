import { Tells } from "../components/comments/Comments";
import styles from './homepage.module.css'
import { TopComments } from "../components/topComments/topComments";
export const HomePage = () => {
    return (
        <>
        <main className={styles.BodyB}>
            <article className={styles.Comments__section}>
                <Tells userName={"Disney"} userComment={"Voy a comprar nintendo"} commentDate={"02/05/2004"} commentTitle={"Hoy se cena"}/>
                <Tells userName={"Disney"} userComment={"Voy a comprar nintendo"} commentDate={"02/05/2004"} commentTitle={"Hoy se cena"}/>
                <Tells userName={"Disney"} userComment={"Voy a comprar nintendo"} commentDate={"02/05/2004"} commentTitle={"Hoy se cena"}/>
                <Tells userName={"Disney"} userComment={"Voy a comprar nintendo"} commentDate={"02/05/2004"} commentTitle={"Hoy se cena"}/>
            </article>
            <article className={styles.Side}>
                <ul className={styles.Topic__list}>
                    <li className={styles.Topic}>TOPICO</li>
                    <li className={styles.Topic}>TOPICO</li>
                    <li className={styles.Topic}>TOPICO</li>
                    <li className={styles.Topic}>TOPICO</li>
                    <li className={styles.Topic}>TOPICO</li>
                </ul>
                <ul className={styles.Top__comments}>
                    <h2>Top comments</h2>
                    <div className={styles.Tops}>
                         <div className={styles.Top1}><li className={styles.Comment}><TopComments userName={"Disney"} commentDate={"02/05/2004"} commentTitle={"Hoy se cena"}/></li></div>
                         <div className={styles.Top2}><li className={styles.Comment}><TopComments userName={"Disney"} commentDate={"02/05/2004"} commentTitle={"Hoy se cena"}/></li></div>
                         <div className={styles.Top3}><li className={styles.Comment}><TopComments userName={"Disney"} commentDate={"02/05/2004"} commentTitle={"Hoy se cena"}/></li></div>
                    </div>
                </ul>
            </article>
        </main>
        </>
    );
  };