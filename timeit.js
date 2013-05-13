(function(window, document) {
	if(!performance.timing) throw new Error('There is no performance.timing');
	var timing = performance.timing,
			connection = Math.round(timing.connectEnd - timing.connectStart);
			dns = Math.round(timing.domainLookupEnd - timing.domainLookupStart),
			ttfb = Math.round(timing.responseStart - timing.connectEnd),
			basePage = Math.round(timing.responseEnd - timing.responseEnd),
			loadTime = Math.round(timing.loadEventStart - timing.connectEnd),
			frontEnd = Math.round(timing.loadEventStart - timing.responseEnd);

	var style = document.createElement('style');
	style.innerText = '*{box-sizing:border-box!important}.overly{position:fixed;background:#f1f1f1;border-bottom:1px solid #dedede;box-shadow:0 2px 5px rgba(1,1,1,0.08);width:100%;height:20%;padding:10px;top:0;left:0;z-index:999998}.overly a{color:#444;font-weight:bold;font-size:11px;text-decoration:none}.overly .project-name{font-size:16px}.overly,.timeit-modal{max-height:20%;font-family:"Helvetica Neue","Helvetica",Helvetica,Arial,sans-serif!important}.timeit-modal{position:fixed;top:0;left:25%;width:50%;min-height:25%;z-index:999999;font-weight:normal;font-style:normal;font-size:14px;line-height:1;color:#222}.block:before,.block:after{content:" ";display:table}.block:after{clear:both}.block{*zoom:1}.block{padding:0 10px;float:left;width:16.666666667%; max-height:100%;}.metric{background:#fff;border:1px solid rgba(1,1,1,0.2);border-top:0;border-radius:0 0 4px 4px;box-shadow:0 2px 5px rgba(1,1,1,0.05)}.metric--head{margin:0;color:#555;background:#f1f1f1;border-bottom:1px solid #ccc;font-weight:bold;text-transform:uppercase}.metric--body{display:block;width:100%}.metric--head,.metric--body{padding:10px;text-align:center;white-space:pre;white-space:pre-wrap;white-space:pre-line;white-space:-pre-wrap;white-space:-o-pre-wrap;white-space:-moz-pre-wrap;white-space:-hp-pre-wrap;word-wrap:break-word}';


	var modal = document.createElement('div');
	modal.innerHTML = '<div class="overly"><a class="project-name" href="http://lafilab.com/timeit">Time It Bookmarklet</a><br><br><a href="http://lafilab.com">@LafiKL</a><br><a href="http://crafted-apps.com">Crafted Apps</a></div>'+
	'<div class="timeit-modal">' +
		'<div class="block">'+
			'<div class="metric">'+
				'<h6 class="metric--head">Connection time</h6>'+
				'<h2 class="metric--body">'+ (String(connection * 0.001)).slice(0,4)+'S</h2>'+
			'</div>'+
		'</div>'+
		'<div class="block">'+
			'<div class="metric">'+
				'<h6 class="metric--head">Load Time</h6>'+
				'<h2 class="metric--body">'+ (String(loadTime * 0.001)).slice(0,4) +'S</h2>'+
			'</div>'+
		'</div>'+
		'<div class="block">'+
			'<div class="metric">'+
				'<h6 class="metric--head">DNS Lookup</h6>'+
				'<h2 class="metric--body">'+ (String(dns * 0.001)).slice(0,4) +'S</h2>'+
			'</div>'+
		'</div>'+
		'<div class="block">'+
			'<div class="metric">'+
				'<h6 class="metric--head">Time to first byte</h6>'+
				'<h2 class="metric--body">'+ (String(ttfb * 0.001)).slice(0,4) +'S</h2>'+
			'</div>'+
		'</div>'+
		'<div class="block">'+
			'<div class="metric">'+
				'<h6 class="metric--head">Base Page</h6>'+
				'<h2 class="metric--body">'+ (String(basePage * 0.001)).slice(0,4) +'S</h2>'+
			'</div>'+
		'</div>'+
		'<div class="block">'+
			'<div class="metric">'+
				'<h6 class="metric--head">Front End</h6>'+
				'<h2 class="metric--body">'+  (String(frontEnd * 0.001)).slice(0,4) +'S</h2>'+
			'</div>'+
		'</div>'+

	'</div>'; // timeit-modal

	document.head.appendChild(style);
	document.body.appendChild(modal);
})(window,document)