var tl = TweenLite;

var rate = 3.00;
var rrate = 1.75;
var loanAmt = 300000;
var years = 15;
var selectedOption = 0;

var loanAmts = ['$200,000', '$250,000', '$300,000', '$350,000', '$400,000'];
var lowest15yr = [];
var lowest30yr = [];

// load XML
var xhr;
if (window.XMLHttpRequest) xhr = new XMLHttpRequest(); 		// all browsers except IE
else xhr = new ActiveXObject("Microsoft.XMLHTTP"); 		// for IE
xhr.open('GET', 'https://cdn.revjet.com/s3/csp/1611594137198/ltdisplay-new.xml');
xhr.onreadystatechange = function () {
	if (xhr.readyState===4 && xhr.status===200) {
        // update HTML content in ad with XML
        /*lowest15yr.push(Number(String(xhr.responseXML.getElementsByTagName('_15yr_200k_apr')[0].firstChild.nodeValue).substr(0,4)));
        lowest15yr.push(Number(String(xhr.responseXML.getElementsByTagName('_15yr_250k_apr')[0].firstChild.nodeValue).substr(0,4)));
        lowest15yr.push(Number(String(xhr.responseXML.getElementsByTagName('_15yr_300k_apr')[0].firstChild.nodeValue).substr(0,4)));
        lowest15yr.push(Number(String(xhr.responseXML.getElementsByTagName('_15yr_350k_apr')[0].firstChild.nodeValue).substr(0,4)));
        lowest15yr.push(Number(String(xhr.responseXML.getElementsByTagName('_15yr_400k_apr')[0].firstChild.nodeValue).substr(0,4)));
        lowest30yr.push(Number(String(xhr.responseXML.getElementsByTagName('_30yr_200k_apr')[0].firstChild.nodeValue).substr(0,4)));
        lowest30yr.push(Number(String(xhr.responseXML.getElementsByTagName('_30yr_250k_apr')[0].firstChild.nodeValue).substr(0,4)));
        lowest30yr.push(Number(String(xhr.responseXML.getElementsByTagName('_30yr_300k_apr')[0].firstChild.nodeValue).substr(0,4)));
        lowest30yr.push(Number(String(xhr.responseXML.getElementsByTagName('_30yr_350k_apr')[0].firstChild.nodeValue).substr(0,4)));
        lowest30yr.push(Number(String(xhr.responseXML.getElementsByTagName('_30yr_400k_apr')[0].firstChild.nodeValue).substr(0,4)));*/
        rate = Math.min(lowest15yr[2]);
        loaninput.value = loanAmts[2];
        loanAmt = loanAmts[2];
        if (String(rate).length === 1) {
            title5.innerHTML = rate + ".00%";
        } else if (String(rate).length === 3) {
            title5.innerHTML = rate + "0%";
        } else {
            title5.innerHTML = rate + "%";
        }
        calculateSavings();
	}
}
xhr.send();

// intro animations
// first run
tl.to(banner, 0.5, { opacity: 1, ease: Power0.easeNone });
tl.set(line, { scaleX: 0 });
tl.to(line, 1, { scaleX: 1, opacity: 1, ease:Power4.easeOut, delay: 0.2 });
tl.set([label1, label2, label3, input1, dropdown, dropdown2], { marginLeft: 50 });
tl.to(title, 0.8, { opacity:1, left: 0, ease:Power4.easeOut, delay: 0.2 });
tl.to(title3, 0.8, { opacity:1, left: -93, ease:Power4.easeOut, delay: 0.2 });
tl.to(title4, 0.8, { opacity:1, left: -36, ease:Power4.easeOut, delay: 0.3 });
tl.to(title5, 0.8, { opacity:1, left: 55, ease:Power4.easeOut, delay: 0.5 });
tl.to(title6, 0.8, { opacity:1, left: 107, ease:Power4.easeOut, delay: 0.6 });
tl.to([label1, input1], 0.8, { marginLeft: 0, opacity:1, ease:Power4.easeOut, delay: 0.6 });
tl.to([label2, dropdown], 0.8, { marginLeft: 0, opacity:1, ease:Power4.easeOut, delay: 0.9 });
tl.to([label3, dropdown2], 0.8, { marginLeft: 0, opacity:1, ease:Power4.easeOut, delay: 1.2 });
tl.to(cta, 0.4, { opacity: 1, marginBottom: 0, ease: Back.easeOut, delay: 1.1 });
tl.to(ctatext, 0.55, { opacity: 1, left:0, ease: Power4.easeOut, delay: 1.1 });
tl.to(ctaarrow, 0.55, { opacity: 1, marginRight: 0, ease: Power4.easeOut, delay: 1.1 });
tl.to(cta, 0.05, { height:44, ease:Power0.easeNone, delay:2 });
tl.to(ctatopbg, 0.05, { backgroundColor:'#44ace6', ease:Power0.easeNone, delay:2 });
tl.to(cta, 0.05, { height:40, ease:Power0.easeNone, delay:3.2 });
tl.to(ctatopbg, 0.05, { backgroundColor:'#2f86d4', ease:Power0.easeNone, delay:3.2 });
tl.to(shine, 0.8, { left: 300, ease: Power0.easeNone, delay: 2.3 });
tl.set(shine, { left: -300, delay: 5.6 });

tl.to(shine, 0.8, { left: 300, ease: Power0.easeNone, delay: 7.4 });
tl.set(shine, { left: -300, delay: 8.2 });

tl.to(shine, 0.8, { left: 300, ease: Power0.easeNone, delay: 13.4 });
tl.set(shine, { left: -300, delay: 14.2 });

// main hit clickTAG functions
function hitClick(e) {
    var separator = window.click_url.indexOf('?') > -1 ? '&' : '?';
    if (window.revjet && window.revjet.elements_api) {
        window.revjet.elements_api.goToLP(e, window.click_url + separator + "homeloan-product-type=REFINANCE&est-mortgage-balance=" + loanAmt);
    } else {
        window.open(window.click_url + separator + "homeloan-product-type=REFINANCE&est-mortgage-balance=" + loanAmt, '_blank');
    }
}

function hitOver() {
    tl.to(ctatopbg, 0.05, { backgroundColor:'#44ace6', ease:Power0.easeNone });
    tl.to(cta, 0.05, { height:44, ease:Power0.easeNone });
}

function hitOut() {
    tl.to(ctatopbg, 0.05, { backgroundColor:'#2f86d4', ease:Power0.easeNone });
    tl.to(cta, 0.05, { height:40, ease:Power0.easeNone });
}

hit.addEventListener('mouseover', hitOver, false);
hit.addEventListener('mouseout', hitOut, false);
hit.addEventListener('click', hitClick, false);

// input field

function getRealValue(element) {
	var value = spliceStr(element.value.replace(/[,]+/g, ''), 0, 1);
	return (isNaN(value) || value.length == 0) ? 0 : parseInt(value);
}

var t2str = '';

function getCaretPosition(oField) {
  var iCaretPos = 0;
  // IE Support
  if (document.selection) {
    // Set focus on the element
    oField.focus ();
    // To get cursor position, get empty selection range
    var oSel = document.selection.createRange ();
    // Move selection start to 0 position
    oSel.moveStart ('character', -oField.value.length);
    // The caret position is selection length
    iCaretPos = oSel.text.length;
  }
  // Firefox support
  else if (oField.selectionStart || oField.selectionStart == '0')
    iCaretPos = oField.selectionStart;
  // Return results
  return (iCaretPos);
}

function setCaretPosition(elem, caretPos) {
    if(elem != null) {
        if(elem.createTextRange) {
            var range = elem.createTextRange();
            range.move('character', caretPos);
            range.select();
        }
        else {
            if(elem.selectionStart) {
                elem.focus();
                elem.setSelectionRange(caretPos, caretPos);
            }
            else
                elem.focus();
        }
    }
}

function spliceStr(str, index, count, add) {
  return str.slice(0, index) + (add || "") + str.slice(index + count);
}

var CMD_INSERT = 0;
var CMD_BACKSPACE = 1;
var CMD_DELETE = 2;

function reformatValue(element, command, number) {
	var caretat = getCaretPosition(element);
	if (caretat < 1) {
		caretat = 1;
	}
	var caretoffset = 0;
	var pvalue = element.value;
	if (command === CMD_BACKSPACE) {
		pvalue = spliceStr(pvalue, caretat - 1, 1);
	}
	else if (command === CMD_DELETE) {
		pvalue = spliceStr(pvalue, caretat, 1);
	}
	if (command === CMD_INSERT) {
		if (number === 0 && caretat === 1)
			return;
		if ((element.id === "loaninput" && pvalue.length > 10))
			return;
		if (!element.hasAttribute('data-edited'))
			element.setAttribute('data-edited', true);
		if (caretat < pvalue.length) {
			caretoffset = 1;
		}
		pvalue = spliceStr(pvalue, caretat, 0, number.toString());
	}
	var value = pvalue.replace(/[,]+/g, '').slice(1);
	//if (value.length > 0)
		//value = parseInt(value).toString();
	var formattedValue = '';
	var i = value.length;
	var c = 0;
	while (i--) {
		formattedValue += value[i];
		c++;
		if (i > 0 && c === 3) {
			formattedValue += ',';
			c = 0;
			if (command === CMD_INSERT)
				caretat++;
		}
	}
	formattedValue = formattedValue.split('').reverse().join('');
	element.value = '$' + formattedValue;
	switch (command) {
		case CMD_INSERT:
			caretat++;
			break;
		case CMD_BACKSPACE:
			caretat--;
			break;
	}
	setCaretPosition(element, caretat - caretoffset);
}


function calculateSavings() {
    loanAmt = getRealValue(loaninput);
    if (selectedOption === 1) {
        // 30-YEAR FIXED
        if (loanAmt <= 225000) {
            // 200k
            rate = Number(String(xhr.responseXML.getElementsByTagName('_30yr_200k_apr')[0].firstChild.nodeValue).substr(0,4));
            rrate = Number(String(xhr.responseXML.getElementsByTagName('_30yr_200k_rate')[0].firstChild.nodeValue).substr(0,4));
        } else if (loanAmt > 225000 && loanAmt <= 275000) {
            // 250k
            rate = Number(String(xhr.responseXML.getElementsByTagName('_30yr_250k_apr')[0].firstChild.nodeValue).substr(0,4));
            rrate = Number(String(xhr.responseXML.getElementsByTagName('_30yr_250k_rate')[0].firstChild.nodeValue).substr(0,4));
        } else if (loanAmt > 275000 && loanAmt <= 325000) {
            // 300k
            rate = Number(String(xhr.responseXML.getElementsByTagName('_30yr_300k_apr')[0].firstChild.nodeValue).substr(0,4));
            rrate = Number(String(xhr.responseXML.getElementsByTagName('_30yr_300k_rate')[0].firstChild.nodeValue).substr(0,4));
        } else if (loanAmt > 325000 && loanAmt <= 375000) {
            // 350k
            rate = Number(String(xhr.responseXML.getElementsByTagName('_30yr_350k_apr')[0].firstChild.nodeValue).substr(0,4));
            rrate = Number(String(xhr.responseXML.getElementsByTagName('_30yr_350k_rate')[0].firstChild.nodeValue).substr(0,4));
        } else {
            // 400k
            rate = Number(String(xhr.responseXML.getElementsByTagName('_30yr_400k_apr')[0].firstChild.nodeValue).substr(0,4));
            rrate = Number(String(xhr.responseXML.getElementsByTagName('_30yr_400k_rate')[0].firstChild.nodeValue).substr(0,4));
        }
    } else if (selectedOption === 0) {
        // 15-YEAR FIXED
        if (loanAmt <= 225000) {
            // 200k
            rate = Number(String(xhr.responseXML.getElementsByTagName('_15yr_200k_apr')[0].firstChild.nodeValue).substr(0,4));
            rrate = Number(String(xhr.responseXML.getElementsByTagName('_15yr_200k_rate')[0].firstChild.nodeValue).substr(0,4));
        } else if (loanAmt > 225000 && loanAmt <= 275000) {
            // 250k
            rate = Number(String(xhr.responseXML.getElementsByTagName('_15yr_250k_apr')[0].firstChild.nodeValue).substr(0,4));
            rrate = Number(String(xhr.responseXML.getElementsByTagName('_15yr_250k_rate')[0].firstChild.nodeValue).substr(0,4));
        } else if (loanAmt > 275000 && loanAmt <= 325000) {
            // 300k
            rate = Number(String(xhr.responseXML.getElementsByTagName('_15yr_300k_apr')[0].firstChild.nodeValue).substr(0,4));
            rrate = Number(String(xhr.responseXML.getElementsByTagName('_15yr_300k_rate')[0].firstChild.nodeValue).substr(0,4));
        } else if (loanAmt > 325000 && loanAmt <= 375000) {
            // 350k
            rate = Number(String(xhr.responseXML.getElementsByTagName('_15yr_350k_apr')[0].firstChild.nodeValue).substr(0,4));
            rrate = Number(String(xhr.responseXML.getElementsByTagName('_15yr_350k_rate')[0].firstChild.nodeValue).substr(0,4));
        } else {
            // 400k
            rate = Number(String(xhr.responseXML.getElementsByTagName('_15yr_400k_apr')[0].firstChild.nodeValue).substr(0,4));
            rrate = Number(String(xhr.responseXML.getElementsByTagName('_15yr_400k_rate')[0].firstChild.nodeValue).substr(0,4));
        }
    }
    if (String(rate).length === 1) {
        title5.innerHTML = rate + ".00%";
    } else if (String(rate).length === 3) {
        title5.innerHTML = rate + "0%";
    } else {
        title5.innerHTML = rate + "%";
    }
    if (String(rrate).length === 1) {
        title3.innerHTML = rrate + ".00%";
    } else if (String(rrate).length === 3) {
        title3.innerHTML = rrate + "0%";
    } else {
        title3.innerHTML = rrate + "%";
    }
    if (selectedOption === 0) {
        years = 15;
    } else {
        years = 30;
    }
}

purposeselector.addEventListener('change', function(e) {
	selectedOption = purposeselector.selectedIndex;
    calculateSavings();
}, false);

function keypressEvnt(e) {
	e.preventDefault();
	var element = e.target || e.srcElement;
	var keyCode = e.which || e.keycode || e.charCode;
	var number = 0;
	if (keyCode >= 48 && keyCode <= 57) {
		number = keyCode - 48;
	}
	else {
		return;
	}
	reformatValue(element, CMD_INSERT, number);
    calculateSavings();
}

function keydownEvnt(e) {
	var keyCode = e.which || e.keycode || e.charCode;
	if (keyCode === 8 || keyCode === 46) {
		e.preventDefault();
		var element = e.target || e.srcElement;
		var caretat = getCaretPosition(element);
		if (keyCode === 8) { // backspace
			reformatValue(element, CMD_BACKSPACE);
		}
		else if (keyCode === 46) { // del
			reformatValue(element, CMD_DELETE);
		}
	}
}

function contextEvnt(e) {
	e.preventDefault();
}

function keyUpEvnt(e) {
    calculateSavings();
}

input1.addEventListener('keypress', keypressEvnt);
input1.addEventListener('keydown', keydownEvnt);
input1.addEventListener('contextmenu', contextEvnt);
input1.addEventListener('keyup', keyUpEvnt);

function inputFocusIn(e) {
	var element = e.target || e.srcElement;
	element.value = '$';
}

function inputFocusOut(e) {
	var element = e.target || e.srcElement;
    if (element.value == '$' || element.value == '') {
        element.value = loanAmts[lowest15yr.indexOf(Math.min(...lowest15yr))];
    }
    calculateSavings();
}

loaninput.onfocus = inputFocusIn;
loaninput.onblur = inputFocusOut;