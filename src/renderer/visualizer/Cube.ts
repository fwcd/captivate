import * as THREE from 'three'
import VisualizerBase, { UpdateResource } from './VisualizerBase'

export interface CubeConfig {
  type: 'Cube'
}
export default class Cube extends VisualizerBase {
  private cube: THREE.Mesh

  constructor() {
    super()
    let geometry = new THREE.BoxGeometry(2, 2, 2)
    let material = new THREE.MeshBasicMaterial()
    this.cube = new THREE.Mesh(geometry, material)
    this.scene.add(this.cube)
  }

  update(_dt: number, { time }: UpdateResource): void {
    this.cube.rotation.x = time.beats
    this.cube.rotation.y = time.beats
  }
}
