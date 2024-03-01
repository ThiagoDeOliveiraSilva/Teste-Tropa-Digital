import styles from './Home.module.css'
import Card from "../components/Card"
import Menu from "../components/Menu"

function Home({ paginaSelecionada, setPaginaSelecionada }) {
    return(
        <div className={styles.body}>
            <Menu paginaSelecionada={paginaSelecionada} setPaginaSelecionada={setPaginaSelecionada} />
            <div className={styles.title}>
                <h1>Olá <span className={styles.bold}>Usuário</span></h1>
                <div className={styles.vectorContainer}>
                    <div className={styles.vector}></div>
                </div>
                <div className={styles.cards}>

                    <Card 
                        title={'Lorem Ipsum is simply dummy text of the printing and typesettin...'}
                        text={'Lorem Ipsum is simply dummy text of the printing and typesettin.'}
                    />

                    <Card 
                        title={'Lorem Ipsum is simply dummy text of the printing and typesettin...'}
                        text={'Lorem Ipsum is simply dummy text of the printing and typesettin.'}
                    />

                    <Card 
                        title={'Lorem Ipsum is simply dummy text of the printing and typesettin...'}
                        text={'Lorem Ipsum is simply dummy text of the printing and typesettin.'}
                    />

                    <Card 
                        title={'Lorem Ipsum is simply dummy text of the printing and typesettin...'}
                        text={'Lorem Ipsum is simply dummy text of the printing and typesettin.'}
                    />

                    <Card 
                        title={'Lorem Ipsum is simply dummy text of the printing and typesettin...'}
                        text={'Lorem Ipsum is simply dummy text of the printing and typesettin.'}
                    />

                    <Card 
                        title={'Lorem Ipsum is simply dummy text of the printing and typesettin...'}
                        text={'Lorem Ipsum is simply dummy text of the printing and typesettin.'}
                    />

                    <Card 
                        title={'Lorem Ipsum is simply dummy text of the printing and typesettin...'}
                        text={'Lorem Ipsum is simply dummy text of the printing and typesettin.'}
                    />

                    <Card 
                        title={'Lorem Ipsum is simply dummy text of the printing and typesettin...'}
                        text={'Lorem Ipsum is simply dummy text of the printing and typesettin.'}
                    />

                    <Card 
                        title={'Lorem Ipsum is simply dummy text of the printing and typesettin...'}
                        text={'Lorem Ipsum is simply dummy text of the printing and typesettin.'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
