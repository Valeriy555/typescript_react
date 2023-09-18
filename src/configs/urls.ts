const baseURL = process.env.REACT_APP_API


const urls = {
    users:{
        base: '/users',
        byId: (id: number): string => `${urls.users.base}/${id}`
    },

    containers:{
        base: '/containers',
        byId: (id: number): string => `${urls.containers.base}/${id}`
    },

    // containers: '/containers',
    // stages: '/stages',

}

export {
    baseURL,
    urls
}