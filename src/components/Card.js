import styles from './Card.module.css'
import image7 from '../assets/image 7.png'
import calendarIcon from '../assets/CalendarIcon.png'

function Card({ title, text }) {
    return(
        <div className={styles.card}>
            <div className={styles.image}>
                    <img src={image7} alt='uma mulher sentada em uma montanha, tirando foto da paisagem com o celular' className={styles.imageSize} />
                <div className={styles.tempoCadastrado}>
                    <img src={calendarIcon} alt='icone de calendario'/>
                    <p>2min atrás</p>
                </div>
            </div>
            <div className={styles.description}>
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Card
