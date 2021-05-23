import devicesInitialState from '../../state/devices/initial.state'
import uiInitialState from '../../state/ui/initial.state'
import cartInitialState from '../../state/cart/initial.state'

export const getMockStore = (params = { variation: {} }) => ({
  devices: devicesInitialState,
  ui: uiInitialState,
  cart: cartInitialState,
  ...params.variation,
})