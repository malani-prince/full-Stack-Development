const Job = require('..\\models\\Jobs')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('..\\errors\\index')

// * Get All Jobs
const getAllJobs = async (req, res) => {
    const jobs = await Job.find({
        createdBy: req.user.userId
    }).sort('createdAt')

    res.status(StatusCodes.OK).json({ jobs, count: jobs.length })
}


// * Get Particular Job Description.
const getJob = async (req, res) => {
    const { user: { userId }, params: { id: jobId } } = req

    const job = await Job.findOne({
        _id: jobId,
        createdBy: userId
    })

    if (!job) {
        throw new NotFoundError(`No Job With id ${jobId}`)
    }

    res.status(StatusCodes.OK).json({ job })
}


// * Create Job
const createJob = async (req, res) => {
    // * Access UserId from Token Value....<"req.user">
    req.body.createdBy = req.user.userId

    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({ job })
}

// * Update Job
const updateJob = async (req, res) => {
    //  
    const {
        body: { company, position },
        user: { userId },
        params: { id: jobId }
    } = req
    // console.log(userId, jobId, company, position)

    // * Must use '' (Single Cots) when define the ( === '' ) for comparison.
    if (company === '' || position === '') {
        throw new BadRequestError("Company or Position field Can not Empty...!")
    }

    const job = await Job.findByIdAndUpdate(
        { _id: jobId, createdBy: userId },
        req.body,
        { new: true, runValidators: true }
    )

    if (!job) {
        throw new NotFoundError(`No Job With id ${jobId}`)
    }

    res.status(200).json({
        job
    })
}

// * Delete Job
const deleteJob = async (req, res) => {
    //  
    const {
        user: { userId },
        params: { id: jobId }
    } = req

    // * Must use '' (Single Cots) when define the ( === '' ) for comparison.
    if (company === '' || position === '') {
        throw new BadRequestError("Company or Position field Can not Empty...!")
    }

    const job = await Job.findByIdAndDelete(
        { _id: jobId, createdBy: userId }
    )

    if (!job) {
        throw new NotFoundError(`No Job With id ${jobId}`)
    }

    res.status(200).json({
        job
    })
}


module.exports = {
    createJob,
    deleteJob,
    getAllJobs,
    updateJob,
    getJob,
} 