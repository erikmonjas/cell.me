export const deviceWithoutDetails = {
  id: 'jheroiwr',
  model: 'Liquid z6',
  brand: 'acer',
  price: '120',
  imgUrl: '/test.png',
}

export const deviceWithDetails = {
  ...deviceWithoutDetails,
  options: {
    colors: [
      {code: 1000, name: 'Mystic Black'},
      {code: 1001, name: 'PureWhite'},
    ],
    storages: [
      {code: 2000, name: '16GB'},
      {code: 2001, name: '32GB'},
    ],
  },
  radio: 'FM radio'
}

export default deviceWithDetails