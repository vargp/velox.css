/*

velox-0.1.04.js dev

<link href="velox.css" rel="stylesheet" type="text/css">
<script src="velox.js"></script>

*/

/*
dropdown show or hide
	
	Usage sample:
	
	<div class="vlx-dropdown vlx-float-left">
		<div onclick="vlx_dropdown_content_showhide('vlx_dropdown_content_1');" class="vlx-dropdown-btn vlx-font vlx-font-l vlx-black vlx-color-white vlx-border-black">&equiv;</div>
		<div id="vlx_dropdown_content_1" class="vlx-dropdown-content vlx-black vlx-font vlx-font-m">
			<a href="#download" class="vlx-black vlx-color-white vlx-padding--10 vlx-font vlx-font-m">Download</a>
			<a href="#features" class="vlx-black vlx-color-white vlx-padding--10 vlx-font vlx-font-m">Features</a>
			<a href="#contact" class="vlx-black vlx-color-white vlx-padding--10 vlx-font vlx-font-m">Contact</a>
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

//html file including in a htmltag

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

//text file including in a htmltag

function vlx_text_include(filename,htmltag)
{
	var xhttp = new XMLHttpRequest();
	xhttp.addEventListener("load", function () {
		var txt = xhttp.responseText;
		txt = txt.replace(/</g, "&#60;");
		txt = txt.replace(/>/g, "&#62;");
		txt = txt.replace(/\n/g, "<br />");
		document.getElementById(htmltag).innerHTML = txt;
	});
	xhttp.open("GET", filename);
	xhttp.send();
}
