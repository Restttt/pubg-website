module.exports = (req, res, next) => {
    if (!req.session.user) {
        req.session.user = {
            email: req.body.email
        }
    }
    return next();
}