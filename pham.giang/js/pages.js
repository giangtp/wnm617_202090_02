const RecentPage = () => {}

//async and await
const ListPage = async() => {
	let d = await query({type:'types_by_user_id',params:[sessionStorage.userId]});
	console.log(d);

	$("#list-page .animallist").html(makeAnimalList(d.result));
}

const UserProfilePage = async() => {
   let d = await query({type:'user_by_id',params:[sessionStorage.userId]});

   console.log(d)

   $("#user-profile-page .profile").html(makeUserProfile(d.result));
}