import React from 'react'
import {useTypedSelector} from '../../redux/store'
import MyUniverseFixture from './MyUniverseFixture'

export default function MyUniverse() {

  const universe = useTypedSelector(state => state.dmx.universe)

  interface FixtureGap {
    channelCount: number
  }

  const elements = universe.reduce((accum, fixture, index) => {
    if (fixture !== null) {
      return <MyUniverseFixture key={index} fixture={fixture} channel={index + 1}/>
    } else {
      
    }
  }, [])

  const elements = universe.filter(fixture => { fixture !== null }).map((fixture, index)=> {
    return (
      <MyUniverseFixture key={channelNum} fixture={fixture}
    )
  })

  const elements = Object.entries(universe).map(([channelNum, fixture]) => {
    return (
      <MyUniverseFixture key={channelNum} fixture={fixture} />
    )
  })

  return (
    <div style={{ backgroundColor: '#ffffff07', padding: '0.5rem', height: '100%', maxHeight: '100%'}}>
      <div style={{fontSize: '1.5rem'}}>Universe</div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', flexWrap: 'wrap', overflow: 'scroll'}}>
        {elements}
      </div>
      <div style={{backgroundColor: '#0007', width: '100%', height: '50%'}}>
        Fixture placement
      </div>
    </div>
  )
}
