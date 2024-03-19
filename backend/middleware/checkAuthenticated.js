export const chechAuthenticated = async (request, response, next) => {
    if (request.isAuthenticated()) {
        return next()
    }

    response.redirect(process.env.CLIENT_BASE_URL + "/login")
}