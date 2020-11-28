const checkSignupForm = () => {
   let username = $("#signup-username").val();
   let email = $("#signup-email").val();
   let password = $("#signup-password").val();
   let passwordconfirm = $("#signup-password-confirm").val();

   if(password!=passwordconfirm) {
      throw "Passwords don't match";
   } else {
   		query({type: 'insert_user', params:[username, email, password]})
   		.then(d=>{
   			if(d.error) {
   				throw d.error;
   			}
   			console.log(d.id)
   			$.mobile.navigate("#signin-page");
   		})
   }
}

const checkUserEditForm = () => {
   let username = $("#edit-username").val();
   let name = $("#edit-fullname").val();
   let email = $("#user-edit-email").val();

   query({
      type:'update_user',
      params:[username,name,email,sessionStorage.userId]})
   .then(d=>{
      if(d.error) {
         throw d.error;
      }
      window.history.go(-2);
   })
}

const checkTypeAddForm = () => {
   let name = $("#add-type-name").val();
   let category = $("#add-category").val();
   let classification = $("#add-classification").val();


   query({
      type:'insert_type',
      params:[sessionsStorage.userId,name,category,classification]})
   .then(d=>{
      if(d.error) {
         throw d.error;
      }
      console.log(d.id)

      sessionsStorage.animalId = d.id;
      $.mobile.navigate($("#type-add-destination").val());
   })
}