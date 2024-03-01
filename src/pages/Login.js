import styles from './Login.module.css'
import logo from '../assets/Prancheta-8 1.png'
import image6 from '../assets/image 6.png'
import rectangle3 from '../assets/Rectangle 3.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()

    function cadastrarUsuario(e) {
        console.log(email);
        console.log(senha);
    }
 
    return(
        <div className={styles.background}>
            <div className={styles.main}>
                <div className={styles.whiteCard}>
                    <div className={styles.loginCard}>
                        <img className={styles.logo} src={logo} alt='logo tropa digital' />
                        <div className={styles.title}>
                            <h1>Bem Vindo ao <span className={styles.colorOrange}>painel</span></h1>
                        </div>
                        <form onSubmit={cadastrarUsuario} className={styles.form}>
                            <input type="text" className={styles.input} placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" id={styles.inputSenha} className={styles.input} placeholder="Digite sua senha" onChange={(e) => setSenha(e.target.value)} />

                            <Link to="/home" className={styles.link}>
                                <button type="submit" className={styles.button}>Acessar</button>
                            </Link>
                        </form>
                    </div>
                </div>
                    <img className={styles.image1} src={rectangle3} alt='imagem do espaço com estrelas' />
                    <img className={styles.image2} src={image6} alt='uma pessoa usando um notebook para criar um codigo' />
            </div>
        </div>
    )

}

export default Login