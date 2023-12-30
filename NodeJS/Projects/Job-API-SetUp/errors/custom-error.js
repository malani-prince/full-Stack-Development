class CustomAPIError extends Error {
    // simply call constructor and call the super class method.
    constructor(message) {
        super(message)
    }
}

module.exports = CustomAPIError