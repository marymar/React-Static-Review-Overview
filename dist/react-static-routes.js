
    import React, { Component } from 'react'
    import { Route } from 'react-router-dom'

    // Template Imports
    import src_containers_Review from '../src/containers/Review'
import src_containers_Home from '../src/containers/Home'
import src_containers_About from '../src/containers/About'
import src_containers_404 from '../src/containers/404'

    // Template Map
    const templateMap = {
      t_0: src_containers_Review,
t_1: src_containers_Home,
t_2: src_containers_About,
t_3: src_containers_404
    }

    // Template Tree
    const templateTree = {c:{"404":{t:"t_3"},"review":{c:{"12":{t:"t_0"},"13":{t:"t_0"}}},"/":{t:"t_1"},"about":{t:"t_2"}}}

    // Get template for given path
    const getComponentForPath = path => {
      const parts = path === '/' ? ['/'] : path.split('/').filter(d => d)
      let cursor = templateTree
      try {
        parts.forEach(part => {
          cursor = cursor.c[part]
        })
        return templateMap[cursor.t]
      } catch (e) {
        return false
      }
    }

    export default class Routes extends Component {
      render () {
        const { component: Comp, render, children } = this.props
        const renderProps = {
          templateMap,
          templateTree,
          getComponentForPath
        }
        if (Comp) {
          return (
            <Comp
              {...renderProps}
            />
          )
        }
        if (render || children) {
          return (render || children)(renderProps)
        }

        // This is the default auto-routing renderer
        return (
          <Route path='*' render={props => {
            let Comp = getComponentForPath(props.location.pathname)
            if (!Comp) {
              Comp = getComponentForPath('404')
            }
            return Comp && <Comp {...props} />
          }} />
        )
      }
    }
  