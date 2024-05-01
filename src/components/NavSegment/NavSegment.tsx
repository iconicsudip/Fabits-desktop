import React from 'react'
import styles from './NavSegment.module.scss'

interface Props {
    segmentName: string
    children: React.ReactNode
}

export default function NavSegment({segmentName,children}:Props) {
    return (
        <div className={styles.nav_segment}>
            {segmentName && <h5 className={styles.segment_heading}>{segmentName}</h5>}
            {children}
        </div>
    )
}
