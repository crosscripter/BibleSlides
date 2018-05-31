function random(from, to) {
    return Math.floor((Math.random() * to) + from);
}

function pick(list) {
    return list[random(0, list.length)];
}

function randomRef() {
    var books = ["GEN","JOB","PSA","PRO","MAT","ROM","EPH","REV"];
    return pick(books) + " " + random(1, 10) + ":" + random(1, 10);
}

function getText(sel, ref) {
    var version = pick(["KJV","NIV","MEV","NLT","CEB"]);
    eref = ref.replace(" ", "+");
    ref += " " + version;
    var url = "https://www.biblegateway.com/passage/?search=" + eref + "&version=" + version;    

    var text = pick([
        "In the beginning God created the heaven and the earth.",
        "In the beginning was the Word, and the Word was with God, and the Word was God.",
        "For I am not ashamed of the gospel of Christ, for it is the power of God unto salvation to everyone that believeth: to the Jews first, and also to the greek."
    ]);
    
    $(sel).html("<span>" + text + "</span><br><span style='float:right;'>" + ref + "</span>"); // .load(url + " .result-text-style-normal");
}

function addGoogleFont(FontName) {
    $("head").append("<link href='https://fonts.googleapis.com/css?family=" + FontName + "' rel='stylesheet' type='text/css'>");
}

function randomCss() {
    var fonts = ["Lato","Poppins","Lora","Bitter",
                 "Rhodium+Libre", "Timmana", "Kurale",
                 "Amita", "Cambay"];

    return {
      float: pick(["left", "clear", "right"]),
      width: random(50, 75) + "%",
      height: random(50, 90) + "%",
      marginTop: random(0, 250) + "px", 
      marginLeft: random(0, 250) + "px",
      color: "white",
      fontFamily: pick(fonts),
      fontSize: random(1, 4) + "em",
      fontStyle: pick(["normal", "bold", "italic"]),
      // fontVariant: pick(["normal", "small-caps"]),
      fontWeight: pick([400, 500, 600, 700, 800]),
      letterSpacing: random(0, 5) + "px",
      lineHeight: pick([1, 1.1, 1.2, 1.5, 2]),
      textAlign: pick(["left", "center", "right", "justify"]),
      textShadow: random(1,10) + "px " 
                + random(1,10) + "px " 
                + random(1,10) + "px black"
    };
}

function randomImage() {
    var url = "http://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-"
    var images = [186056,186059,186061,187785,188201,195846,195890,198406,200787,
        201636,201865,202342,202343,202344,202345,202347,202348,202349,
        202351,202352,202354,202358,202360,202361,202362,202367,202370,
        202372,202373,202374,202375,202376,202378,202396,203759,203762,
        205774,206518,206519,207464,210311,210314,214291,218306,218368,
        218469,218983];

    return url + pick(images) + ".jpg";
}

function slide() {
    var ref = randomRef();
    var css = randomCss();
    addGoogleFont(css.fontFamily);
    
    $(".slide").css({
        backgroundImage: "url('" + randomImage() + "')",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover"
    }).hide().fadeIn(3000);
    
    getText('.text', ref);
    $('.text').css(css).hide().fadeIn(6000);
	$(".slide").delay(5000).fadeOut(3000);
}

setInterval(slide, 11000);
