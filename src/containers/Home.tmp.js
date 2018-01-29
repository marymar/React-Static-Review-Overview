import React from 'react'
import { getSiteProps } from 'react-static'

//
import Review from './Review'

export default getSiteProps(({ reviews }) => (
  <div>
    {reviews}
    {/* <Review /> */}
  </div>
))
