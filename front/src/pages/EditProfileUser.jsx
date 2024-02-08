import { FormEditProfileUser } from "../components/formEditProfileUser/FormEditProfileUser";
import { ProfileUserHero } from "../components/profileUserHero/ProfileUserHero";

export const EditProfileUser = () => {
    return (    
        <>
            <main>  
                <ProfileUserHero />
                <FormEditProfileUser />
            </main>
        </>
    );
  };