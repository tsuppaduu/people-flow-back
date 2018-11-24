let sensors = [
//sisaankaynti silta
{ multiplier: 3, scanners: [{ desc:"sens LatLng(61.494152, 23.760284)",coords:[61.494152019129,23.76028418540955]},{desc:"sens LatLng(61.494055, 23.760338)",coords:[61.494054732888564,23.760337829589847]},{desc:"sens LatLng(61.493978, 23.760402)",coords:[61.49397792774705,23.7604022026062]},{desc:"sens LatLng(61.493911, 23.760424)",coords:[61.49391136313773,23.760423660278324]},{desc:"sens LatLng(61.493814, 23.760424)",coords:[61.49381407614488,23.760423660278324]},{desc:"sens LatLng(61.493712, 23.760488)",coords:[61.493711668455404,23.760488033294678]},{desc:"sens LatLng(61.493645, 23.76052)",coords:[61.493645103276506,23.76052021980286]},{desc:"sens LatLng(61.493548, 23.760552)",coords:[61.493547815451194,23.76055240631104]},{desc:"sens LatLng(61.493497, 23.760638)",coords:[61.493496611210446,23.760638236999515]},{desc:"sens LatLng(61.493425, 23.760638)",coords:[61.493424925131826,23.760638236999515]}]}
//main stage
,{ multiplier: 5, scanners: [{desc:"sens LatLng(61.492631, 23.759544)",coords:[61.492631246797266,23.75954389572144]},{desc:"sens LatLng(61.492606, 23.759726)",coords:[61.49260564393331,23.759726285934452]},{desc:"sens LatLng(61.49257, 23.759984)",coords:[61.49256979988838,23.75998377799988]},{desc:"sens LatLng(61.492478, 23.759984)",coords:[61.49247762929757,23.75998377799988]},{desc:"sens LatLng(61.492478, 23.759705)",coords:[61.49247762929757,23.75970482826233]},{desc:"sens LatLng(61.492498, 23.759565)",coords:[61.492498111674664,23.75956535339356]},{desc:"sens LatLng(61.492432, 23.759426)",coords:[61.49243154389977,23.75942587852478]},{desc:"sens LatLng(61.49237, 23.759769)",coords:[61.492370096596574,23.75976920127869]},{desc:"sens LatLng(61.492309, 23.759426)",coords:[61.49230864917201,23.75942587852478]},{desc:"sens LatLng(61.492273, 23.759683)",coords:[61.49227280478498,23.759683370590214]},{desc:"sens LatLng(61.492196, 23.759694)",coords:[61.49219599524522,23.75969409942627]},{desc:"sens LatLng(61.492196, 23.759437)",coords:[61.49219599524522,23.75943660736084]},{desc:"sens LatLng(61.492119, 23.759211)",coords:[61.492119185515854,23.759211301803592]},{desc:"sens LatLng(61.492078, 23.759512)",coords:[61.49207822024933,23.759511709213257]}]}
//vessat
,{ multiplier: 2, scanners: [{desc:"sens LatLng(61.493461, 23.764812)",coords:[61.493460768191774,23.764811754226688]},{desc:"sens LatLng(61.493435, 23.764586)",coords:[61.49343516601031,23.764586448669434]},{desc:"sens LatLng(61.49341, 23.764383)",coords:[61.49340956380778,23.764382600784305]},{desc:"sens LatLng(61.493307, 23.763074)",coords:[61.493307154787026,23.763073682785038]},{desc:"sens LatLng(61.493307, 23.763299)",coords:[61.493307154787026,23.76329898834229]}]}
//main stage
,{ multiplier: 5, scanners: [{desc:"sens LatLng(61.493054, 23.764887)",coords:[61.49305369101133,23.764886856079105]},{desc:"sens LatLng(61.493046, 23.764731)",coords:[61.49304601025861,23.76473128795624]},{desc:"sens LatLng(61.493033, 23.764506)",coords:[61.4930332089999,23.764505982398987]},{desc:"sens LatLng(61.492969, 23.764533)",coords:[61.492969202627314,23.76453280448914]},{desc:"sens LatLng(61.492985, 23.764742)",coords:[61.49298456416874,23.7647420167923]},{desc:"sens LatLng(61.493, 23.764957)",coords:[61.49299992570257,23.764956593513492]},{desc:"sens LatLng(61.492895, 23.764951)",coords:[61.49289495507015,23.764951229095463]},{desc:"sens LatLng(61.492895, 23.764769)",coords:[61.49289495507015,23.764768838882446]},{desc:"sens LatLng(61.492869, 23.76456)",coords:[61.492869352423156,23.764559626579288]},{desc:"sens LatLng(61.492795, 23.764581)",coords:[61.49279510462778,23.764581084251404]},{desc:"sens LatLng(61.492729, 23.764576)",coords:[61.49272853748818,23.764575719833374]},{desc:"sens LatLng(61.492631, 23.764581)",coords:[61.492631246797266,23.764581084251404]},{desc:"sens LatLng(61.492634, 23.764747)",coords:[61.49263380708251,23.764747381210327]},{desc:"sens LatLng(61.492662, 23.764951)",coords:[61.49266197020623,23.764951229095463]},{desc:"sens LatLng(61.492595, 23.765032)",coords:[61.49259540278183,23.76503169536591]},{desc:"sens LatLng(61.492575, 23.76479)",coords:[61.492574920468776,23.76479029655457]},{desc:"sens LatLng(61.492557, 23.764495)",coords:[61.49255699843377,23.764495253562927]},{desc:"sens LatLng(61.49246, 23.764522)",coords:[61.49245970720653,23.76452207565308]},{desc:"sens LatLng(61.492475, 23.76478)",coords:[61.4924750689995,23.76477956771851]},{desc:"sens LatLng(61.492496, 23.764973)",coords:[61.49249555137827,23.76497268676758]},{desc:"sens LatLng(61.492519, 23.765128)",coords:[61.4925185940383,23.765128254890445]}]}
//random points
,{ multiplier: 2, scanners: [{"desc":"sens LatLng(61.493056, 23.761797)","coords":[61.4930562512618,23.761796951293945]},{"desc":"sens LatLng(61.493015, 23.761572)","coords":[61.49301528722885,23.761571645736698]},{"desc":"sens LatLng(61.492913, 23.7611)","coords":[61.49291287691053,23.761099576950073]},{"desc":"sens LatLng(61.492734, 23.760885)","coords":[61.49273365804245,23.760885000228885]},{"desc":"sens LatLng(61.492549, 23.760488)","coords":[61.492549317558485,23.760488033294678]},{"desc":"sens LatLng(61.492324, 23.760306)","coords":[61.49232401103952,23.760305643081665]},{"desc":"sens LatLng(61.492775, 23.760166)","coords":[61.49277462244615,23.760166168212894]},{"desc":"sens LatLng(61.493123, 23.761046)","coords":[61.49312281770035,23.76104593276978]},{"desc":"sens LatLng(61.493404, 23.762366)","coords":[61.49340444336476,23.762365579605106]},{"desc":"sens LatLng(61.493512, 23.763041)","coords":[61.49351197249152,23.76304149627686]},{"desc":"sens LatLng(61.493189, 23.763009)","coords":[61.493189383996516,23.763009309768677]}]},
{ multiplier: 1, scanners: [{"desc":"sens LatLng(61.492964, 23.764082)","coords":[61.492964082111804,23.764082193374637]},{"desc":"sens LatLng(61.492846, 23.764039)","coords":[61.49284631002286,23.7640392780304]},{"desc":"sens LatLng(61.492749, 23.764061)","coords":[61.49274901970015,23.764060735702515]},{"desc":"sens LatLng(61.492647, 23.764147)","coords":[61.492646608505524,23.76414656639099]},{"desc":"sens LatLng(61.49256, 23.764157)","coords":[61.49255955872513,23.76415729522705]},{"desc":"sens LatLng(61.492421, 23.764157)","coords":[61.49242130269099,23.76415729522705]},{"desc":"sens LatLng(61.492432, 23.763632)","coords":[61.49243154389977,23.763631582260132]},{"desc":"sens LatLng(61.492575, 23.763524)","coords":[61.492574920468776,23.763524293899536]},{"desc":"sens LatLng(61.492739, 23.763481)","coords":[61.49273877859584,23.7634813785553]},{"desc":"sens LatLng(61.492892, 23.76332)","coords":[61.492892394806404,23.763320446014408]},{"desc":"sens LatLng(61.492795, 23.762891)","coords":[61.49279510462778,23.762891292572025]},{"desc":"sens LatLng(61.49259, 23.762859)","coords":[61.49259028220482,23.762859106063846]},{"desc":"sens LatLng(61.492508, 23.762945)","coords":[61.492508352858174,23.762944936752323]},{"desc":"sens LatLng(61.492442, 23.763127)","coords":[61.49244178510519,23.763127326965336]}] },
// ENTRANCES
{ multiplier: 3, scanners: [{"desc":"sens LatLng(61.493029, 23.762529)","coords":[61.49302936862126,23.762529194355015]},{"desc":"sens LatLng(61.492183, 23.762795)","coords":[61.492183193636826,23.76279473304749]},{"desc":"sens LatLng(61.49211, 23.762505)","coords":[61.4921102243684,23.76250505447388]}] }
]
sensors = sensors.map(({ scanners, ...rest }) => ({ ...rest, scanners: scanners.map((scanner, i) => ({ id: i, ...scanner, fake: true }))}))

let liveSensors = [{ multiplier: 1, scanners: [] }]

function getData() {
  let allSensors = sensors.concat(liveSensors)

  let results = []
  allSensors.forEach(({ multiplier, scanners }, i) => {

    scanners.forEach((poly, i) => {
      const [ lat, lng ] = poly.coords
      let devices
      if (!poly.fake) {
        devices = poly.devices
      } else {
        devices = (50*Math.sin((new Date().getTime()+i*1000232^2324321)/(60*0.3*1000)) + 50) * multiplier
      }
      results.push({ id: poly.id, devices, lat, lng, time: new Date() })
    })
  })
  return results
} 

// TODO FIX
const updateLiveSensors = (data) => {
  const { id, lat, lng, devices } = data
  console.log('got: ' + id + ' with devices: ' + devices)
  if (!liveSensors.find((s) => s.id === id)) {
    liveSensors.push({ id, coords: [lat, lng], desc: `real sensor at ${lat} ${lng}`, fake: false, devices })
  } else {
    liveSensors = liveSensors.map((sensor) => {
      if (sensor.id !== id) {
        return sensor
      }
      return { ...sensor, devices }
    })
  }
}



module.exports = { getData, updateLiveSensors }
