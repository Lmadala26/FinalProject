import { Tells } from '../components/comments/Comments';
import styles from './homepage.module.css'
import { TopComments } from '../components/topComments/topComments';
import {Topic} from '../components/topics/topic'
export const HomePage = () => {
    return (
        <>
        <main className={styles.BodyB}>
            <article className={styles.Comments__section}>
                <Tells userName={"Disney"} userComment={"Voy a comprar nintendo"} commentDate={"02/05/2004"} commentTitle={"Hoy se cena"}/>
                <Tells userName={"Disney"} userComment={"Voy a comprar nintendo"} commentDate={"02/05/2004"} commentTitle={"Hoy se cena"}/>
                <Tells userName={"Disney"} userComment={"Voy a comprar nintendo"} commentDate={"02/05/2004"} commentTitle={"Hoy se cena"}/>
                <Tells userName={"Disney"} userComment={"Voy a comprar nintendo"} commentDate={"02/05/2004"} commentTitle={"Hoy se cena"}/>
                <Tells userName={"Disney"} userComment={"Voy a comprar nintendo"} commentDate={"02/05/2004"} commentTitle={"Hoy se cena"}/>
            </article>
            <article className={styles.Side}>
                <Topic/>
                <ul className={styles.Top__comments}>
                    <h2>Top comments</h2>
                        <TopComments userName={"Disney"} commentDate={"02/05/2004"} commentTitle={"Hoy se cena"}/>
                        <TopComments userName={"Disney"} commentDate={"02/05/2004"} commentTitle={"Hoy se cena"}/>
                </ul>
            </article>
        </main>
        </>
    );
  };