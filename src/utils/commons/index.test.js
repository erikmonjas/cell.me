import { getRealID } from '.'

describe('utils commons', () => {
  it('should get real id', () => {
    expect(getRealID('testid-color2000-storage5245')).toEqual('testid')
  })
})
