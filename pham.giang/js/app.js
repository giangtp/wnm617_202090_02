// Document Ready

$(()=>{

   checkUserId();

   $(document)

   .on("pagecontainerbeforeshow",function(e,ui){
      console.log(ui.toPage[0].id)

      // Routing
      switch(ui.toPage[0].id) {
         case 'recent-page': RecentPage();
            $('#recent-type-modal').removeClass('.active');  
            break;
         case 'list-page': ListPage(); break;
         case 'user-profile-page': UserProfilePage(); break;
         case 'type-profile-page': TypeProfilePage(); break;
         case 'location-page': LocationPage(); break;
         case 'location-edit-page': LocationEditPage(); break;
         case 'user-edit-page': UserEditPage(); break;
         case 'type-edit-page': TypeEditPage(); break;
         case 'type-map-page': TypeMapPage(); 
            $('#location-modal').removeClass('.active');
            break;
      }
   })

   /* FORM SUBMISSIONS */

   // event delegation
   .on("submit","#signin-form",function(e){
      e.preventDefault();
      checkSigninForm();
   })

   .on("submit","#signup-form",function(e){
      e.preventDefault();
      checkSignupForm();
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
