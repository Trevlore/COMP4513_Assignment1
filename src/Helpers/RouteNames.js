export const routeNames = {
    Movies: {
        name: "/Movies",
        regex: new RegExp("^/Movies(\\?.*)?$", 'i')
    },
    MovieDetails: {
        name: "/Movies/Details",
        regex: new RegExp("^/Movies/Details(\\?.*)?$", 'i')
    },
    Home: {
        name: "/",
        regex: new RegExp("^/$")
    }
};