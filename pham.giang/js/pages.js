const RecentPage = async() => {
 
	let types = await query({type:'types_by_user_id',params:[sessionStorage.userId]});
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
   let d = await query({type:'user_by_id',params:[sessionStorage.userId]});
   console.log(d)

   $("#user-profile-page .profile").html(makeUserProfile(d.result));
}

const TypeProfilePage = async() => {

   query({
      type:'type_by_id',
      params:[sessionStorage.typeId]
   }).then(d=>{
      console.log(d)

      $("#type-profile-page .profile").html(makeTypeProfile(d.result));
   });

   query({
      type:'locations_by_type_id',
      params:[sessionStorage.typeId]
   }).then(d=>{
      makeMap("#type-profile-page .map").then(map_el=>{
         makeMarkers(map_el,d.result);
      })
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

   $("#type-edit-page .profile").html(makeTypeEdit(d.result));
}