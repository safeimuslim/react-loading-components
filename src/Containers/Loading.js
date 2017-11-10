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
  const loaders = [<Audio {...props} />, <BallTriangle {...props} />, <Bars {...props} />, <Circles {...props} />, <Grid {...props} />, <Hearts {...props} />, <Oval {...props} />, <Puff {...props} />, <Rings {...props} />, <SpinningCircles {...props} />, <TailSpin {...props} />, <ThreeDots {...props} /> ]
  const types = ['audio', 'ball_triangle', 'bars', 'circles', 'grid', 'hearts', 'oval', 'puff', 'rings', 'spinning_circles', 'tail_spin', 'three_dots']
  const indexOfTypes = types.indexOf(props.type)
  return indexOfTypes < 0 ? loaders[0] : loaders[indexOfTypes]
}