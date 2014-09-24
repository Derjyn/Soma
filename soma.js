/**
 * Soma Javascript
 *
*/

$(document).ready(function () {
	// ParticleGround stuff
  $('#bg-fx').particleground({
  	minSpeedX: 0.2,
  	maxSpeedX: 0.5,
  	minSpeedY: 0.2,
  	maxSpeedY: 0.5,
  	directionX: 'center',		// center/up/down. center has the dots bouncing off edge of canvas
  	dirextionY: 'center',		// center/up/down. center has the dots bouncing off edge of canvas
  	density: 6000,					// particle density, one particle every n pixels (higher = less)
  	dotColor: 'rgb(80,80,80)',
  	lineColor: 'rgb(180,180,180)',
  	particleRadius: 1,			// dot size
  	lineWidth: 0.3,
  	curvedLines: false,
  	proximity: 70,					// proximity before dots join
  	parallax: false,
  	parallaxMultiplier: 25	// lower values make the parallax effect more extreme
	});
});
