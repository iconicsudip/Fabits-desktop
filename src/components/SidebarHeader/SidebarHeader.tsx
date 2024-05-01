import { useSelector } from 'react-redux'
import notification from '../../icons/notifications.svg'
import styles from './SidebarHeader.module.scss'
import { RootState } from '../../store'
import useWindowWidth from '../../utils/hooks/useWindowWidth'

export default function SidebarHeader() {
    const {isCollapsed} = useSelector((state:RootState) => state.sidebarDetails)
    const {isMobile} = useWindowWidth() 
    return (
        <div className={`${styles.sidebar_header} ${isCollapsed ? styles.collapsed : ""}`}>
            <img className={styles.logo} src="/fabits_logo.png" alt="logo" />
            {!isMobile  && <div className={styles.notification_icon}>
                <img src={notification} alt="notification_icon" />
            </div>}
        </div>
    )
}
