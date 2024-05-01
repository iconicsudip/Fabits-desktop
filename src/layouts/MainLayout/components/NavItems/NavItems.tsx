import NavItem from '../../../../components/NavItem'
import NavSegment from '../../../../components/NavSegment'
import { T_NavItem, T_NavSubItem } from '../../../../types/sidebar'
import styles from './NavItems.module.scss'
import homeIcon from '../../../../icons/home.svg' 
import trackIcon from '../../../../icons/track_changes.svg' 
import bubbleIcon from '../../../../icons/bubble_chart.svg' 
import realestateIcon from '../../../../icons/real_estate_agent.svg' 
import businessIcon from '../../../../icons/add_business.svg' 
import securityIcon from '../../../../icons/security.svg' 
import settingIcon from '../../../../icons/setting.svg' 
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../store'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { setSidebarNavName } from '../../../../store/slices/sidebarSlice'

const navItems: T_NavItem[] = [
    {
        segment: "",
        items:[
            {
                name: "Home",
                icon: homeIcon,
                to: "/"
            }
        ]
    },
    {
        segment: "Finance",
        items: [
            {
                name: "Plan a Goal",
                icon: trackIcon,
                to: "/plans"
            },
            {
                name: "Discover Top Funds",
                icon: bubbleIcon,
                to: "/top-funds"
            },
            {
                name: "My Investments",
                icon: realestateIcon,
                to: "/my-investments"
            },
            {
                name: "IPO",
                icon: businessIcon,
                to: "/ipo"
            }
        ]
    },
    {
        segment: "Insurance",
        items: [
            {
                name: "Insurance",
                icon: securityIcon,
                to: "/insurance"
            },
            {
                name: "Insurance",
                icon: settingIcon,
                to: "/insurancee"
            }
        ]
    }
]

export default function NavItems() {
    const { isCollapsed } = useSelector((state: RootState) => state.sidebarDetails)
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        const currentNavName = navItems.filter((navItem: T_NavItem) => {
            return navItem.items.filter((item: T_NavSubItem) => item.to === location.pathname).length > 0
        })[0].items.filter((item: T_NavSubItem) => item.to === location.pathname)[0].name
        dispatch(setSidebarNavName(currentNavName))
    }, [location])
    return (
        <div className={styles.nav_items}>
            {navItems.map((navItem: T_NavItem,index:number) => {
                return (
                    <NavSegment key={`${navItem.segment}${index}`} segmentName={isCollapsed ? "" : navItem.segment}>
                        {navItem.items.map((item: T_NavSubItem,index:number) => {
                            return (
                                <NavItem key={`${item.name}${index}`} name={item.name} icon={item.icon} to={item.to}/>
                            )
                        })}
                    </NavSegment>
                )
            })}
        </div>
    )
}
