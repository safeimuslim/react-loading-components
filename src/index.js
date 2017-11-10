import React, { Component } from 'react'
import Loading from './Containers/Loading'

class ReactLoadingComponent extends  Component  {
  render () {
    return <Loading {...this.props} />
  }
}

export default ReactLoadingComponent