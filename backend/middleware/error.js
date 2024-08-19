const errorMiddleware = (err, req, res, next) => {
    if(err) {
        console.log(err)
        res.status(400).json({error: err.message})
    } else {
        console.error(err.stack);
        res.status(500).send('Something went wrong!');
    }
}

module.exports = errorMiddleware