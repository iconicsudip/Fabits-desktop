import Carousel from '../../../../components/Carousel'
import styles from './HorizontalSection.module.scss'
import noteAddIcon from '../../../../icons/note_stack_add.svg'
import retireIcon from '../../../../icons/retire.svg'
import emergencyIcon from '../../../../icons/emergency.svg'
import weddingIcon from '../../../../icons/wedding.svg'
import vacationIcon from '../../../../icons/vacation.svg'
import Plan from '../../../../components/Plan'
import { T_Plan } from '../../../../types/plan'
import useWindowWidth from '../../../../utils/hooks/useWindowWidth'

const plans: T_Plan[] = [
    {
        icon: retireIcon,
        name: 'Retirement',
        description: 'Your old age, taken care of'
    },
    {
        icon: emergencyIcon,
        name: 'Emergency',
        description: 'Be prepared at all times'
    },
    {
        icon: weddingIcon,
        name: 'Wedding',
        description: 'Plan your dream wedding today'
    },
    {
        icon: vacationIcon,
        name: 'Vacation',
        description: 'Never too late for the Bahamas!'
    },
    {
        icon: retireIcon,
        name: 'Education',
        description: 'Build your career, tension-free'
    },
    {
        icon: retireIcon,
        name: 'Education',
        description: 'Build your career, tension-free'
    },
    {
        icon: retireIcon,
        name: 'Education',
        description: 'Build your career, tension-free'
    }
]

export default function HorizontalSection() {
    const { isMobile } = useWindowWidth()
    return (
        isMobile ?
            <div className={styles.mobile_section_wrapper}>
                <div className={`${styles.horizontal_section} ${isMobile ? styles.mobile:''}`} id="horizontal-container">
                    <Carousel carouselContainer={"#horizontal-container"}>
                        {plans.map((plan: T_Plan, index: number) => {
                            return (
                                <Plan plan={plan} key={`${plan.name.toLowerCase()}_${index}`} />
                            )
                        })}
                    </Carousel>

                </div>
            </div>
            :
            <div className={styles.horizontal_section} id="horizontal-container">
                <div className={styles.info}>
                    <h3 className={styles.title}>What financial goal do you want to plan today?</h3>
                    <p className={styles.para}>Select a goal to start planning</p>
                    <img className={styles.icon} src={noteAddIcon} alt="note-add" />
                </div>
                <Carousel carouselContainer={"#horizontal-container"}>
                    {plans.slice(0, 14).map((plan: T_Plan, index: number) => {
                        return (
                            <Plan plan={plan} key={`${plan.name.toLowerCase()}_${index}`} />
                        )
                    })}
                </Carousel>
            </div>
    )
}
