import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getRouteProps } from 'react-static'

import Header from './Header'
import ReviewSection from './ReviewSection'
import Goals from './Goals'
import Legend from './Legend'


class Review extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const review = this.props.review
    const legend = this.props.legend
    return (
      <div>
        <Header name={review.name} quote={review.quote} />
        <Goals id={review.id} period={review.period} goals={review.goals} />

        <ul className="sections-list">
          {review.sections.map(section => <li className="sections-list__item" key={`section${section.title}`}><ReviewSection section={section} /></li>)}
        </ul>
        <hr />
        <Legend legend={legend} />
      </div>
    )
  }
}

Review.propTypes = {
  review: PropTypes.object.isRequired,
  legend: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default getRouteProps(Review)
