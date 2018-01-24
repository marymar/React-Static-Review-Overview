import React from 'react'
import { getSiteProps } from 'react-static'

import review from '../data/review.json'
import Header from './Header'
import ReviewSection from './ReviewSection'
import Goals from './Goals'
import Legend from './Legend'

export default getSiteProps(() => (
  <div>
    <Header name={review.name} quote={review.quote} />
    <Goals number={review.number} period={review.period} goals={review.goals} />

    <ul className="sections-list">
      {review.sections.map(section => <li className="sections-list__item" key={`section${section.title}`}><ReviewSection section={section} /></li>)}
    </ul>
    <hr />
    <Legend legend={review.legend} />
  </div>
))

