'use client'
import Questions from '@components/Questions'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

const QuestionPage = () => {
    const params = useParams()
    
  const type = params.type;
  return (
    <div>
      <Questions type={type}/>
    </div>
  )
}

export default QuestionPage
