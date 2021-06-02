var title = document.createElement("p");
var subtitle = document.createElement("h1");

var image_sect1 = document.createElement("img");
var image_sect2 = document.createElement("img");
var image_sect3 = document.createElement("img");
var image_sect4 = document.createElement("img");



var text1 = document.createTextNode('RESTAURANT');
var text2 = document.createTextNode('Explore our menu and eat what you want');

// var image1 = document.cre
// var image2

image_sect1.setAttribute("src", "images/screen1.png");
image_sect1.setAttribute("width", "170");
image_sect1.setAttribute("height", "240");
image_sect1.setAttribute("alt", "");

image_sect2.setAttribute("src", "images/screen2.png");
image_sect2.setAttribute("width", "170");
image_sect2.setAttribute("height", "240");
image_sect2.setAttribute("alt", "");

image_sect3.setAttribute("src", "images/screen1.png");
image_sect3.setAttribute("width", "170");
image_sect3.setAttribute("height", "240");
image_sect3.setAttribute("alt", "");

image_sect4.setAttribute("src", "images/screen2.png");
image_sect4.setAttribute("width", "170");
image_sect4.setAttribute("height", "240");
image_sect4.setAttribute("alt", "");



document.getElementById('images1').appendChild(image_sect1);
document.getElementById('images2').appendChild(image_sect4);


document.getElementById('images1').appendChild(image_sect2);
document.getElementById('images2').appendChild(image_sect3);


title.appendChild(text1);
subtitle.appendChild(text2);

var div_id1 = document.getElementById('title-section');
var div_id2 = document.getElementById('subtitle-section');
div_id1.appendChild(title);
div_id2.appendChild(subtitle);


