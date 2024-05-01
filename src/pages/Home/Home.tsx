import styles from './Home.module.scss'
import HorizontalSection from './components/HorizontalSection'
import CardSection from './components/CardSection'
import leftArrowIcon from '../../icons/left_arrow.svg'
import useWindowWidth from '../../utils/hooks/useWindowWidth'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const {isMobile} = useWindowWidth()
  const { selectedNavName } = useSelector((state: RootState) => state.sidebarDetails)
  const navigate = useNavigate()
  const handleBack = () => {
    navigate('/')
  }
  return (
    <div className={`${styles.body} ${isMobile ? styles.mobile : ''}`}>
      {isMobile &&
        <div className={styles.page_nav}>
          <img src={leftArrowIcon} alt="back_icon" onClick={handleBack} />
          <p>{selectedNavName}</p>
        </div>
      }
      <div className={`${isMobile ? styles.mobile_wrapper :''}`}>
          {isMobile ?
            <div className={styles.info}>
              <h3 className={styles.title}>What financial goal do you want to plan today?</h3>
              <p className={styles.para}>Select a goal to start planning</p>
            </div>
            : null
          }
        <div className={styles.horizontal_section}>
          <HorizontalSection/>
        </div>
      </div>
      <CardSection/>
    </div>
  )
}
