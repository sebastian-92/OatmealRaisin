// Load Mods
setTimeout(doSomething, 500);
function doSomething() {
    var element = document.getElementById('particle0');
    if (Game.ready) {
        Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');
        Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE-POCs/BlackholeInverter.js?v=1.14');
        Game.LoadMod('https://staticvariablejames.github.io/InsugarTrading/InsugarTrading.js');
        Game.LoadMod('https://klattmose.github.io/CookieClicker/Horticookie.js');
        Game.LoadMod('https://klattmose.github.io/CookieClicker/AmericanSeason.js');
        Game.LoadMod('https://klattmose.github.io/CookieClicker/minigameCasino.js');
        Game.LoadMod("https://klattmose.github.io/CookieClicker/IdleTrading.js?v=1.10");
        Game.LoadMod('https://cdn.jsdelivr.net/gh/Ancyker/Crustulum/Crustulum.js');
            var script = document.createElement('script');
            script.src = "https://www.lschaefer.xyz/cookieClicker/index.js";
            script.id = "hostname"; document.head.appendChild(script);
        var scriptII=document.createElement('script');
        scriptII.setAttribute('type','text/javascript');
        scriptII.setAttribute('src','https://worldwidewaves.github.io/Cookie-Stonks/main.user.js');
        document.body.appendChild(scriptII);
        Game.LoadMod("frozenCookiesCustom.js");
    } else {
        setTimeout(doSomething, 500);
    }
}