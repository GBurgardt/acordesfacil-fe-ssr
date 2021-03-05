export const getByGoogle = (value) =>
    fetch(`http://192.168.0.243:3001/google?search=${value}`)
        .then(res => res.clone().json())