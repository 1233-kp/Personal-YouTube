const asyncHander = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch(next);
    };
};

export { asyncHander }


/*
const asyncHander = (fn) => {
    return async (req, res, next) => {
        try { 
            await fn(req, res, next);
        } catch (error) {
            res.status(error.code || 500).json({
                success: false,
                message: error.message || "Internal Server Error"
            });
            next(error);
        }
    }
}*/