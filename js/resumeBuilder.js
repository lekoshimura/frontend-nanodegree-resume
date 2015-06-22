$("#main").append("Leonardo Eiji Koshimura");
var formattedName = "Leonardo Eiji Koshimura";
var formattedRole = "Front End Developer";

$("#header").prepend(HTMLheaderRole.replace("%data%", formattedRole));
$("#header").prepend(HTMLheaderName.replace("%data%", formattedName));
