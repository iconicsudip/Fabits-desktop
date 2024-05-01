import { CardType, HealthType } from "../enums/card"

export type T_CardInformation = {
    type: CardType,
    label: string,
    value: string | HealthType
}

export type T_Goal = {
    current: number,
    target: number,
    finishedAt: string
}

export type T_Card = {
    name: string,
    icon: string,
    informations: T_CardInformation[],
    boostEnabled: boolean,
    goal: T_Goal
}