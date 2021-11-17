import ReactDOM from 'react-dom'
import React from 'react'
import { Canvas } from 'react-three-fiber'
import { Stars, TrackballControls, Box } from 'drei'
import './styles.css'

ReactDOM.render(
  <Canvas camera={{ position: [0, 0, 10], fov: 110 }}>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box position={[3, -1, 0]}>
      <meshStandardMaterial attach="material" color="orange" />
    </Box>
    <Box position={[0, -4.5, 0]}>
      <meshStandardMaterial attach="material" color="orange" />
    </Box>
    <Box position={[0, 5, 0]}>
      <meshStandardMaterial attach="material" color="orange" />
    </Box>
    <Box position={[7, 5, 0]}>
      <meshStandardMaterial attach="material" color="orange" />
    </Box>
    <Stars radius={100} depth={12} count={5000} factor={2} saturation={0} fade />
    <TrackballControls />
  </Canvas>,

  document.getElementById('root')
)
