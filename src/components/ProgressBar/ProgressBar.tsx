import { getLightColor } from '../../utils/functions'
import styles from './ProgressBar.module.scss'

interface Props {
    current: number
    target: number
}
export default function ProgressBar({ current, target }: Props) {

    const getCurrentProgressColor = (colorType:string) => {
        switch(colorType){
            case '--primary-lighter':
                return '--primary'
            case '--green-lighter':
                if(current === target){
                    return '--green-light'
                }
                return '--stripe'
            case '--yellow-light':
                return '--yellow-dark'
            case '--red-lighter':
                return '--red-dark'
            default:
                return '--primary'
        }
    }

    const getTargetLightColor = (colorType:string) => {
        switch(colorType){
            case '--green-lighter':
                if(current > target){
                    return '--green-dark'
                }
                return '--stripe'
            default:
                return '--stripe'
        }
    }

    

    return (
        <div className={styles.progress_bar} style={{ background: `var(${getLightColor(current,target)})`}}>
            <div className={styles.current_progress} style={{ width: `${current}%`, background: `var(${getCurrentProgressColor(getLightColor(current, target)!)})`, mixBlendMode: current > target ? 'difference' : 'initial' }}></div>
            <div className={styles.target_progress} style={{ width: `${target}%`, background: `var(${getTargetLightColor(getLightColor(current, target)!)})`, zIndex: current > target ? 1 : 0, mixBlendMode: current > target ? 'initial' :'difference'}}></div>
            <div className={styles.progress_circle_wrapper} style={{ width: `${current}%` }}>
                <div className={styles.progress_circle} style={{ background: current > target ? `var(${getTargetLightColor(getLightColor(current, target)!)})` : `var(${getCurrentProgressColor(getLightColor(current, target)!)})` }}></div>
            </div>
        </div>
    )
}
