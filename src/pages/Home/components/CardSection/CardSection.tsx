import styles from './CardSection.module.scss'
import treeIcon from '../../../../icons/tree.svg'
import filterIcon from '../../../../icons/filter_alt.svg'
import sortIcon from '../../../../icons/arrow_drop_down.svg'
import sort from '../../../../icons/sort.svg'
import infoIcon from '../../../../icons/info.svg'
import { CardType, HealthType } from '../../../../enums/card'
import Card from '../../../../components/Card'
import { T_Card } from '../../../../types/card'
import Pagination from '../../../../components/Pagination'
import Search from '../../../../components/Search'
import useWindowWidth from '../../../../utils/hooks/useWindowWidth'

const cards: T_Card[] = [
    {
        name: 'Dhairyadev & Sayali’s Vacation  Plan 1',
        icon: treeIcon,
        informations: [
            {
                type: CardType.Amount,
                label: 'Goal Progress',
                value: '112400000'
            },
            {
                type: CardType.Amount,
                label: 'Goal Amount',
                value: '150000000'
            },
            {
                type: CardType.Date,
                label: 'Goal Date',
                value: 'March 2035'
            },
            {
                type: CardType.Health,
                label: 'Goal Health',
                value: HealthType.Excellent
            }
        ],
        goal:{
            current: 80,
            target: 60,
            finishedAt:'16 months'
        },
        boostEnabled: false
    },
    {
        name: 'Dhairyadev & Sayali’s Vacation  Plan 1',
        icon: treeIcon,
        informations: [
            {
                type: CardType.Amount,
                label: 'Goal Progress',
                value: '27000000'
            },
            {
                type: CardType.Amount,
                label: 'Goal Amount',
                value: '50000000'
            },
            {
                type: CardType.Date,
                label: 'Goal Date',
                value: 'Jan 2040'
            },
            {
                type: CardType.Health,
                label: 'Goal Health',
                value: HealthType.Good
            }
        ],
        goal:{
            current: 70,
            target: 70,
            finishedAt: 'On track'
        },
        boostEnabled: false
    },
    {
        name: 'Dhairyadev & Sayali’s Vacation  Plan 1',
        icon: treeIcon,
        informations: [
            {
                type: CardType.Amount,
                label: 'Goal Progress',
                value: '4200000'
            },
            {
                type: CardType.Amount,
                label: 'Goal Amount',
                value: '10000000'
            },
            {
                type: CardType.Date,
                label: 'Goal Date',
                value: 'March 2035'
            },
            {
                type: CardType.Health,
                label: 'Goal Health',
                value: HealthType.Weak
            }
        ],
        goal:{
            current: 65,
            target: 75,
            finishedAt: '2 months'
        },
        boostEnabled: true
    },
    {
        name: 'Dhairyadev & Sayali’s Vacation  Plan 1',
        icon: treeIcon,
        informations: [
            {
                type: CardType.Amount,
                label: 'Goal Progress',
                value: '112400000'
            },
            {
                type: CardType.Amount,
                label: 'Goal Amount',
                value: '150000000'
            },
            {
                type: CardType.Date,
                label: 'Goal Date',
                value: 'March 2035'
            },
            {
                type: CardType.Health,
                label: 'Goal Health',
                value: HealthType.Poor
            }
        ],
        goal:{
            current: 30,
            target: 70,
            finishedAt: '18 months'
        },
        boostEnabled: false
    },
    {
        name: 'Dhairyadev & Sayali’s Vacation  Plan 1',
        icon: treeIcon,
        informations: [
            {
                type: CardType.Amount,
                label: 'Goal Progress',
                value: '112400000'
            },
            {
                type: CardType.Amount,
                label: 'Goal Amount',
                value: '150000000'
            },
            {
                type: CardType.Date,
                label: 'Goal Date',
                value: 'March 2035'
            },
            {
                type: CardType.Date,
                label: 'Goal Health',
                value: 'March 2035'
            }
        ],
        goal:{
            current: 80,
            target: 100,
            finishedAt: '3 months'
        },
        boostEnabled: false
    },
]

export default function CardSection() {
    const {isMobile} = useWindowWidth()
    return (
        <div className={`${styles.card_section} ${isMobile?styles.mobile:''}`}>
            <div className={`${styles.info}`}>
                <h3 className={styles.title}>Track current goals</h3>
                <div className={styles.options}>
                    {!isMobile && 
                        <>
                            <div className={styles.filters}>
                                <p>Filters</p>
                                <img src={filterIcon} alt="filter_icon" />
                            </div>
                            <div className={styles.sort}>
                                <p>Sort by:</p>
                                <p className={styles.sort_options}>Progress (High to Low)</p>
                                <img src={sortIcon} alt="sort_icon" />
                            </div>
                        </>
                    }
                    <Search />
                    {isMobile && 
                        <div className={styles.filter}>
                            <img src={sort} alt="sort" />
                        </div>
                    }
                </div>
            </div>
            {isMobile &&
                <div className={styles.user_info}>
                    <img src={infoIcon} alt="info_icon" />
                    <p>Tap on a card to view more information</p>
                </div>
            }
            <div className={styles.cards}>
                {cards.map((card: T_Card, index:number) => {
                    return <Card key={`card-${index}`} card={card} />
                })}
            </div>
            <Pagination />
        </div>
    )
}
