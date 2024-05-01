import styles from './UserInfo.module.scss'
import more from '../../icons/more_vert.svg'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

export default function UserInfo() {
    const { isCollapsed } = useSelector((state: RootState) => state.sidebarDetails)
    return (
        <div className={`${styles.user_info} ${isCollapsed ? styles.collapsed : ''}`}>
            <div className={styles.info}>
                <img className={styles.memoji} src="/memoji.png" alt="memoji" />
                <div className={styles.user}>
                    <h4 className={styles.name}>Dhruv S.</h4>
                    <p className={styles.email}>dhruv@fabits.com</p>
                </div>
            </div>
            <div className={styles.more}>
                <img src={more} alt="more" />
            </div>
        </div>
    )
}
