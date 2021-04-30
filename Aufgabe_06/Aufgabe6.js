var africa = "Africa";
var southamerica = "Southamerica";
var europe = "Europe";
var northamerica = "Northamerica";
var asia = "Asia";
var australia = "Australia";
var africa2008 = 1028;
var africa2018 = 1235.5;
var southamerica2008 = 1132.6;
var southamerica2018 = 1261.5;
var europe2008 = 4965.7;
var europe2018 = 4209.3;
var northamerica2008 = 6600.4;
var northamerica2018 = 6035.6;
var asia2008 = 12954.7;
var asia2018 = 16274.1;
var australia2008 = 1993;
var australia2018 = 2100.5;
var ganzeWelt2018 = africa2018 + southamerica2018 + europe2018 + northamerica2018 + asia2018 + australia2018;
window.addEventListener('load', function () {
    function emission(name, continent2008, continent2018) {
        document.querySelector('#titleRegion').innerHTML = name;
        document.querySelector('#region').innerHTML = name;
        document.querySelector("#wert2018").innerHTML = continent2018.toString();
        document.querySelector("#relativeEmission").innerHTML = (continent2018 / ganzeWelt2018 * 100 / 100 * 100).toFixed(2) + "%".toString();
        document.querySelector('#differenz').innerHTML = Math.round((continent2018 - continent2008) / continent2008 * 100 / 100 * 100).toFixed(2) + "%".toString();
        document.querySelector('#absoluteGrowth').innerHTML = Math.round(continent2018 - continent2008).toString();
        document.querySelector('.chartWrapper').setAttribute('style', 'height:' + continent2018 / ganzeWelt2018 * 100);
        document.querySelector('.chart').setAttribute('style', 'height:' + continent2018 / ganzeWelt2018 * 100 + '%');
    }
    document.querySelector('.europe').addEventListener('click', function () { emission(europe, europe2008, europe2018); });
    document.querySelector('.northamerica').addEventListener('click', function () { emission(northamerica, northamerica2008, northamerica2018); });
    document.querySelector('.southamerica').addEventListener('click', function () { emission(southamerica, southamerica2008, southamerica2018); });
    document.querySelector('.africa').addEventListener('click', function () { emission(africa, africa2008, africa2018); });
    document.querySelector('.asia').addEventListener('click', function () { emission(asia, asia2008, asia2018); });
    document.querySelector('.australia').addEventListener('click', function () { emission(australia, australia2008, australia2018); });
});
//# sourceMappingURL=Aufgabe6.js.map