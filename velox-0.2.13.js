/*

velox-0.2.13.js Bellevue

<link href="velox.css" rel="stylesheet" type="text/css">
<script src="velox.js"></script>

*/

/*********************/
/*    imageviewer    */
/*********************/

function vlx_imageviewer_open(filename)
{
	
	document.getElementById('vlx-imageviewer-container').style.backgroundImage = "url('"+filename+"')";
	document.getElementById('vlx-imageviewer-container').style.display="block";
}

function vlx_imageviewer_close()
{
	document.getElementById('vlx-imageviewer-container').style.display='none';
}

/********************************************************/
/*    return a timestamp with the full date and time    */
/********************************************************/

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

/******************/
/*    dropdown    */
/******************/

function vlx_dropdown_content_showhide(contentid)
{
	cid=document.getElementById(contentid);
	if (cid.style.display!="none" && cid.style.display!="block")
		{
			cid.style.display="none";
		}
	if (cid.style.display=="none")
		{
			cid.style.display="block";
		}
		else
		{
			cid.style.display="none";
		}
}

/*****************/
/*    sidenav    */
/*****************/

function vlx_sidenav_content_showhide(contentid)
{
	cid=document.getElementById(contentid);
	//if (cid.style.display=="none")
	if (cid.style.visibility != "hidden" && cid.style.visibility != "visible")
		{
			cid.style.visibility = "hidden";
		}
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

/******************/
/*    progress    */
/******************/

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

/***********************************/
/*    convert html code to text    */
/***********************************/

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

/********************************/
/*    return a random number    */
/********************************/

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

/***************************************************/
/*    return a random color code, e.g.: #538fe2    */
/***************************************************/

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

/********************************************/
/*    html file including into a htmltag    */
/********************************************/

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

/********************************************/
/*    text file including into a htmltag    */
/********************************************/

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

/******************************/
/*    javascript including    */
/******************************/

function vlx_js_include(filename)
{
	var body = document.getElementsByTagName('body')[0],js = document.createElement('script');
	js.src = filename;
	body.parentNode.insertBefore(js, body);
}

/*******************/
/*    slidewhow    */
/*******************/

var vlx_slideshow = ["",""];
var vlx_slideshow_index=0;
var vlx_slideshow_timer;

function vlx_slideshow_first()
{
	slc=document.getElementById("vlx-slideshow-container");
	slc.style.backgroundImage = "url('"+vlx_slideshow[0]+"')";
	vlx_slideshow_index=0;
}

function vlx_slideshow_next()
{
	slc=document.getElementById("vlx-slideshow-container");
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

function vlx_slideshow_prev()
{
	slc=document.getElementById("vlx-slideshow-container");
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

function vlx_slideshow_timing_on(time)
{
	vlx_slideshow_first();
	vlx_slideshow_timer=window.setInterval(function(){ vlx_slideshow_next(); }, time);  
}

function vlx_slideshow_timing_off()
{
	clearInterval(vlx_slideshow_timer);  
}

/**********************************/
/*    questiobox and answerbox    */
/**********************************/

function vlx_answerbox_showhide(contentid)
{
	cid=document.getElementById(contentid);
	if (cid.style.display!="none" && cid.style.display!="block")
		{
			cid.style.display="none";
		}
	if (cid.style.display=="none")
		{
			cid.style.display="block";
		}
		else
		{
			cid.style.display="none";
		}
}

/**************/
/*    tabs    */
/**************/

function vlx_tabs_show(htmlpre,current,max)
{
	for (i=1;i<=max;i++)
		{
			cid=document.getElementById(htmlpre+i.toString());
			cid.style.display="none";
		}
	cid=document.getElementById(htmlpre+current.toString());	
	cid.style.display="block";
}

