export type T_NavSubItem = {
    name: string,
    icon: string,
    to: string
}

export type T_NavItem = {
    segment: string,
    items: T_NavSubItem[]
}