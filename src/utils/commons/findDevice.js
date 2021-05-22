export default ({ details, id }) => Object.values(details).find(device => device.id === id)
