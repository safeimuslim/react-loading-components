import React from 'react'
import Audio from '../Components/Audio'
import BallTriangle from '../Components/BallTriangle'
import Bars from '../Components/Bars'
import Circles from '../Components/Circles'
import Grid from '../Components/Grid'
import Hearts from '../Components/Hearts'
import Oval from '../Components/Oval'
import Puff from '../Components/Puff'
import Rings from '../Components/Rings'
import SpinningCircles from '../Components/SpinningCircles'
import TailSpin from '../Components/TailSpin'
import ThreeDots from '../Components/ThreeDots'

/**
 * type: 
 */

 export default (props) => {
  let params = {...props}
  if (!params.width) {
    params.width = 64
  }
  
  if (!params.height) {
    params.height = 64
  }
  
  if (!params.fill) {
    params.fill = '#ffffff'
  }
  const loaders = 
                [
                  <Audio {...params} />, <BallTriangle {...params} />, <Bars {...params} />, <Circles {...params} />, <Grid {...params} />, 
                  <Hearts {...params} />, <Oval {...params} />, <Puff {...params} />, <Rings {...params} />, <SpinningCircles {...params} />, 
                  <TailSpin {...params} />, <ThreeDots {...params} /> 
                ]
  const types = ['audio', 'ball_triangle', 'bars', 'circles', 'grid', 'hearts', 'oval', 'puff', 'rings', 'spinning_circles', 'tail_spin', 'three_dots']
  const indexOfTypes = types.indexOf(params.type)
  return indexOfTypes < 0 ? loaders[0] : loaders[indexOfTypes]
}