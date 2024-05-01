import styles from './Plan.module.scss'
import { T_Plan } from '../../types/plan'
import rightArrowIcon from '../../icons/chevron_right.svg'
import { Link } from 'react-router-dom'
import { MY_LINKEDIN } from '../../constants/personal.constant'

interface Props {
    plan: T_Plan
}


export default function Plan({ plan }: Props) {
    return (
        <div className={styles.plan}>
            <div className={styles.plan_header}>
                <Link to={MY_LINKEDIN} target="_blank">
                    <div className={styles.icon}>
                        <img src={plan.icon} alt={`${plan.name.toLowerCase()}_icon`} />
                    </div>
                </Link>
                <div className={styles.arrow}>
                    <Link to={MY_LINKEDIN} target="_blank">
                        <img src={rightArrowIcon} alt="right-arrow" />
                    </Link>
                </div>
            </div>
            <div className={styles.info}>
                <h4 className={styles.name}>{plan.name}</h4>
                <p className={styles.desc}>{plan.description}</p>
            </div>
        </div>
    )
}
