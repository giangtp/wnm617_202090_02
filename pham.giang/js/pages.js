const RecentPage = async() => {
 
	let types = await query({type:'recent_types',params:[sessionStorage.userId]});
	let locs = await query({type:'recent_locations',params:[sessionStorage.userId]});

	console.log(types, locs);

   let valid_types = locs.result.reduce((r,o)=>{
      o.icon = o.img;
      if(o.lat && o.lng) r.push(o);
      return r;
   },[])

	$("#recent-page .recent-list").html(makeRecentList(types.result))
	.append("<li class='view-all'><a href='#list-page'>View All</a></li>");

	let map_el = await makeMap("#recent-page .map");

	// console.log(map_el.data('map'))

	makeMarkers(map_el,locs.result);
}

//async and await
const ListPage = async() => {
	let d = await query({type:'types_by_user_id',params:[sessionStorage.userId]});
	console.log(d);

	$("#list-page .type-list").html(makeTypeList(d.result));
}

const UserProfilePage = async() => {
   let user = await query({type:'user_by_id',params:[sessionStorage.userId]});
   let types = await query({type:'types_by_user_id',params:[sessionStorage.userId]});
   let locs = await query({type:'locations_by_user_id',params:[sessionStorage.userId]});

   console.log(user, types, locs);

   $("#user-profile-page .profile").html(makeUserProfile(user.result));
   $("#user-profile-page .types-spot").html(types.result.length);
   $("#user-profile-page .locations-spot").html(locs.result.length);
}

const TypeProfilePage = async() => {

	let type = await query({type:'type_by_id',params:[sessionStorage.typeId]});
	let loc = await query({type:'latest_location',params:[sessionStorage.typeId]});
	let allLocs = await query({type:'locations_by_type_id',params:[sessionStorage.typeId]});

	console.log(type, loc, allLocs);

	$("#type-profile-page .profile").html(makeTypeProfile(type.result));
	$("#type-profile-page .last-spot").html(makeLastSpot(loc.result));

	$("#type-profile-page .locations-spot").html(allLocs.result.length);
    makeMap("#type-profile-page .map").then(map_el=>{
         makeMarkers(map_el,allLocs.result);
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
}

const UserEditPage = async() => {
   let d = await query({type:'user_by_id',params:[sessionStorage.userId]});
   console.log(d)

   $("#user-edit-page .edit-form").html(makeUserEdit(d.result));
}

const LocationEditPage = async() => {
   let d = await query({type:'type_by_id',params:[sessionStorage.locationId]});
   console.log(d)

   $("#location-edit-page .edit-form").html(makeLocationEdit(d.result));
}

