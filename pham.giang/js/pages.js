const RecentPage = async() => {}

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