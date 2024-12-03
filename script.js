// JavaScript
//console.log('Hello world!');

const map = L.map('map').setView([33.671024718308985, 130.4446857583118], 14);

//L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
   // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 //}).addTo(map);


// L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>',}).addTo(map);


 // Open Street Map hot
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
  }).addTo(map);


//アイコン
//const whiteIcon = L.icon({
    //iconUrl: 'images/ico.png',
    //shadowUrl: 'images/ico_shadow.png',
  
 // iconSize:     [40, 40], // size of the icon
  //shadowSize:   [40, 40], // size of the shadow
 // iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
 // shadowAnchor: [20, 40],  // the same for the shadow
 // popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
 // });

 //複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
    options: {
      shadowUrl: 'images/ico_shadow.png',
      iconSize: [40, 40],
      shadowSize: [40, 40],
      iconAnchor: [20, 40],
      shadowAnchor: [20, 40],
      popupAnchor: [0, -42]
    }
  });
  
  const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
    pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' }),
    yellowIcon = new circleIcon({ iconUrl: 'images/ico_yellow.png' });


  L.marker([33.671024718308985, 130.4446857583118], { icon: whiteIcon }).addTo(map).bindPopup('こんにちは！<img src="images/sea1.png" alt="sea">').openPopup();

  L.marker([33.67273905165527, 130.44305497532042], { icon: pinkIcon }).addTo(map).bindPopup('こんにちは！<img src="images/p1.png" alt="pipi">').openPopup();
  
  L.marker([33.65964483143206, 130.44397502013032], { icon: yellowIcon }).addTo(map).bindPopup('こんにちは！<img src="images/sea1.png" alt="sea">').openPopup();

  const circle = L.circle([33.65964483143206, 130.44397502013032], {
    color: '#ff9500', //円の輪郭線の色
    fillColor: '#009bbf', //円の塗りつぶしの色
    fillOpacity: 0.3, //塗りつぶしの不透明度
    radius: 1000 //半径、メートルで指定
  }).addTo(map);

  circle.bindPopup("半径1kmの範囲");

 
  // 多角形の表示
const polygon = L.polygon([
    [33.674926, 130.449085],
    [33.689853, 130.455351],
    [33.675711, 130.469856]
  ], {
    color: '#006888',
    fillColor: '#fff462',
    fillOpacity: 0.3
  }).addTo(map);

  
  // クリック位置の緯度経度表示
const popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは" + e.latlng.toString() + "です")
    .openOn(map);
}

map.on('click', onMapClick);