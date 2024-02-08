import styles from './formEditProfileUser.module.css'

export const FormEditProfileUser = () => {
    return (
        <>
            <section className={styles.formDad}>
                <form className={styles.formUser} id="userForm" method="POST" encType="multipart/form-data" >

                    <div className={styles.divProfile}>
                        <label htmlFor="profilePicture" className={styles.labelProfile} >Profile Picture</label> 
                        <input className={styles.inputProfile} type="file" id="profilePicture" name="profilePicture" accept="image/*" />
                    </div>
                    <div className={styles.divParteInferior}>
                        

                        <div className={styles.divName}>
                            <label htmlFor="username" className={styles.labelName}>User Name</label>
                            <input className={styles.inputName} type="text" id="username" name="username" required placeholder='Write your new name' />
                        </div>
                        
                        <div className={styles.divBackground}>
                            <label htmlFor="profilePicture" className={styles.labelBackground}>Profile Background</label> 
                            <input className={styles.inputBackground} type="file" id="profilePicture" name="profilePicture" accept="image/*" />
                        </div>

                        <div className={styles.divEmail}>
                            <label htmlFor="email" className={styles.labelEmail}>Email</label>
                            <input className={styles.inputEmail} type="email" id="email" name="email" required placeholder='Write your new email'/>
                        </div>
                    </div>
                    <button type="submit" className={styles.button}>Modify</button>
                </form>
            </section>
        </>
)}