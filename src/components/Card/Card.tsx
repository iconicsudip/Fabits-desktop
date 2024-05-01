import { Link } from 'react-router-dom'
import { CardType, HealthType } from '../../enums/card'
import { T_Card } from '../../types/card'
import { converInrFormat } from '../../utils/functions'
import GoalOverview from '../GoalOverview'
import HealthStatus from '../HealthStatus'
import styles from './Card.module.scss'
import { MY_LINKEDIN } from '../../constants/personal.constant'
import BoostGoal from '../BoostGoal'

interface Props {
    card: T_Card
}

export default function Card({card}:Props) {
    return (
        <div className={styles.card}>
            <Link to={MY_LINKEDIN} target='_blank'>
                <div className={styles.card_header}>
                    <div className={styles.icon}>
                        <img src={card.icon} alt="icon" />
                    </div>
                    <h4 className={styles.title}>{card.name}</h4>
                </div>
                <div className={styles.informations}>
                    {card.informations.map((info, index) => {
                        return (
                            <div key={`info-${index}`} className={styles.information}>
                                <p className={styles.label}>{info.label}</p>
                                {info.type === CardType.Amount &&
                                    <h4 className={styles.value}>
                                        {converInrFormat(info.value as string)}
                                    </h4>
                                }
                                {info.type === CardType.Date &&
                                    <h4 className={styles.value}>
                                        {info.value}
                                    </h4>
                                }
                                {info.type === CardType.Health && 
                                    <HealthStatus health={info.value as HealthType} />
                                }
                            </div>
                        )
                    })}
                </div>
                <GoalOverview goal={card.goal} />
                {card.boostEnabled && 
                    <BoostGoal />
                }
            </Link>
        </div>
    )
}
