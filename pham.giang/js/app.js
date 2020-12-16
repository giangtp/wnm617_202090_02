/* Document Ready */

$(()=>{

   checkUserId();

   $(document)

   .on("pagecontainerbeforeshow",function(e,ui){
      console.log(ui.toPage[0].id)

      // Routing
      switch(ui.toPage[0].id) {
         case 'onboarding-page': showSlides(slideIndex); 
            break;
         case 'recent-page': RecentPage(); 
            $("#recent-search-form")[0].reset();
            break;
         case 'list-page': ListPage(); 
            $("#list-search-form")[0].reset();
            break;

         // USER
         case 'user-profile-page': UserProfilePage(); break;
         case 'user-edit-page': UserEditPage();break;
         case 'user-upload-page': UserUploadPage(); break;
         case 'password-edit-page': 
            $("#password-edit-form")[0].reset();
            break;

         // TYPE
         case 'type-profile-page': TypeProfilePage(); break;
         case 'type-add-page': 
            $("#type-add-form")[0].reset();
            break;
         case 'type-edit-page': TypeEditPage();break;
         case 'type-upload-page': TypeUploadPage(); break;
         case 'type-map-page': TypeMapPage(); 
            $("#type-map-page .modal").removeClass("active");
            break;
         case 'map-add-page': MapAddPage(); 
            $("#map-add-page .modal").addClass("active");
            break;

         // LOCATION
         case 'location-page': LocationPage(); break;
         case 'location-add-page': 
            $("#location-add-form")[0].reset();
            break;
         case 'location-edit-page': LocationEditPage(); break;
         case 'location-upload-page': LocationUploadPage(); break;
      }
   })

   /* FORM SUBMISSIONS */

   .on("submit","#signin-form",function(e){
      e.preventDefault();
      checkSigninForm();
   })

   .on("submit","#signup-form",function(e){
      e.preventDefault();
      checkSignupForm();
   })

   .on("submit","#onboarding-form",function(e){
      e.preventDefault();
      checkOnboardingForm();
   })

   .on("submit","#recent-search-form",function(e){
      e.preventDefault();
      checkRecentSearch();
   })

   .on("submit","#list-search-form",function(e){
      e.preventDefault();
      checkSearchForm();
   })

   .on("submit","#user-edit-form",function(e){
      e.preventDefault();
      checkUserEditForm();
   })

   .on("submit","#type-add-form",function(e){
      e.preventDefault();
      checkTypeAddForm();
   })

   .on("submit","#type-edit-form",function(e){
      e.preventDefault();
      checkTypeEditForm();
   })

   .on("submit","#location-add-form",function(e){
      e.preventDefault();
      checkLocationAddForm();
   })

   .on("submit","#location-edit-form",function(e){
      e.preventDefault();
      checkLocationEditForm();
   })



   /* ANCHOR CLICKS */

   .on("click",".js-search-jump",function(e){
      checkSearchForm();
   })  
   .on("click",".filter",function(e){
      checkListFilter($(this).data());
      $(this).addClass("active")
         .siblings().removeClass("active")
   })

   .on("click",".js-logout",function(e){
      sessionStorage.removeItem('userId');
      $("#signin-page .signup").removeClass("active");
      $("#signin-page .signin").addClass("active");
      checkUserId();
   })
   .on("click",".js-type-jump",function(e){
      sessionStorage.typeId = $(this).data("id");
      $.mobile.navigate("#type-profile-page");
   })
   .on("click",".js-location-jump",function(e){
      sessionStorage.locationId = $(this).data("id");
      $.mobile.navigate("#location-page");
   })
   .on("click",".js-type-delete",function(e){
      checkTypeDelete($(this).data("id"));
   })
   .on("click",".js-location-delete",function(e){
      checkLocationDelete($(this).data("id"));
   })
   .on("click",".js-user-upload",function(e){
      checkUserUpload();
   })
   .on("click",".js-type-upload",function(e){
      checkTypeUpload();
   })
   .on("click",".js-location-upload",function(e){
      checkLocationUpload();
   })



   /* IMAGE UPLOAD */

   .on("change",".image-uploader input",function(e){
      checkUpload(this.files[0])
      .then(d=>{
         console.log(d)
         makeUploaderImage({
            namespace:'user-upload',
            folder:'uploads/',
            name:d.result
         })
      })
   })
   .on("change",".image-uploader input",function(e){
      checkUpload(this.files[0])
      .then(d=>{
         console.log(d)
         makeUploaderImage({
            namespace:'location-upload',
            folder:'uploads/',
            name:d.result
         })
      })
   })
   .on("change",".image-uploader input",function(e){
      checkUpload(this.files[0])
      .then(d=>{
         console.log(d)
         makeUploaderImage({
            namespace:'type-upload',
            folder:'uploads/',
            name:d.result
         })
      })
   })


   /* DATA ACTIVATION */

   .on("click","[data-activate]",function(){
      let target = $(this).data('activate');
      $(target).addClass("active");
   })
   .on("click","[data-deactivate]",function(){
      let target = $(this).data('deactivate');
      $(target).removeClass("active");
   })
   .on("click","[data-toggle]",function(){
      let target = $(this).data('toggle');
      $(target).toggleClass("active");
   })

   $("[data-template]").each(function(){
      let target = $(this).data("template");
      let template = $(target).html();
      $(this).html(template);
   })


   /* TABGROUPS */

   $(".tabgroup .tab").on("click", function(e){
      let index = $(this).index();

      $(this).addClass("active")
         .siblings().removeClass("active")

      $(this).closest(".tabgroup")
         .find(".content").eq(index).addClass("active")
         .siblings().removeClass("active")
   })

})
