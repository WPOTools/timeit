Time it
======

<h3>Small bookmarklet that will help to test a web page performance. depends on <a href="https://dvcs.w3.org/hg/webperf/raw-file/tip/specs/NavigationTiming/Overview.html">Navigation Timing draft</a></h3>

drag this to your bookmark bar →
<a style="background: #ededed; padding: 5px; font-weight: bold; color: #444;" href="javascript:(function(a,b){if(!performance.timing)throw Error("There is no performance.timing");var c=performance.timing,d=Math.round(c.connectEnd-c.connectStart);dns=Math.round(c.domainLookupEnd-c.domainLookupStart),ttfb=Math.round(c.responseStart-c.connectEnd),basePage=Math.round(c.responseEnd-c.responseEnd),loadTime=Math.round(c.loadEventStart-c.connectEnd),frontEnd=Math.round(c.loadEventStart-c.responseEnd);var e=b.createElement("style");e.innerText='*{box-sizing:border-box!important}.overly{position:fixed;background:#f1f1f1;border-bottom:1px solid #dedede;box-shadow:0 2px 5px rgba(1,1,1,0.08);width:100%;height:20%;padding:10px;top:0;left:0;z-index:999998}.overly a{color:#444;font-weight:bold;font-size:11px;text-decoration:none}.overly .project-name{font-size:16px}.overly,.timeit-modal{max-height:20%;font-family:"Helvetica Neue","Helvetica",Helvetica,Arial,sans-serif!important}.timeit-modal{position:fixed;top:0;left:25%;width:50%;min-height:25%;z-index:999999;font-weight:normal;font-style:normal;font-size:14px;line-height:1;color:#222}.block:before,.block:after{content:" ";display:table}.block:after{clear:both}.block{*zoom:1}.block{padding:0 10px;float:left;width:16.666666667%; max-height:100%;}.metric{background:#fff;border:1px solid rgba(1,1,1,0.2);border-top:0;border-radius:0 0 4px 4px;box-shadow:0 2px 5px rgba(1,1,1,0.05)}.metric--head{margin:0;color:#555;background:#f1f1f1;border-bottom:1px solid #ccc;font-weight:bold;text-transform:uppercase}.metric--body{display:block;width:100%}.metric--head,.metric--body{padding:10px;text-align:center;white-space:pre;white-space:pre-wrap;white-space:pre-line;white-space:-pre-wrap;white-space:-o-pre-wrap;white-space:-moz-pre-wrap;white-space:-hp-pre-wrap;word-wrap:break-word}';var f=b.createElement("div");f.innerHTML='<div class="overly"><a class="project-name" href="http://lafilab.com/timeit">Time It Bookmarklet</a><br><br><a href="http://lafilab.com">@LafiKL</a><br><a href="http://crafted-apps.com">Crafted Apps</a></div><div class="timeit-modal"><div class="block"><div class="metric"><h6 class="metric--head">Connection time</h6><h2 class="metric--body">'+(.001*d+"").slice(0,4)+"S</h2>"+"</div>"+"</div>"+'<div class="block">'+'<div class="metric">'+'<h6 class="metric--head">Load Time</h6>'+'<h2 class="metric--body">'+(.001*loadTime+"").slice(0,4)+"S</h2>"+"</div>"+"</div>"+'<div class="block">'+'<div class="metric">'+'<h6 class="metric--head">DNS Lookup</h6>'+'<h2 class="metric--body">'+(.001*dns+"").slice(0,4)+"S</h2>"+"</div>"+"</div>"+'<div class="block">'+'<div class="metric">'+'<h6 class="metric--head">Time to first byte</h6>'+'<h2 class="metric--body">'+(.001*ttfb+"").slice(0,4)+"S</h2>"+"</div>"+"</div>"+'<div class="block">'+'<div class="metric">'+'<h6 class="metric--head">Base Page</h6>'+'<h2 class="metric--body">'+(.001*basePage+"").slice(0,4)+"S</h2>"+"</div>"+"</div>"+'<div class="block">'+'<div class="metric">'+'<h6 class="metric--head">Front End</h6>'+'<h2 class="metric--body">'+(.001*frontEnd+"").slice(0,4)+"S</h2>"+"</div>"+"</div>"+"</div>",b.head.appendChild(e),b.body.appendChild(f)})(window,document);">Time it</a> 
<br >

Usage
--------
visit a website you want to measure and then click on `Time it` in your bookmark bar.
then you should see something like <a href="http://d.pr/i/cmPv">this screenshot</a>


License
--------
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE