import EmailUser from "@models/userEmail";
import { NextRequest, NextResponse } from "next/server";
const { query, validationResult } = require('express-validator');
const { connectToDB } = require("@utils/database");

import handler, { initValidation, post, check } from "../../middleware/handler"

const validator = initValidation(
  [
    check('username').notEmpty().withMessage('username is empty'),
    check('password').notEmpty().withMessage('password is empty'),
    // all other validation 
  ]
)
connectToDB()


// Creating User
export async function POST(request){
    const result = validationResult(request);
    if (!result.isEmpty()) {
    res.send({ errors: result.array() });
    }
    try{
      const reqbody = await request.json()
      const {username, email, password} = reqbody

      const user = await EmailUser.findOne({email})
      if(user){
        return NextResponse.json({error:"User already exists!"},{status:400})
      }
      // hash password
      const salt = await bcryptjs.genSalt(10)
      const hashedPassword = await bcryptjs.hash(password,salt)

      const newUser =  new EmailUser({
         username, email, password: hashedPassword,
      })

      await newUser.save()
      return NextResponse.json({message:"New User has been created!"},{status:201})

    }catch(error){
        return NextResponse.json({error:error.message},{status:500})
    }
}