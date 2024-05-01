export const converInrFormat = (value: string) => {
    const number = Number(value)
    return number.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 })
}

export const getDarkColor = (current:number,target:number) =>{
    if (target === 100) {
        return '--primary-dark'
    }
    if (current === target) {
        return '--green-light'
    }
    if (current > target) {
        return '--green-dark'
    }
    if (current < target) {
        if (current / target > 0.5) {
            return '--yellow-dark'
        } else {
            return '--red-dark'
        }
    }
}

export const getLightColor = (current:number,target:number) =>{
    if (target === 100) {
        return '--primary-lighter'
    }
    if (current === target) {
        return '--green-lighter'
    }
    if (current > target) {
        return '--green-lighter'
    }
    if (current < target) {
        if (current / target > 0.5) {
            return '--yellow-light'
        } else {
            return '--red-lighter'
        }
    }
}