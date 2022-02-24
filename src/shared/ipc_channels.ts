export default {
  new_time_state: 'new_time_state',
  dmx_connection_update: 'dmx_connection_update',
  midi_connection_update: 'midi_connection_update',
  new_control_state: 'new_control_state',
  user_command: 'user_command',
  dispatch: 'dispatch',
  load_file: 'load_file',
  save_file: 'save_file',
  open_visualizer: 'open_visualizer',
} as const

export interface SetLinkEnabled {
  type: 'SetLinkEnabled'
  isEnabled: boolean
}
export interface IncrementTempo {
  type: 'IncrementTempo'
  amount: number
}

export interface EnableStartStopSync {
  type: 'EnableStartStopSync'
  isEnabled: boolean
}

export interface SetIsPlaying {
  type: 'SetIsPlaying'
  isPlaying: boolean
}

export interface SetBPM {
  type: 'SetBPM'
  bpm: number
}

// Redux Action-like commands Renderer -> Main
export type UserCommand =
  | SetLinkEnabled
  | IncrementTempo
  | EnableStartStopSync
  | SetIsPlaying
  | SetBPM
