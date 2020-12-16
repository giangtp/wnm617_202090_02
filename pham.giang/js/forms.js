const checkSignupForm = () => {
   let username = $("#signup-username").val();
   let email = $("#signup-email").val();
   let password = $("#signup-password").val();
   let passwordconfirm = $("#signup-password-confirm").val();

   if(username==""|| email=="" || password=="" || passwordconfirm=="") {
      makeWarning("#warning-modal","Please fill in all the information");
      return;
   } else if (password!=passwordconfirm) {
      // throw "Passwords don't match";
      makeWarning("#warning-modal","Passwords don't match");
      return;
   } else {
   		query({
            type:'insert_user',
            params:[username,email,password]})
         .then(d=>{
            if(d.error) {
   				// throw d.error;
               makeWarning("#warning-modal","Username or Email already taken");
               return;
   			} 
   			console.log(d.id)

            $("#signup-form")[0].reset();
            
            sessionStorage.userId = d.id;
             $.mobile.navigate("#complete-signup-page"); 
   	})
   }
}

const checkOnboardingForm = () => {
   let name = $("#add-fullname").val();
   let phone = $("#add-phone").val();
   let occupation = $("#add-occupation").val();

   query({
      type:'user_onboarding',
      params:[name,phone,occupation,sessionStorage.userId]})
   .then(d=>{
      if(d.error) {
         throw d.error;
      }
      $("#onboarding-form")[0].reset();
      $.mobile.navigate("#onboarding-page"); 
   })
}


/* SEARCH */

const checkRecentSearch = async () => {
   let s = $("#recent-search-input").val();
   let r = await query({type:"type_search_recent",params:[s,sessionStorage.userId]});
   let map_el = await makeMap("#recent-page .map");

   let found_type = r.result.reduce((r,o)=>{
      o.icon = o.img;
      if(o.lat && o.lng) r.push(o);
      return r;
   },[])

   console.log(s, r)

   if(r.result.length==0) {
      makeWarning("#no-search-modal","No Results Found");
      return;
   } else {
      makeMarkers(map_el,found_type);

      map_el.data("markers").forEach((o,i)=>{
         o.addListener("click",function(){
            sessionStorage.typeId = found_type[i].type_id;
            $.mobile.navigate("#type-profile-page"); 
         }) 
      })
   }
   console.log(r)
}

const checkSearchForm = async () => {
   let s = $("#list-search-input").val();
   console.log(s)

   let r = await query({type:"search_types",params:[s,sessionStorage.userId]});

   if(r.result.length==0) {
      $("#list-page .type-list").html(
         `<div class="display-flex flex-align-center flex-column page-side-padding page-top-padding text-centered">
            <img class="illustration" src='images/no_search.png'alt='no search found'>
            <h3>No Results Found</h3>
            <p>We cannot find what you're trying to search, please try again.</p>
         </div>`
      );
   } else {
      $("#list-page .type-list").html(makeTypeList(r.result));
   }
   console.log(r)
}

/* FILTER */

const checkListFilter = async (d) => {
   let r = d.value=='all' ?
      await query({
         type:'types_by_user_id',
         params:[sessionStorage.userId]
      }) :
      await query({
         type:'type_filter',
         params:[d.field,d.value,sessionStorage.userId]
      });

   console.log(r)

   if(r.result.length==0) {
      $("#list-page .type-list").html(
         `<div class="display-flex flex-align-center flex-column page-side-padding page-top-padding text-centered">
            <img class="illustration" src='images/no_search.png'alt='no search found'>
            <h3>Oops, No Results Found</h3>
            <p>We cannot find what you're trying to search, please try again.</p>
          </div>`
      );
   } else {
      $("#list-page .type-list").html(makeTypeList(r.result));
   }
}

/* USER */

const checkUserEditForm = () => {
   let username = $("#edit-username").val();
   let name = $("#edit-fullname").val();
   let email = $("#edit-email").val();
   let phone = $("#edit-phone").val();
   let occupation = $("#edit-occupation").val();

   query({
      type:'update_user',
      params:[username,name,email,phone,occupation,sessionStorage.userId]})
   .then(d=>{
      if(d.error) {
         throw d.error;
      }
      window.history.back();
   })
}


/* TYPE */

const checkTypeAddForm = () => {
   let name = $("#add-type-name").val();
   let category = $("#add-category").val();
   let classification = $("#add-classification").val();
   let description = $("#add-description").val();
   let typerating = $("#add-type-rating").val();


   query({
      type:'insert_type',
      params:[sessionStorage.userId,name,category,classification,description,typerating]})
   .then(d=>{
      if(name== "" || category=="" || category==""||classification==""||description==""||typerating=="") {
         makeWarning("#type-warning-modal","Please fill in all information");
         return;
      }
      console.log(d.id)

      $("#type-add-form")[0].reset();

      sessionStorage.typeId = d.id;
      $.mobile.navigate($("#type-add-destination").val());
   })
}

const checkTypeEditForm = () => {
   let name = $("#edit-type-name").val();
   let category = $("#edit-category").val();
   let classification = $("#edit-classification").val();
   let description = $("#edit-description").val();
   let typerating = $("#edit-type-rating").val();

   query({
      type:'update_type',
      params:[name,category,classification,description,typerating,sessionStorage.typeId]})
   .then(d=>{
      if(d.error) {
         throw d.error;
      }
      window.history.back();
   })
}

const checkTypeDelete = id => {
   query({
      type:'delete_type',
      params:[id]
   }).then(d=>{
      if(d.error) {
         throw d.error;
      }
      $.mobile.navigate($("#type-add-destination").val());
   });
}



/* LOCATIONS */
const checkLocationAddForm = () => {
   let lat = $("#add-lat").val();
   let lng = $("#add-lng").val();
   let rating = $("#add-usage-rating").val();
   let application = $("#add-application").val();
   let fontstyle = $("#add-font-style").val();
   let note = $("#add-note").val();

   query({
      type:'insert_location',
      params:[sessionStorage.typeId,lat,lng,rating,application,fontstyle,note]})
   .then(d=>{
      if(lat=="" || lng=="" || rating=="" || application =="" || fontstyle==""||note=="") {
         makeWarning("#location-warning-modal","Please fill in all information");
         return;
      }
      $("#location-add-form")[0].reset();
      window.history.go(-2);
   })
}

const checkLocationEditForm = () => {
   let rating = $("#edit-usage-rating").val();
   let application = $("#edit-application").val();
   let fontstyle = $("#edit-font-style").val();
   let note = $("#edit-note").val();

   query({
      type:'update_location',
      params:[rating,application,fontstyle,note,sessionStorage.locationId]})
   .then(d=>{
      if(d.error) {
         throw d.error;
      }
      window.history.back();
   })
}

const checkLocationDelete = id => {
   query({
      type:'delete_location',
      params:[id]
   }).then(d=>{
      if(d.error) {
         throw d.error;
      }
      window.history.go(-2);
   });
} 


/* IMAGE UPLOAD */

const checkUpload = file => {
   let fd = new FormData();
   fd.append("image",file);

   return fetch('data/api.php',{
      method:'POST',
      body:fd
   }).then(d=>d.json())
}

const checkUserUpload = () => {
   let upload = $("#user-upload-image").val()
   if(upload=="") return;

   query({
      type:'update_user_image',
      params:[upload,sessionStorage.userId]
   }).then(d=>{
      if(d.error) {
         throw d.error;
      }
      window.history.back();
   })
}

const checkTypeUpload = () => {
   let upload = $("#type-upload-image").val()
   if(upload=="") return;

   query({
      type:'update_type_image',
      params:[upload,sessionStorage.typeId]
   }).then(d=>{
      if(d.error) {
         throw d.error;
      }
      window.history.back();
   })
}

const checkLocationUpload = () => {
   let upload = $("#location-upload-image").val()
   if(upload=="") return;

   query({
      type:'update_location_image',
      params:[upload,sessionStorage.locationId]
   }).then(d=>{
      if(d.error) {
         throw d.error;
      }
      window.history.go(-2);
   })
}