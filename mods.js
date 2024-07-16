// MODS
setTimeout(doSomething, 500);
function doSomething() {
    if (Game.ready) {
        Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE-POCs/BlackholeInverter.js?v=1.14');
        Game.LoadMod('https://staticvariablejames.github.io/InsugarTrading/InsugarTrading.js');
        Game.LoadMod('https://staticvariablejames.github.io/SpicedCookies/Spice.js');
        Game.LoadMod('https://klattmose.github.io/CookieClicker/Horticookie.js');
        Game.LoadMod('https://klattmose.github.io/CookieClicker/AmericanSeason.js');
        Game.LoadMod('https://klattmose.github.io/CookieClicker/minigameCasino.js');
        Game.LoadMod("https://klattmose.github.io/CookieClicker/IdleTrading.js?v=1.10");
        Game.LoadMod("https://rawcdn.githack.com/0x415374/MoreHeavenlyUpgrades/f258a57a2c6671bf510ab733265d07dbb4dea323/mhur.js");
              Game.LoadMod("https://cbass92.org/OatmealRaisin/frozenCookiesCustom.js");
        var scriptII=document.createElement('script');
        scriptII.setAttribute('type','text/javascript');
        scriptII.setAttribute('src','https://worldwidewaves.github.io/Cookie-Stonks/main.user.js');
        document.body.appendChild(scriptII);
        Game.Win("Not Quite Chocolate Chip");
    } else {
        setTimeout(doSomething, 500);
    }
}