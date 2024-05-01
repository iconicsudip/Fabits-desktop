import { Link, useLocation } from 'react-router-dom'
import styles from './NavItem.module.scss'
import { useDispatch } from 'react-redux'
import { setSidebarNavName } from '../../store/slices/sidebarSlice'

interface Props {
    name: string
    icon: string
    to: string
}

export default function NavItem({ name, icon, to }: Props) {
    const location = useLocation();
    const isActive = location.pathname === to;
    const dispatch = useDispatch();

    const handleSetNavName = () => {
        localStorage.setItem('navName', name);
        dispatch(setSidebarNavName(name));
    }
    return (
        <Link to={to} className={styles.link} onClick={handleSetNavName}>
            <div className={`${styles.nav_item} ${isActive ? styles.active : ''}`}>
                <div className={styles.item}>
                    <img className={styles.img} src={icon} alt={`navicon_${name.toLowerCase()}`} />
                    <p className={styles.name}>{name}</p>

                </div>
            </div>
        </Link>
    )
}
