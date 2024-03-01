import styles from './Menu.module.css'
import ItemMenu from './ItemMenu'
import logo from '../assets/Prancheta-8 1.png'
import homeIcon from '../assets/home.png'
import contactsIcon from '../assets/contatos.png'
import frameIcon from '../assets/Frame.png'

function Menu({ paginaSelecionada, setPaginaSelecionada }) {
    return(
        <div className={styles.body}>
            <header>
                <img src={logo} alt='logo tropa digital' />
            </header>
            <ul className={styles.listaMenu}>
                <ItemMenu pageName='Início' selecionado={paginaSelecionada === 'inicio'} onClick={() => setPaginaSelecionada('inicio')} icon={homeIcon} />
                <ItemMenu pageName='Contatos' selecionado={paginaSelecionada === 'contatos'} onClick={() => setPaginaSelecionada('contatos')} icon={contactsIcon} />
                <ItemMenu pageName='Relatórios' selecionado={paginaSelecionada === 'relatorios'} onClick={() => setPaginaSelecionada('relatorios')} icon={frameIcon} />
                <ItemMenu pageName='Contatos' selecionado={paginaSelecionada === 'contatos1'} onClick={() => setPaginaSelecionada('contatos1')} icon={contactsIcon} />
                <ItemMenu pageName='Contatos' selecionado={paginaSelecionada === 'contatos2'} onClick={() => setPaginaSelecionada('contatos2')} icon={contactsIcon} />
                <ItemMenu pageName='Contatos' selecionado={paginaSelecionada === 'contatos3'} onClick={() => setPaginaSelecionada('contatos3')} icon={contactsIcon} />
            </ul>
        </div>
    )
}

export default Menu