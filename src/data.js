const polyPositions = [
    {desc: "mainStagePos", coords: [
        [61.49304, 23.7643],
        [61.49312, 23.765325],
        [61.49252, 23.76555],
        [61.49244, 23.76459],
      ]},
    
      {desc: "foodOne", coords: [
        [61.49302, 23.762846],
        [61.493035, 23.762972],
        [61.49299, 23.762993],
        [61.492961, 23.762859],
      ]},
      {desc: "stalls", coords: [
        [61.49306, 23.763382],
        [61.49312, 23.764154],
        [61.493, 23.7642],
        [61.49294, 23.76343],
      ]},
    
      {desc: "stadionExitOne", coords: [
        [61.49294, 23.76194],
        [61.4932, 23.76235],
        [61.493, 23.76271],
        [61.49279, 23.76245],
      ]},
    
      {desc: "stadionExitTwo", coords: [
        [61.49232, 23.76258],
        [61.4921, 23.76219],
        [61.49191, 23.76305],
        [61.49221, 23.76314],
      ]},
    
      {desc: "bridge", coords: [
        [61.49423, 23.76031],
        [61.49421, 23.76024],
        [61.49379, 23.7604],
        [61.49337, 23.76062],
        [61.49338, 23.76071],
        [61.49381, 23.76049],
        [61.494, 23.7604],
      ]},
    
      {desc: "toilet1", coords: [
        [61.4931271, 23.7600485],
        [61.4931674, 23.7602655],
        [61.4930855, 23.7603299],
        [61.4930394, 23.7601207],
      ]},
    
      {desc: "firstAid", coords: [
        [61.4932606, 23.7608396],
        [61.493235, 23.760853],
        [61.4932625, 23.7611145],
        [61.4932858, 23.7610969],
      ]},
    
      {desc: "entrance1", coords: [
        [61.4942756, 23.7602012],
        [61.4942884, 23.7603125],
        [61.4942353, 23.7603447],
        [61.4942058, 23.7602374],
      ]},
    
      {desc: "yleStudio", coords: [
        [61.4918819, 23.7595481],
        [61.4920125, 23.7596125],
        [61.4919664, 23.7601006],
        [61.4918461, 23.7600631],
      ]},
    
      {desc: "toilet2", coords: [
        [61.4919245, 23.7621469],
        [61.491831, 23.7622125],
        [61.4918643, 23.7626497],
        [61.4919564, 23.7625772],
      ]},
    
      {desc: "vipArea", coords: [
        [61.4927066, 23.7615434],
        [61.4927181, 23.7616534],
        [61.4927988, 23.7616185],
        [61.492818, 23.7618036],
        [61.492079, 23.7620949],
        [61.4920585, 23.7619205],
        [61.4922403, 23.7616925],
      ]},
    
      {desc: "TentStage", coords: [
        [61.4926808, 23.7595169],
        [61.4925707, 23.7602303],
        [61.4919408, 23.7596617],
        [61.4919997, 23.7590823],
      ]}
]

const sensors = [{desc:"sens LatLng(61.494152, 23.760284)",coords:[61.494152019129,23.76028418540955]},{desc:"sens LatLng(61.494055, 23.760338)",coords:[61.494054732888564,23.760337829589847]},{desc:"sens LatLng(61.493978, 23.760402)",coords:[61.49397792774705,23.7604022026062]},{desc:"sens LatLng(61.493911, 23.760424)",coords:[61.49391136313773,23.760423660278324]},{desc:"sens LatLng(61.493814, 23.760424)",coords:[61.49381407614488,23.760423660278324]},{desc:"sens LatLng(61.493712, 23.760488)",coords:[61.493711668455404,23.760488033294678]},{desc:"sens LatLng(61.493645, 23.76052)",coords:[61.493645103276506,23.76052021980286]},{desc:"sens LatLng(61.493548, 23.760552)",coords:[61.493547815451194,23.76055240631104]},{desc:"sens LatLng(61.493497, 23.760638)",coords:[61.493496611210446,23.760638236999515]},{desc:"sens LatLng(61.493425, 23.760638)",coords:[61.493424925131826,23.760638236999515]},
]

function getData() {
   return polyPositions.map( (poly, i) => {
	  const [ lat, lng ] = poly.coords[0]
	  console.log("pos ", lat , lng)
	  return { i, devices: 250*Math.sin((new Date().getTime()+i*1000232^2324321)/(60*0.3*1000)) + 250, lat, lng, time: new Date() }
	}).concat(sensors.map( (poly, i) => {
	  const [ lat, lng ] = poly.coords
	  console.log("pos ", lat , lng)
	  return { i, devices: 250*Math.sin((new Date().getTime()+i*1000232^2324321)/(60*0.3*1000)) + 250, lat, lng, time: new Date() }
	}))
} 



module.exports = getData
