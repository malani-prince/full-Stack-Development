

const getAllJobs = async (req, res) => {
    res.status(200).json({
        msg: "Get All Jobs"
    })
}

const getJob = async (req, res) => {
    res.status(200).json({
        msg: "Get Job"
    })
}

const createJob = async (req, res) => {
    res.status(200).json(req.user)
}

const updateJob = async (req, res) => {
    res.status(200).json({
        msg: "Update Job"
    })
}

const deleteJob = async (req, res) => {
    res.status(200).json({
        msg: "Delete Job"
    })
}


module.exports = {
    createJob,
    deleteJob,
    getAllJobs,
    updateJob,
    getJob,
} 