import excellentHealth from '../../icons/excellent.svg'
import goodHealth from '../../icons/good.svg'
import weakHealth from '../../icons/weak.svg'
import poorHealth from '../../icons/poor.svg'
import { HealthType } from '../../enums/card'
import styles from './HealthStatus.module.scss'

interface Props {
    health: HealthType
}

export default function HealthStatus({ health }: Props) {
    const healthStatusColor = (health: HealthType) => {
        switch (health) {
            case HealthType.Excellent:
                return '--green-dark'
            case HealthType.Good:
                return '--green-light'
            case HealthType.Poor:
                return '--red-dark'
            default:
                return '--yellow-dark'
        }
    }

    const healthIcon = (health: HealthType) => {
        switch (health) {
            case HealthType.Excellent:
                return excellentHealth
            case HealthType.Good:
                return goodHealth
            case HealthType.Poor:
                return poorHealth
            default:
                return weakHealth
        }
    }

    return (
        <div className={styles.health_status}>
            <img src={healthIcon(health)} alt={`icon_${health.toLowerCase()}`} />
            <h4 style={{ color: `var(${healthStatusColor(health)})`}}>{health}</h4>
        </div>
    )
}
