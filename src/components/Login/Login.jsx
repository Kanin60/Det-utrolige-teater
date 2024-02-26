import style from './Login.module.scss'
import { UserContext } from "../../context/UserContext";
import { useContext, useState } from "react";


//Error handling er fra https://github.com/TCAA-Web/Mediesuset/blob/main/src/pages/Loginpage/Loginpage.jsx
export const Login = () => {

    const [message, setMessage] = useState("Indtast login oplysninger");
    //state fra context som bliver opdateret
    const { setUserData, userData } = useContext(UserContext);

    //Her fetcher jeg med metoden POST til login
    async function handleLogin(e) {
        e.preventDefault()

        if (e.target.username.value === "") {
            setMessage("Venligst indtast dit brugernavn");
            return;
        }

        if (e.target.password.value === "") {
            setMessage("Venligst indtast dit password");
            return;
        }

        let url = "http://localhost:4000/users"

        /* Body er inholdet af det vi sender til serveren/ request's body som sendes til serveren */
        let body = new URLSearchParams()
        body.append('username', e.target.username.value)
        body.append('password', e.target.password.value)

        let options = {
            method: "POST",
            body: body,
        }

        await fetch(url, options)
            .then((res) => res.json())
            .then((data) => {
                console.log('Er det noget?', data);
                if (data?.status === "Ok") {
                    console.log('Yay, It works!');
                    setUserData(data);
                    setMessage(`Du er nu logget ind som `);
                } else {
                    setMessage("Der opstod en fejl - prøv igen" + " : " + data.message);
                }
            })
            .catch((err) => console.error(err))
    }

    console.log('Why empty?', userData);

    // koden er fra https://github.com/Kanin60/Hotel_Overlook/blob/main/src/components/Login/Signin.jsx
    return (

        <>
            {
                userData &&
                    userData ? `Velkommen `
                    :
                    <form className={style.login} onSubmit={(e) => handleLogin(e)}>
                        {message && <b>{message}</b>}
                        <label>
                            <input type="email" name="username" placeholder="Write your email here" />
                        </label>
                        <div>
                            <label>
                                <input type="password" name="password" placeholder="********" />
                            </label>
                            <input value="Login" type="submit" />
                        </div>
                    </form>
            }
        </>

    )
}