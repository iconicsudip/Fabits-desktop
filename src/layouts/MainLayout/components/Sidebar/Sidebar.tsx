import SidebarHeader from '../../../../components/SidebarHeader'
import UserInfo from '../../../../components/UserInfo'
import NavItems from '../NavItems'
import styles from './Sidebar.module.scss'
import collapseIcon from '../../../../icons/collapse_content.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setSidebar } from '../../../../store/slices/sidebarSlice'
import { RootState } from '../../../../store'
import useWindowWidth from '../../../../utils/hooks/useWindowWidth'

export default function Sidebar() {
    const { isCollapsed } = useSelector((state: RootState) => state.sidebarDetails)
    const {isMobile} = useWindowWidth()
    const dispatch = useDispatch()
    const handleCollapse = () => {
        dispatch(setSidebar(!isCollapsed))
    }
    return (
        <div className={`${styles.sidebar} ${isMobile ? styles.mobile :''} ${isCollapsed ? isMobile ? styles.mobile_collapsed : styles.collapsed : ''}`}>
            <SidebarHeader/>
            <div className={styles.sidebar_items}>
                {!isMobile &&
                    <UserInfo />
                }
                <NavItems />
            </div>
            <div className={styles.collapse_button} onClick={handleCollapse}>
                <img src={collapseIcon} alt="collapse_icon" />
            </div>
        </div>
    )
}
