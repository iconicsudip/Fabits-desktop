import styles from './Search.module.scss'
import searchIcon from '../../icons/search.svg'
import useWindowWidth from '../../utils/hooks/useWindowWidth'

interface Props {
    placeholder?:string
}

export default function Search({placeholder}:Props) {
    const {isMobile} = useWindowWidth()
    return (
        <div className={`${styles.search_bar} ${isMobile ? styles.mobile :''}`}>
            <img src={searchIcon} alt="" />
            <input type="text" placeholder={placeholder ?? "Search"} />
        </div>
    )
}
