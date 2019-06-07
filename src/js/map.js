$(document).ready(function() {
	ymaps.ready(init);    
        function init(){ 
            var myMap = new ymaps.Map("footerMap", {
                center: [55.611409, 37.201122],
                zoom: 12,
            }); 
            var myPlacemark = new ymaps.Placemark([55.611409, 37.201122], null, {
                preset: 'islands#yellowIcon',
            });
            myMap.geoObjects.add(myPlacemark);
            myMap.behaviors.disable('scrollZoom');
        }
});