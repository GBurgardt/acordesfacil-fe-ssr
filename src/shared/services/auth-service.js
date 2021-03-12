
export const searchBySongName = (value) =>
    fetch(`http://192.168.0.243:3001/search/${value}`)
        .then(res => res.clone().json())

/**
 * Obsoleto: Google detecta ip
 * @param {*} value 
 */
export const getByGoogle = (value) =>
    fetch(`http://192.168.0.243:3001/google?search=${value}`)
        .then(res => res.clone().json())