/* const makeTypeList = (a) => {
	return a.reduce((r,o,i,a)=>{
		return r+`
		<div>${o.name}</div>
		`
	},'');
} */

const makeTypeList = templater((o)=>`
<li>
	<a href="#type-profile-page" class="display-flex flex-align-center">
		<div class="image-circle listing-image">
			<img src="${o.img}">
		</div>
		<h3>${o.name}</h3>
	</a>
</li>
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