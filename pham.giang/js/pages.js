const RecentPage = async() => {
 
	// let types = await query({type:'recent_types',params:[sessionStorage.userId]});
	let locs = await query({type:'recent_locations',params:[sessionStorage.userId]});

	console.log(locs);

   let valid_types = locs.result.reduce((r,o)=>{
      o.icon = o.img;
      if(o.lat && o.lng) r.push(o);
      return r;
   },[])

   /* if(types.result.length!=0) {
		$("#recent-page .recent-list").html(makeRecentList(types.result))
		.append("<li class='view-all'><a href='#list-page'>View All</a></li>");
   } else {
   		// Do nothing
   }*/


	let map_el = await makeMap("#recent-page .map");

	// console.log(map_el.data('map'))
  

	makeMarkers(map_el,valid_types);

   map_el.data("markers").forEach((o,i)=>{
      o.addListener("click",function(){
         // console.log("honk")

        sessionStorage.typeId = valid_types[i].type_id;
         $.mobile.navigate("#type-profile-page"); 

        /* $("#recent-type-modal").addClass("active");
         $("#recent-type-modal .modal-body")
            .html(makeTypePopup(valid_types[i])) */
      })
   })
}

//async and await
const ListPage = async() => {
	let d = await query({type:'types_by_user_id',params:[sessionStorage.userId]});
	console.log(d);

  $("#list-page .filter-list").html(makeFilterList(d.result))

	if(d.result.length==0) {
    	$("#list-page .type-list").html(
    		`<div class="display-flex flex-align-center flex-column page-side-padding page-top-padding text-centered">
	    		<img class="illustration" src='images/blank_slate.png'alt='blank slate'>
	    		<h3>Your journal is empty</h3>
	    		<p>Tap on the <strong>+</strong> icon and start adding your types now!</p>
    		 </div>`
    	);
   } else {
    	$("#list-page .type-list").html(makeTypeList(d.result));
   }
}

const UserProfilePage = async() => {
   let user = await query({type:'user_by_id',params:[sessionStorage.userId]});
   let types = await query({type:'types_by_user_id',params:[sessionStorage.userId]});
   let locs = await query({type:'locations_by_user_id',params:[sessionStorage.userId]});

   console.log(user, types, locs);

   $("#user-profile-page .profile").html(makeUserProfile(user.result));
   $("#user-profile-page .types-spot").html(types.result.length);
   $("#user-profile-page .locations-spot").html(locs.result.length);
} //scrolling not working

const TypeProfilePage = async() => {

	let type = await query({type:'type_by_id',params:[sessionStorage.typeId]});
	let loc = await query({type:'latest_location',params:[sessionStorage.typeId]});
	let allLocs = await query({type:'locations_by_type_id',params:[sessionStorage.typeId]});

	console.log(type, loc, allLocs);

	$("#type-profile-page .profile").html(makeTypeProfile(type.result));

  console.log(allLocs.result.length);

  if(allLocs.result.length!=0) {
    $("#type-profile-page .last-spot").html(makeLastSpot(loc.result));
  } else {
    $("#type-profile-page .last-spot").html("N/A");
  }

	$("#type-profile-page .locations-spot").html(allLocs.result.length);
    makeMap("#type-profile-page .map").then(map_el=>{
         makeMarkers(map_el,allLocs.result);
   })
}

const TypeMapPage = async() => {

  let loc = await query({type:'locations_by_type_id',params:[sessionStorage.typeId]});

  console.log(loc);

  let map_el = await makeMap("#type-map-page .map");
  // makeMarkers(map_el,loc.result);

   let loc_icon = loc.result.reduce((r,o)=>{
      o.icon = o.img;
      if(o.lat && o.lng) r.push(o);
      return r;
   },[])

   makeMarkers(map_el,loc_icon);

  map_el.data("markers").forEach((o,i)=>{
    o.addListener("click",function(){
       // console.log("honk")

       $("#location-modal").addClass("active");
       $("#location-modal .modal-body")
          .html(makeLocationPopup(loc_icon[i]))
    }) 
  })
}

const MapAddPage = async() => {

  let map_el = await makeMap("#map-add-page .map");
   makeMarkers(map_el,[]);

  let map = map_el.data("map");

  map.addListener("click",function(e){
    console.log(e, map.getCenter())

    let posFromClick = {
       lat:e.latLng.lat(),
       lng:e.latLng.lng(),
       icon:"images/Location Add.png"
    };
    let posFromCenter = {
       lat:map.getCenter().lat(),
       lng:map.getCenter().lng(),
       icon:"images/Location Add.png"
    };

    $("#add-lat").val(posFromClick.lat)
    $("#add-lng").val(posFromClick.lng)

    makeMarkers(map_el,[posFromClick])
   })
}

const LocationPage = async() => {
   let d = await query({type:'location_by_id',params:[sessionStorage.locationId]});
   console.log(d)

   $("#location-page .profile").html(makeLocationProfile(d.result));
}

const TypeEditPage = async() => {
   let d = await query({type:'type_by_id',params:[sessionStorage.typeId]});
   console.log(d)

   $("#type-edit-page .edit-form").html(makeTypeEdit(d.result));
   $("#type-delete-modal .modal-body").html(makeTypeDelete(d.result[0]));
}

const UserEditPage = async() => {
   let d = await query({type:'user_by_id',params:[sessionStorage.userId]});
   console.log(d)

   $("#user-edit-page .edit-form").html(makeUserEdit(d.result));
}

const LocationEditPage = async() => {
   let d = await query({type:'location_by_id',params:[sessionStorage.locationId]});
   console.log(d)

   $("#location-edit-page .edit-form").html(makeLocationEdit(d.result));
   $("#location-delete-modal .modal-body").html(makeLocationDelete(d.result[0]));
}

const UserUploadPage = async() => {
   query({
      type:'user_by_id',
      params:[sessionStorage.userId]
   }).then(d=>{
      console.log(d)

      makeUploaderImage({
         namespace:'user-upload',
         folder:'',
         name:d.result[0].img
      })
   });
}

const TypeUploadPage = async() => {
   query({
      type:'type_by_id',
      params:[sessionStorage.typeId]
   }).then(d=>{
      console.log(d)

      makeUploaderImage({
         namespace:'type-upload',
         folder:'',
         name:d.result[0].img
      })
   });
}

const LocationUploadPage = async() => {
   query({
      type:'location_by_id',
      params:[sessionStorage.locationId]
   }).then(d=>{
      console.log(d)

      makeUploaderImage({
         namespace:'location-upload',
         folder:'',
         name:d.result[0].img
      })
   });
}
