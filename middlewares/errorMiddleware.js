const errorHandler = async(err, req, res, next) => {
    const defaultError = {
        statusCode: 500,
        message: err,
    };

    // Handle missing field error (ValidationError)
    if (err.name === 'ValidationError') {
        defaultError.statusCode = 400;
        defaultError.message = Object.values(err.errors)
            .map((item) => item.message)
            .join(',');
    }

    // Handle duplicate key error (MongoDB unique constraint)
    if (err.code && err.code === 11000) {
        defaultError.statusCode = 400;
        defaultError.message = `${Object.keys(err.keyValue)} field has to be unique`;
    }

    // Send the error response to the client
    res.status(defaultError.statusCode).json({ message: defaultError.message });
};

export default errorHandler;