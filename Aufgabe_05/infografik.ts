var africa: string = "Afrika";
var southamerica: string = "South America";
var europe: string = "Europa";
var northamerica: string = "Nordamerika";
var asia: string = "Asien";
var australia: string = "Australien";

var africa_2008: number = 1028;
var africa_2018: number = 1235.5;
var southamerica_2008: number = 1132.6;
var southamerica_2018: number = 1261.5;
var europe_2008: number = 4965.7;
var europe_2018: number = 4209.3;
var northamerica_2008: number = 6600.4;
var northamerica_2018: number = 6035.6;
var asia_2008: number = 12954.7;
var asia_2018: number = 16274.1;
var australia_2008: number = 1993;
var australia_2018: number = 2100.5;

var ganzeWelt_2018: number = africa_2018 + southamerica_2018 + europe_2018 + northamerica_2018 + asia_2018 + australia_2018;

var differenzAfrica: number = africa_2018-africa_2008;
var differenzSouthamerika: number = southamerica_2018-southamerica_2008;
var differenzEurope: number = europe_2018-europe_2008;
var differenzNorthamerica: number = northamerica_2018-northamerica_2008;
var differenzAsia: number = asia_2018-asia_2008;
var differenzAustralia: number = australia_2018-australia_2008;

console.log("Die Emission von " + africa + " ist:" + africa_2018 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht " + africa + " damit " + africa_2018/ganzeWelt_2018 *100 /100 *100 + "%");
console.log("Für " + africa + " hat sich 2018 im Vergleich zu 2008 die Emission um " + differenzAfrica/africa_2008 *100 /100 *100 + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + differenzAfrica + " kg CO2");

console.log("Die Emission von " + southamerica + " ist: " + southamerica_2018 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht " + southamerica + " damit " + southamerica_2018/ganzeWelt_2018 *100 /100 *100 + "%");
console.log("Für " + southamerica + " hat sich 2018 im Vergleich zu 2008 die Emission um " + differenzSouthamerika/southamerica_2008 *100 /100 *100 + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + differenzSouthamerika + " kg CO2");

console.log("Die Emission von " + europe + " ist: " + europe_2018 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht " + europe + " damit " + europe_2018/ganzeWelt_2018 *100 /100 *100 + "%");
console.log("Für " + europe + " hat sich 2018 im Vergleich zu 2008 die Emission um " + differenzEurope/europe_2008 *100 /100 *100 + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + differenzEurope + " kg CO2");

console.log("Die Emission von " + northamerica + " ist: " + northamerica_2018 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht " + northamerica + " damit " + northamerica_2018/ganzeWelt_2018 *100 /100 *100 + "%");
console.log("Für " +northamerica + " hat sich 2018 im Vergleich zu 2008 die Emission um " + differenzNorthamerica/northamerica_2008 *100 /100 *100 + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + differenzNorthamerica + " kg CO2");

console.log("Die Emission von " + asia + " ist: " + asia_2018 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht " + asia + " damit " + asia_2018/ganzeWelt_2018 *100 /100 *100 + "%");
console.log("Für " + asia + " hat sich 2018 im Vergleich zu 2008 die Emission um " + differenzAsia/asia_2008 *100 /100 *100 + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + differenzAsia + " kg CO2");

console.log("Die Emission von " + australia + " ist: " + australia_2018 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht " + australia + " damit " + australia_2018/ganzeWelt_2018 *100 /100 *100 + "%");
console.log("Für " + australia + " hat sich 2018 im Vergleich zu 2008 die Emission um " + differenzAustralia/australia_2008 *100 /100 *100 + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + differenzAustralia + " kg CO2");