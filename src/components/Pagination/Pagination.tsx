import styles from './Pagination.module.scss'
import rightArrow from '../../icons/right_arrow.svg'
import leftArrow from '../../icons/left_arrow.svg'
import useWindowWidth from '../../utils/hooks/useWindowWidth'

export default function Pagination() {
    const {isMobile} = useWindowWidth();
    return (
        <div className={`${styles.pagination} ${isMobile ? styles.mobile : ''}`}>
            <p className={styles.current_page}>showing
                <span className={styles.main}>1-4</span>
                of
                <span className={styles.main}>4</span>
            </p>
            <button className={styles.navigation_button}>
                <img src={leftArrow} alt="right_arrow" />
            </button>
            <button className={styles.navigation_button}>
                <img src={rightArrow} alt="right_arrow" />
            </button>
        </div>
    )
}
