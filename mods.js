// MODS
setTimeout(doSomething, 500);
function doSomething() {
    if (Game.ready) {
        Game.LoadMod('https://cdn.jsdelivr.net/gh/klattmose/CookieClicker/CCSE-POCs/BlackholeInvertermin.js');
        Game.LoadMod('https://cdn.jsdelivr.net/gh/staticvariablejames/InsugarTrading/InsugarTrading.min.js');
        Game.LoadMod('https://cdn.jsdelivr.net/gh/staticvariablejames/SpicedCookies/Spice.min.js');
        Game.LoadMod('https://cdn.jsdelivr.net/gh/klattmose/CookieClicker/Horticookie.min.js');
        Game.LoadMod('https://cdn.jsdelivr.net/gh/klattmose/CookieClicker/AmericanSeason.min.js');
        Game.LoadMod('https://cdn.jsdelivr.net/gh/klattmose/CookieClicker/minigameCasino.min.js');
        Game.LoadMod("https://cdn.jsdelivr.net/gh/klattmose/CookieClicker/IdleTrading.min.js");
        Game.LoadMod('https://cdn.jsdelivr.net/gh/hyoretsu/DarkysCheevosPackage/dist/main.min.js');
        Game.LoadMod('https://cdn.jsdelivr.net/gh/gamrguy/OmniscientCookies/OmniscientCookies.min.js');
        Game.LoadMod("https://cdn.jsdelivr.net/gh/cdn.jsdelivr.net/gh/sebastian-92/OatmealRaisin/frozenCookiesCustom.min.js");
        var scriptII=document.createElement('script');
        scriptII.setAttribute('type','text/javascript');
        scriptII.setAttribute('src','https://cdn.jsdelivr.net/gh/worldwidewaves/Cookie-Stonks/main.user.js');
        document.body.appendChild(scriptII);
        Game.Win("Not Quite Chocolate Chip");
    } else {
        setTimeout(doSomething, 500);
    }
}