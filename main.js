function inicializar() {
    
    var OpcionesMapa = {
        center: new google.maps.LatLng(38.3489719, -0.4780289000000266),
        mapTypeId: google.maps.MapTypeId.SATELLITE, 
        zoom: 16
    };
 
    var miMapa;
    
    miMapa = new google.maps.Map(document.getElementById('mapa'), OpcionesMapa);
 
    
    var Marcador = new google.maps.Marker({
                    position: new google.maps.LatLng(38.3489719, -0.4780289000000266),
                    map: miMapa,
                    title:"tastiness"
                });
}
 
function CargaScript() {
    var script = document.createElement('script');
    script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=inicializar';
    document.body.appendChild(script);                 
}
 
window.onload = CargaScript;;