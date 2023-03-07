import MOCK_DATA from './MOCK_DATA.json'

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOCK_DATA)
        }, 300)
    })
}

export const pedirProductosPorId = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOCK_DATA.find(prod => prod.id === id))
        }, 300)
    })
}