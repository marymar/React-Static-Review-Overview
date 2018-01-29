import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getRouteProps } from 'react-static'

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <ul>
        {
          this.props.reviews.map(review => (
            <li key={`item-${review.id}`}>
              <a key={`item-link-${review.id}`} href={`review/${review.id}`}>Sprint {review.id} - {review.name}</a>
            </li>
          ))
        }
      </ul>
    )
  }
}

HomePage.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default getRouteProps(HomePage)
