/*

velox-0.1.09.js dev

<link href="velox.css" rel="stylesheet" type="text/css">
<script src="velox.js"></script>

*/

// imageviewer

function vlx_imageviewer_open(filename)
{
	
	document.getElementById('vlx-imageviewer-container').style.backgroundImage = "url('"+filename+"')";
	document.getElementById('vlx-imageviewer-container').style.display="block";
}

function vlx_imageviewer_close()
{
	document.getElementById('vlx-imageviewer-container').style.display='none';
}

// create a timestamp from the full date and time

function vlx_timestamp()
{
	var txt="";
	var d=new Date();
	txt+=d.getFullYear(); 
	n=d.getMonth()+1;
	if (n<10)
		{  txt+="0"+n;  }
		else
		{  txt+=n;  }
	n=d.getDate();
	if (n<10)
		{  txt+="0"+n;  }
		else
		{  txt+=n;  }
	n=d.getHours();
	if (n<10)
		{  txt+="0"+n;  }
		else
		{  txt+=n;  }
	n=d.getMinutes();
	if (n<10)
		{  txt+="0"+n;  }
		else
		{  txt+=n;  }
	n=d.getSeconds();
		if (n<10)
		{  txt+="0"+n;  }
		else
		{  txt+=n;  }
	n=d.getMilliseconds();
	if (n<10)
		{  txt+="00"+n;  }
		else
		{  
			if (n<100)
			{  txt+="0"+n;  }
			else
			{  txt+=n; }
		}
	return(txt);
}

/*
dropdown show or hide
	
	Usage sample:
	<div class="vlx-dropdown vlx-float-left">
		<div onclick="vlx_dropdown_content_showhide('vlx_dropdown_content_1');" class="vlx-dropdown-btn vlx-font vlx-font-xxl vlx-color-white vlx-border-black">&equiv;</div>
		<div id="vlx_dropdown_content_1" class="vlx-dropdown-content vlx-black vlx-font vlx-font-m">
			<a href="#download" onclick="vlx_dropdown_content_showhide('vlx_dropdown_content_1');" class="vlx-black vlx-color-white vlx-padding-10 vlx-font vlx-font-m">Download</a>
			<a href="#features" onclick="vlx_dropdown_content_showhide('vlx_dropdown_content_1');" class="vlx-black vlx-color-white vlx-padding-10 vlx-font vlx-font-m">Features</a>
			<a href="#themes" onclick="vlx_dropdown_content_showhide('vlx_dropdown_content_1');" class="vlx-black vlx-color-white vlx-padding-10 vlx-font vlx-font-m">Themes</a>
			<a href="#contact" onclick="vlx_dropdown_content_showhide('vlx_dropdown_content_1');" class="vlx-black vlx-color-white vlx-padding-10 vlx-font vlx-font-m">Contact</a>
		</div>
	</div>	
*/

function vlx_dropdown_content_showhide(contentid)
{
	cid=document.getElementById(contentid);
	if (cid.style.display=="none")
		{
			cid.style.display="block";
		}
		else
		{
			cid.style.display="none";
		}
}
/*
sidenav show or hide
	
	Usage sample:
	<div id="vlx_sidenav1" class="vlx-sidenav vlx-riverside vlx-center vlx-effect-ease-hover">
		<div class="vlx-sidenav-content">
			<p><a href="#" class="vlx-color-white vlx-effect-text-underline-hover" onclick="vlx_sidenav_content_showhide('vlx_sidenav1');">link<a></p>
			<p><a href="#" class="vlx-color-white vlx-effect-text-underline-hover" onclick="vlx_sidenav_content_showhide('vlx_sidenav1');">link<a></p>
			<p><a href="#" class="vlx-color-white vlx-effect-text-underline-hover" onclick="vlx_sidenav_content_showhide('vlx_sidenav1');">link<a></p>
			<p><a href="#" class="vlx-color-white vlx-effect-text-underline-hover" onclick="vlx_sidenav_content_showhide('vlx_sidenav1');">link<a></p>
		</div>
	</div>
	<div onclick="vlx_sidenav_content_showhide('vlx_sidenav1');" class="vlx-sidenav-btn vlx-font vlx-font-xxl vlx-riverside">&equiv;</div>
*/

function vlx_sidenav_content_showhide(contentid)
{
	cid=document.getElementById(contentid);
	//if (cid.style.display=="none")
	if (cid.style.visibility == "hidden")	
		{
			cid.style.display = "block";
			cid.style.visibility = "visible"; 
			cid.style.opacity = "1";
		}
		else
		{
			cid.style.opacity = "0";
			cid.style.visibility = "hidden";
			cid.style.display = "none";
		}
}

/*
progress

Example:
<div id="progress1-container" class="srn-progress-container srn-black">
	<div id="progress1-inner" class="srn-progress-inner srn-red"></div>
</div>

progress JS functions:

Set the width of the container
function vlx_progress_container_setwidth(container,width,type)
examples:
vlx_progress_container_setwidth('progress1-container','300','px');
vlx_progress_container_setwidth('progress1-container','70','%');

Set the position with text or without text
vlx_progress_inner_setwidth(inner,width)
vlx_progress_inner_setwidth_notext(inner,width)
example:
vlx_progress_inner_setwidth('progress1-inner','10');
vlx_progress_inner_setwidth_notext('progress1-inner');

Move up to 100% from the actual position with text or without text
vlx_progress_inner_move(inner)
vlx_progress_inner_move_notext(inner)
Example
vlx_progress_inner_move('progress1-inner');
vlx_progress_inner_move_notext('progress1-inner');
*/

function vlx_progress_container_setwidth(container,width,type)
{
	document.getElementById(container).style.width = width+type;
}

function vlx_progress_inner_setwidth(inner,width)
{
	document.getElementById(inner).style.width = width+"%";
	document.getElementById(inner).innerHTML = width+"%";
}

function vlx_progress_inner_setwidth_notext(inner,width)
{
	document.getElementById(inner).style.width = width+"%";
	document.getElementById(inner).innerHTML = "";
}

function vlx_progress_inner_move(inner)
{
	var elem = document.getElementById(inner);
	width = document.getElementById(inner).style.width;
	width = width.replace(/\%/g, "");
	widthn = Number(width);
	var id = setInterval(vlx_frame, 10);
	function vlx_frame() 
		{
			if (widthn >= 100) 
				{
					clearInterval(id);
				} 
				else
				{
					widthn++;
					elem.style.width = widthn+'%';
					elem.innerHTML = widthn+"%";
				}
		}
}

function vlx_progress_inner_move_notext(inner)
{
	var elem = document.getElementById(inner);
	elem.innerHTML = '';
	width = document.getElementById(inner).style.width;
	width = width.replace(/\%/g, "");
	widthn = Number(width);
	var id = setInterval(vlx_frame, 10);
	function vlx_frame() 
		{
			if (widthn >= 100) 
				{
					clearInterval(id);
				} 
				else
				{
					widthn++;
					elem.style.width = widthn+'%';
				}
		}
}

//convert code to text
//use with the <pre><code>text</code></pre> or vlx-code or-vlx-codebox classes

function vlx_code2text(txt)
{
	//txt = txt.replace(/\;/g, "&#59;");
	txt = txt.replace(/\&/g, "&#38;");
	txt = txt.replace(/\</g, "&#60;");
	txt = txt.replace(/\>/g, "&#62;");
	txt = txt.replace(/\//g, "&#47;");
	txt = txt.replace(/\[/g, "&#91;");
	txt = txt.replace(/\]/g, "&#93;");
	txt = txt.replace(/\"/g, "&#34;");
	txt = txt.replace(/\'/g, "&#39;");
	txt = txt.replace(/\“/g, "&#8220;");
	txt = txt.replace(/\”/g, "&#8220;");
	txt = txt.replace(/\‘/g, "&#8216;");
	txt = txt.replace(/\’/g, "&#8217;");
	txt = txt.replace(/\=/g, "&#61;");
	txt = txt.replace(/\:/g, "&#58;");
	txt = txt.replace(/\,/g, "&#44;");
	txt = txt.replace(/\(/g, "&#28;");
	txt = txt.replace(/\)/g, "&#29;");
	txt = txt.replace(/\./g, "&#46;");
	return(txt);
}

//return a random number

function vlx_random(max)
{
	if (max>1)
		{
			r=Math.floor((Math.random() * max) + 1); 
			return(r);
		}
		else
		{
			return("wrong max parameter");
		}
}

//return a random color code, e.g.: #538fe2

function vlx_random_color()
{
	var i=0;
	var r=0;
	localstr="#";
	for (i=0;i<6;i++)
		{
			r=Math.floor((Math.random() * 16) + 1);
			switch(r)
				{
					case 1:  localstr+="0"; break;
					case 2:  localstr+="1"; break;
					case 3:  localstr+="2"; break;
					case 4:  localstr+="3"; break;
					case 5:  localstr+="4"; break;
					case 6:  localstr+="5"; break;
					case 7:  localstr+="6"; break;
					case 8:  localstr+="7"; break;
					case 9:  localstr+="8"; break;
					case 10: localstr+="9"; break;
					case 11: localstr+="a"; break;
					case 12: localstr+="b"; break;
					case 13: localstr+="c"; break;
					case 14: localstr+="d"; break;
					case 15: localstr+="e"; break;
					case 16: localstr+="f"; break;
				}
		}
	return localstr;
}

//html file including into a htmltag

function vlx_html_include(filename,htmltag)
{
	var xhttp = new XMLHttpRequest();
	xhttp.addEventListener("load", function () {
		var txt = xhttp.responseText;
		document.getElementById(htmltag).innerHTML = txt;
	});
	xhttp.open("GET", filename);
	xhttp.send();
}

//text file including into a htmltag

function vlx_text_include(filename,htmltag)
{
	var xhttp = new XMLHttpRequest();
	xhttp.addEventListener("load", function () {
		var txt = xhttp.responseText;
		txt = txt.replace(/</g, "&#60;");
		txt = txt.replace(/>/g, "&#62;");
		txt = txt.replace(/\n/g, "<br>");
		document.getElementById(htmltag).innerHTML = txt;
	});
	xhttp.open("GET", filename);
	xhttp.send();
}

//javascript including

function vlx_js_include(filename)
{
	var body = document.getElementsByTagName('body')[0],js = document.createElement('script');
	js.src = filename;
	body.parentNode.insertBefore(js, body);
}

//slidewhow

var vlx_slideshow = ["",""];
var vlx_slideshow_index=0;
var vlx_slideshow_timer;

function vlx_slideshow_first(sl)
{
	slc=document.getElementById(sl);
	slc.style.backgroundImage = "url('"+vlx_slideshow[0]+"')";
	vlx_slideshow_index=0;
}

function vlx_slideshow_next(sl)
{
	slc=document.getElementById(sl);
	if (vlx_slideshow_index<vlx_slideshow.length-1) 
		{
			vlx_slideshow_index+=1;
		} 
		else
		{
			vlx_slideshow_index=0;
		}
	slc.style.backgroundImage = "url('"+vlx_slideshow[vlx_slideshow_index]+"')";
}

function vlx_slideshow_prev(sl)
{
	slc=document.getElementById(sl);
	if (vlx_slideshow_index==0)
		{
			vlx_slideshow_index=vlx_slideshow.length-1;
		}
		else
		{
			vlx_slideshow_index-=1;
		}
	slc.style.backgroundImage = "url('"+vlx_slideshow[vlx_slideshow_index]+"')";
}

function vlx_slideshow_timing_on(sl,time)
{
	vlx_slideshow_first(sl);
	vlx_slideshow_timer=window.setInterval(function(){ vlx_slideshow_next(sl); }, time);  
}

function vlx_slideshow_timing_off()
{
	clearInterval(vlx_slideshow_timer);  
}
