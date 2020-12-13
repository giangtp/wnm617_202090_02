const makeMap = async (target, center={lat: 37.786206, lng: -122.399341}) => {

	await checkData(()=>window.google);

	let map_el = $(target);

   if(!map_el.data('map'))
      map_el.data({
         "map":new google.maps.Map(map_el[0], {
            center: center,
            zoom: 12,
            disableDefaultUI: true,
            mapId: '8970dca3c060ed9a'
         }),
         "infoWindow":new google.maps.InfoWindow({content:''})
     });

   return map_el;
}

const makeMarkers = (map_el, map_locs) => {

   let map = map_el.data('map');
   let markers = map_el.data("markers");

   if(markers) markers.forEach(o=>o.setMap(null));

   markers = [];

   map_locs.forEach(o=>{
      let m = new google.maps.Marker({
         position: o,
         map: map,
         icon:{
            url:o.icon,
            scaledSize: {
               width:50,
               height:50
            }
         }
      });
      markers.push(m);
   });

   map_el.data("markers",markers);
   setTimeout(()=>setMapBounds(map_el, map_locs),150);
}


const setMapBounds = (map_el, map_locs) => {
   let map = map_el.data('map');

   if(map_locs.length==1) {
      map.setCenter(map_locs[0]);
      map.setZoom(14);
   } else if(map_locs.length==0) {
      if(window.location.protocol!=="https:"){
         return;
      } else {
         navigator.geolocation.getCurrentPosition(
            p=>{
               let pos = {
                  lat:p.coords.latitude,
                  lng:p.coords.longitude
               };
               map.setCenter(pos);
               map.setZoom(zoom);
            },
            (...args)=>{
               console.log("Error?",args);
            },{
               enableHighAccuracy:false,
               timeout:5000,
               maximumAge:0
            }
         );
      }  
   } else {
      let bounds = new google.maps.LatLngBounds(null);
      map_locs.forEach(o=>{
         bounds.extend(o);
      });
      map.fitBounds(bounds);
   }
}