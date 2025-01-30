import {olg} from "./proline"
import {origin} from "./helpers/helpers.js"
import {initYPY, ypyScroll} from './ypy_fx.js'
const banner = document.getElementById('banner')
const bannerSize = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
  ease: "power3.out"
});


const {w, h} = bannerSize



function init(){	
	const tl = new TimelineMax({onComplete:()=>{
		
	}})
	tl.set(".frame1", {opacity:1})

	return tl
}

function start(){
	const tl = new TimelineMax()
	tl.add(init())	


	TweenLite.from(".mask", {duration:.7, width:"0%", delay:.1})
	tl.add("f1", .5)
	tl.from(".logo_uhn", {duration:.3, opacity:0}, "f1")

	const xRatio = 40/728
	const x = xRatio * w

	tl.from(".t1", {duration:.5, opacity:0, x:`-=${x}`}, "f1+=.1")


	const timeRatio = .5/728
	const time = Math.max(timeRatio * w, .41)
	console.log(time);
	
	const READ = universalBanner.name==="uhn-v1"?2.8:2.2
	
	tl.add("f2", `+=${READ}`)
	tl.to([".t1", ".logo_uhn"], {duration:time, opacity:0, y:-h}, "f2")
	tl.from([".t2", ".cta"], {duration:time, opacity:0, y:h}, "f2")
	// tl.from(".t2", {duration:.3, opacity:0})
	// tl.from(".cta", {duration:.3, opacity:0})
	
}




export { init, olg, bannerSize, start }