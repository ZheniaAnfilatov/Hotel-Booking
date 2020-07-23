$(document).ready(function () {

  // слайдер
  $('.slick-slider').slick({});


  // карты
  ymaps.ready(init);

  function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
      center: [7.973430, 98.343838],
      zoom: 15
    });
    // Создание геообъекта с типом точка (метка).
    var myGeoObject = new ymaps.GeoObject({
      geometry: {
        type: "Point", // тип геометрии - точка
        coordinates: [7.973430, 98.343838] // координаты точки
      }
    });

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myGeoObject);
  }
});