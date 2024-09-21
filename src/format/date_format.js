export const formatDate = (dateString) => {
    const parts = dateString.split('T')[0].split('-')
    const year = parts[0].slice(-2)
    const month = parts[1]
    const day = parts[2]

    const date = `${day}/${month}/${year}`

    return date
}