/* const makeTypeList = (a) => {
	return a.reduce((r,o,i,a)=>{
		return r+`
		<div>${o.name}</div>
		`
	},'');
} */

const makeTypeList = templater((o)=>`
<a href="#type-profile-page" class="typelist-item">
   <div class="typelist-image">
      <img src="${o.img}" alt="">
   </div>
   <div class="typellist-description">
      <div class="typellist-name">${o.name}</div>
      <div class="typelist-type"><strong>type</strong> ${o.category}</div>
      <div class="typelist-breed"><strong>breed</strong> ${o.classification}</div>
   </div>
</a>
`);

const makeUserProfile = templater(o=>`
<div class="profile-image">
   <img src="${o.img}" alt="">
</div>
<div class="profile-body">
   <div class="profile-name">${o.name}</div>
   <div class="profile-email"><strong>Email</strong>: ${o.email}</div>
</div>
<p><a href="#settings-page">Settings</a></p>
`);