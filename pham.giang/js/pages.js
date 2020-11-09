const RecentPage = async() => {
	let d = await query({type:'types_by_user_id',params:[sessionStorage.userId]});
	let d2 = await query({type:'recent_locations',params:[sessionStorage.userId]});
   console.log(d, d2)

   $("#recent-page .recent-list").html(makeRecentList(d.result));
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
   let d = await query({type:'type_by_id',params:[sessionStorage.typeId]});
   console.log(d)

   $("#type-profile-page .profile").html(makeTypeProfile(d.result));
}