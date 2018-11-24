const deviceIds = []
for (let i = 1; i <= 30; i++) {
  deviceIds.push(i)
}
const deviceData = deviceIds.map((id) => ({ id, devices: Math.floor(100 * Math.random()) }))

const data = [
  ...deviceData
]

module.exports = data
