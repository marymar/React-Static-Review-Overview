import axios from 'axios'
import { reviews, legend } from './public/data/reviews.json'

export default {
  getSiteProps: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getProps: async () => ({
          reviews
        }),
        children: reviews.map(review => ({
          path: `/review/${review.id}`,
          component: 'src/containers/Review',
          getProps: () => ({
            review,
            legend
          })
        }))
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  siteRoot: 'https://marymar.github.io/react-static-review-overview/'
}
