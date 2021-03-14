
export const createFavorite = (favorite) =>
    fetch(
        `http://192.168.0.243:3001/favorites`,
        {
            method: 'POST',
            body: {
                idPlaylist: favorite.idPlaylist,
                href: favorite.href,
                description: favorite.description
            }
        }
    )
        .then(res => res.clone().json())


export const searchFavorites = (value) =>
    fetch(`http://192.168.0.243:3001/favorites`)
        .then(res => res.clone().json())

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