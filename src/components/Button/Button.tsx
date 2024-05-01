import styles from './Button.module.scss'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    buttonType: 'primary' | 'secondary'
    children: React.ReactNode
    block?: boolean
}
export default function Button({ children, buttonType,block, ...props }: Props) {
    const buttonStyles = buttonType === 'primary' ? styles.primary : styles.secondary
    return (
        <button {...props} className={`${styles.button} ${buttonStyles} ${props.className} ${block ? styles.block : ""}`}>
            {children}
        </button>
    )
}

