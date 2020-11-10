/* const makeTypeList = (a) => {
	return a.reduce((r,o,i,a)=>{
		return r+`
		<div>${o.name}</div>
		`
	},'');
} */

const makeTypeList = templater(o=>`
<li>
	<div class="display-flex flex-align-center js-type-jump" data-id="${o.id}">
		<div class="image-circle listing-image">
			<img src="${o.img}">
		</div>
		<h3>${o.name}</h3>
	</div>
</li>
`);

const makeUserProfile = templater(o=>`
<div class="user-profile-header">
 		<div class="display-flex flex-align-center flex-column">
    	<a href="#user-edit-page">
    		<div class="image-circle profile-image">
    			<img src="${o.img}">
    		</div>
    	</a>
    	<h2>${o.name}</h2>
	</div>
</div>
<div class="overscroll page-side-padding">
	<ul class="info">
		<li><strong>Username</strong>: ${o.username}</li>
		<li><strong>Email</strong>: ${o.email}</li>
		<li><strong>Phone</strong>: ${o.phone}</li>
	</ul>
	<hr class="spacer small">
	<div class="display-flex">
		<div class="info card">
			<strong>Types</strong>
			<hr class="spacer small">
			<p>${o.types_spot}</p>
		</div>
		<hr class="vertical-spacer small">
		<div class="info card">
			<strong>Locations</strong>
			<hr class="spacer small">
			<p>${o.locations_spot}</p>
		</div>
	</div>
</div>
`);

const makeTypeProfile = templater(o=>`
<div class="overscroll page-side-padding page-top-padding">
	<div class="display-flex flex-align-center flex-column">
		<a href="#type-edit-page">
			<div class="image-circle profile-image">
				<img src="${o.img}">
			</div>
		</a>
		<h2>${o.name}</h2>
	</div>

	<hr class="spacer small">

	<div class="info">
		<ul class="text-centered">
			<li><strong>Category</strong>: ${o.category}</li>
			<li><strong>Classification</strong>: ${o.classification}</li>
			<li><strong>Number Spotted</strong>: ${o.number_spot}</li>
			<li><strong>Last Spotted</strong>: ${o.last_spot}</li>
		</ul>
	</div>
</div>

<div class="map" data-activate=".add">
	<div class="location-icon">
  		<a href="#location-page"><img src="images/Location Icon.png" alt="Location Icon"></a>
  	</div>
  	<div class="location-icon add">
  		<a href="#location-add-page"><img src="images/Location Add.png" alt="Location Add Icon"></a>
  	</div>
</div>
`);

const makeRecentList = templater(o=>`
<li>
	<a href="#">
		<div class="image-circle image-border recent-list-image">
			<img src="${o.img}">
		</div> 
	</a>
</li>
`);


