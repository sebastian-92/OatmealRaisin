setTimeout(doSomething, 1000);
function doSomething() {
    var element = document.getElementById('particle0');
    if (typeof (element) != 'undefined' && element != null) {
Game.LoadMod("https://cookiemonsterteam.github.io/CookieMonster/dist/CookieMonster.js");
Game.LoadMod('https://cdn.jsdelivr.net/gh/Ancyker/Crustulum/Crustulum.js');
Game.LoadMod('https://staticvariablejames.github.io/InsugarTrading/InsugarTrading.js');
Game.LoadMod('https://rawgit.com/yannprada/cookie-garden-helper/master/cookie-garden-helper.js');
Game.LoadMod('https://cdn.jsdelivr.net/gh/klattmose/CookieClicker/Horticookie.js');
    } else {
        setTimeout(doSomething, 1000);
    }
}