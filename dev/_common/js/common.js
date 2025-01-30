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
	// tl.from(".bg-swirl", {duration:.3, opacity:0})
	// tl.from(".logo_uhn", {duration:.3, opacity:0})


	tl.from(".t1", {duration:.3, opacity:0})

	tl.add("f2", "+=1")
	tl.to([".t1", ".logo_uhn"], {duration:.3, opacity:0}, "f2")
	tl.from(".t2", {duration:.3, opacity:0})
	tl.from(".cta", {duration:.3, opacity:0})
	
}




export { init, olg, bannerSize, start }