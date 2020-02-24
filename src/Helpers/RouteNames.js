export const routeNames = {
    Movies: {
        name: "/Movie",
        regex: new RegExp("^/Movie(\\?.*)?$", 'i')
    },
    MovieDetails: {
        name: "/Movie/Details",
        regex: new RegExp("^\/Movie\/Details(\\?.*)?$", 'i')
    },
    Home: {
        name: "/",
        regex: new RegExp("^/$")
    }
};