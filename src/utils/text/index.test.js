import { firstLetterUpperCase } from "."

describe('Text tests', () => {
  it('should return first letter uppercase', () => {
    expect(firstLetterUpperCase('abcde')).toEqual('Abcde')
  })
  
})
