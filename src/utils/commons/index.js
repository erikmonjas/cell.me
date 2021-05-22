export const getRealID = id => {
  const [firstIDSplit] = id.split('color')
  return firstIDSplit.substring(0, firstIDSplit.length - 1)
} 