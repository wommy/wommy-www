function noDiscriminate( obj ) {
    var r = obj;
    if (confirm("By continuing, you agree to not discriminate based on content.") == true) {
        open(r, "_blank");
    }
}

// const $ = selector => document.getElementById(selector)

function toggle() {
	// let ham = $('hamburger').style
	// ham.style.visibility = (ham.style.visibility != '' ? '' : 'hidden' );
	// ham = ( ham != '' ? '' : 'hidden')
    // ham = 'hidden' ? ham = '' : 'hidden'  //(ham.style.visibility != '' ? '' : 'hidden' );
  hamburger.style.visibility = ( hamburger.style.visibility ?'' :'hidden' )

	// let tog = $( 'toggleMe' ).style
	// tog.display != 'none' ? tog.display = 'none' : tog.display = '';
  // console.log(tog)
  toggleMe.style.display = ( toggleMe.style.display ?'' :'none');
}

