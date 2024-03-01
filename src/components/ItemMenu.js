import styles from './ItemMenu.module.css'

function ItemMenu({ pageName, selecionado, onClick, icon }) {
    return(
        <>
            <li className={`${styles.itemLista} ${selecionado ? styles.selecionado : ''}`} onClick={onClick}>
                <img src={icon} alt={pageName}/>
                <p className={styles.itemName}>{pageName}</p>
            </li>
        </>
    )
}

export default ItemMenu