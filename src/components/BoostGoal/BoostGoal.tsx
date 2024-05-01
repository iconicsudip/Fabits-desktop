import styles from './BoostGoal.module.scss'
import light from '../../icons/light.svg'
import bolt from '../../icons/bolt.svg'
import Button from '../Button'

export default function BoostGoal() {
    return (
        <div className={styles.button_goal}>
            <div className={styles.boost_wrapper}>
                <img src={light} alt="light_icon" />
                <p>Boost to reach your goal sooner!</p>
            </div>
            <Button buttonType="primary" block>
                <div className={styles.boost_button}>
                    <img src={bolt} alt="bolt_icon" />
                    <p>Boost</p>
                </div>
            </Button>
        </div>
    )
}
