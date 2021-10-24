import devicesInitialState from '../../state/devices/initial.state'
import uiInitialState from '../../state/ui/initial.state'
import cartInitialState from '../../state/cart/initial.state'

export const getMockStore = (update) => ({
  devices: devicesInitialState,
  ui: uiInitialState,
  cart: cartInitialState,
  ...update,
})