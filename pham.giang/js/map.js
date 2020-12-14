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

   let customMarker = CreateCustomMarker();
   map_locs.forEach(o=>{
     /* let m = new google.maps.Marker({
         position: o,
         map: map,
         icon:{
            url:o.icon,
            scaledSize: {
               width:50,
               height:50
            }
         } 
   });*/
      let m = new customMarker(o.lat, o.lng, map, o.icon);
      markers.push(m);
   });

   map_el.data("markers",markers);
   setTimeout(()=>setMapBounds(map_el, map_locs),150);
}


//Custom marker function borrowed from: https://stackoverflow.com/questions/46416883/how-add-circle-shape-in-google-maps-custom-icon

function CreateCustomMarker(){
   function CustomMarker(lat,lng, map, imageSrc) {
     this.latlng_ = new google.maps.LatLng(lat,lng);
     this.imageSrc = imageSrc;
     // Once the LatLng and text are set, add the overlay to the map.  This will
     // trigger a call to panes_changed which should in turn call draw.
     this.setMap(map);
   }

   CustomMarker.prototype = new google.maps.OverlayView();

   CustomMarker.prototype.draw = function() {
     // Check if the div has been created.
     var div = this.div_;
     if (!div) {
       // Create a overlay text DIV
       div = this.div_ = document.createElement('div');
       // Create the DIV representing our CustomMarker
       div.className = "customMarker"


       var img = document.createElement("img");
       img.src = this.imageSrc;
       div.appendChild(img);
       var me = this;
       google.maps.event.addDomListener(div, "click", function(event) {
         google.maps.event.trigger(me, "click");
       });

       // Then add the overlay to the DOM
       var panes = this.getPanes();
       panes.overlayImage.appendChild(div);
     }

     // Position the overlay 
     var point = this.getProjection().fromLatLngToDivPixel(this.latlng_);
     if (point) {
       div.style.left = point.x + 'px';
       div.style.top = point.y + 'px';
     }
   };

   CustomMarker.prototype.remove = function() {
     // Check if the overlay was on the map and needs to be removed.
     if (this.div_) {
       this.div_.parentNode.removeChild(this.div_);
       this.div_ = null;
     }
   };

   CustomMarker.prototype.getPosition = function() {
     return this.latlng_;
   };
   return CustomMarker;
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