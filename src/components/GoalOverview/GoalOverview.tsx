import { T_Goal } from '../../types/card'
import { getDarkColor } from '../../utils/functions'
import ProgressBar from '../ProgressBar'
import styles from './GoalOverview.module.scss'

interface Props {
    goal: T_Goal
}

export default function GoalOverview({ goal }: Props) {
    const { current, target, finishedAt } = goal

    return (
        <div className={styles.goal_overview}>
            <ProgressBar current={goal.current} target={goal.target} />
            <p className={styles.track}>
                {
                    target === 100 ? <>Goal reached <span className={styles.track_color} style={{color:`var(${getDarkColor(current,target)})`}}>{finishedAt}</span> ahead</> :
                        current === target ? <><span className={styles.track_color} style={{color:`var(${getDarkColor(current,target)})`}}>{finishedAt}</span></> :
                            current > target ? <>Goal ahead by <span className={styles.track_color} style={{color:`var(${getDarkColor(current,target)})`}}>{finishedAt}</span></> :
                                current / target > 0.5 ? <>Goal behind by <span className={styles.track_color} style={{color:`var(${getDarkColor(current,target)})`}}>{finishedAt}</span></> :
                                    <>Goal behind by <span className={styles.track_color} style={{color:`var(${getDarkColor(current,target)})`}}>{finishedAt}</span></>
                }
            </p>
        </div>
    )
}
