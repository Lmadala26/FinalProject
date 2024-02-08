import { Tells } from "../components/comments/Comments";
import { ProfileUserHero } from "../components/profileUserHero/ProfileUserHero";
import styles from './profileUserPage.module.css'


export const ProfileUserPage = () => {
    return (
        <main className={styles.main1}>
            <section className={styles.section1}>
                <ProfileUserHero />
            </section>
            <section className={styles.section2}>
                <Tells userName={'juan'} commentTitle={'awdw'}/>
                <Tells userName={'disney'} commentTitle={'awdwad'}/>
                <Tells userName={'nintendo'}/>
            </section>
        </main>
    );
  };