$(document).ready(function() {
	ymaps.ready(init);    
        function init(){ 
            var myMap = new ymaps.Map("footerMap", {
                center: [55.611409, 37.201122],
                zoom: 16
            }); 
        }
});