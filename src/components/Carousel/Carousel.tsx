import React, { useEffect, useState } from 'react'
import styles from './Carousel.module.scss'
import leftArrowIcon from '../../icons/left_arrow.svg'
import rightArrowIcon from '../../icons/right_arrow.svg'

interface Props {
    children: React.ReactNode,
    carouselContainer?: string
}

export default function Carousel({ children, carouselContainer }: Props) {
    const [container, setContainer] = useState<HTMLDivElement | null>(null)
    const [startX, setStartX] = useState<number | null>(null);

    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        setStartX(event.touches[0].clientX);
    };

    const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
        if (!startX || !container) return;
        const currentX = event.touches[0].clientX;
        const diff = startX - currentX;
        container.scrollLeft += diff;
        setStartX(currentX);
    };

    const handleTouchEnd = () => {
        setStartX(null);
    };

    const handleNext = () => {
        if (container) {
            container.scrollLeft = container.scrollLeft + container.clientWidth
        }
    }
    const handlePrev = () => {
        if (container) {
            container.scrollLeft = container.scrollLeft - container.clientWidth
        }
    }

    container?.addEventListener('scroll', () => {
        if (container.scrollLeft === 0) {
            document.querySelector('#prev_sheet')?.classList.add(styles.hide)
        } else {
            document.querySelector('#prev_sheet')?.classList.remove(styles.hide)
        }
        if (container.scrollLeft === container.scrollWidth - container.clientWidth) {
            document.querySelector('#next_sheet')?.classList.add(styles.hide)
        } else {
            document.querySelector('#next_sheet')?.classList.remove(styles.hide)
        }
    })

    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === 'ArrowRight') {
            handleNext();
        } else if (event.key === 'ArrowLeft') {
            handlePrev();
        }
    };
    useEffect(() => {
        document.querySelector('#prev_sheet')?.classList.add(styles.hide)
        setContainer(document.querySelector(carouselContainer ?? '.carousel-default-container') as HTMLDivElement)
    }, [])

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [container]);
    return (
        <div className={styles.carousel}>
            <div className={`${styles.carousel_wrapper} carousel-default-container`} id="default-container"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {children}
            </div>
            <div className={styles.prev_sheet} id="prev_sheet">
                <button onClick={handlePrev} className={styles.prev}>
                    <img src={leftArrowIcon} alt="left_arrow" />
                </button>
            </div>
            <div className={styles.next_sheet} id="next_sheet">
                <button onClick={handleNext} className={styles.next}>
                    <img src={rightArrowIcon} alt="right_arrow" />
                </button>
            </div>
        </div>
    )
}
