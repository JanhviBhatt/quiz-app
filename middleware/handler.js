import { check, validationResult } from 'express-validator'
import nextConnect from 'next-connect';

const initValidation = (validations) => {
    return async (req, res, next) => {
        await Promise.all(validations.map((validation) => validation.run(req)))
        const errors = validationResult(req)
        if (errors.isEmpty()) return next()
        const err = []
        errors.array().map(error => err.push(error.msg))

        //status: 400 Bad Request
        res.status(400).json({ success: false, data: null, error: err })
    }
}

// u can customize where your validator runs
// for example u can use this for validate your PUT request :
//          const put = (middleware) => {
//              return nextConnect().put(middleware)
//          }

// when u call this its ONLY run in post request
const post = (middleware) => {
    return nextConnect().post(middleware)
}

// u can set onError , onNoMatch and global middleware or etc
//  handler = nextConnect({ onError, onNoMatch }).use(SOME_MIDDLEWARE) 
const handler = nextConnect()
export default handler
export { initValidation, post, check /* Dont forget to use export your PUT middleware or other*/ }
