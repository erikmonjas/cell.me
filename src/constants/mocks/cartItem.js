import mockDevice from './device';

const mockColor = mockDevice.options.colors[0].code
const mockStorage = mockDevice.options.storages[0].code

const mockCartItem = {
  id: `${mockDevice.id}-color${mockColor}-storage${mockStorage}`,
  amount: 1,
  color: mockColor,
  storage: mockStorage,
}

export default mockCartItem
