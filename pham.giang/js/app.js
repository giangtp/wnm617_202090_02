// Document Ready

$(()=>{

   checkUserId();

   $(document)

   .on("pagecontainerbeforeshow",function(e,ui){
      console.log(ui.toPage[0].id)

      // Routing
      switch(ui.toPage[0].id) {
         case 'recent-page': RecentPage(); break;
         case 'list-page': ListPage(); break;
         case 'user-profile-page': UserProfilePage(); break;
         case 'type-profile-page': TypeProfilePage(); break;
         case 'location-page': LocationPage(); break;
         case 'location-edit-page': LocationEditPage(); break;
         case 'user-edit-page': UserEditPage(); break;
         case 'type-edit-page': TypeEditPage(); break;
      }
   })

   /* FORM SUBMISSIONS */

   // event delegation
   .on("submit","#signin-form",function(e){
      e.preventDefault();
      checkSigninForm();
   })



   /* ANCHOR CLICKS */

   .on("click",".js-logout",function(e){
      sessionStorage.removeItem('userId');
      checkUserId();
   })

   .on("click",".js-type-jump",function(e){
      sessionStorage.typeId = $(this).data("id");
      $.mobile.navigate("#type-profile-page");
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
