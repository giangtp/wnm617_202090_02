/* const makeTypeList = (a) => {
	return a.reduce((r,o,i,a)=>{
		return r+`
		<div>${o.name}</div>
		`
	},'');
} */

const makeRecentList = templater(o=>`
<li>
	<div class="image-circle image-border recent-list-image js-type-jump">
		<img src="${o.img}">
	</div> 
</li>
`);

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
<div class="page-side-padding">
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
<div class="page-side-padding page-top-padding">
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
`);

const makeLocationProfile = templater(o=>`
<div class="location-image">
	<img src="${o.img}">
</div>

<div class="page-side-padding page-top-padding">
	<ul class="info">
		<li><strong>Date Spotted</strong>: ${o.date_create}</li>
		<li><strong>Application</strong>: ${o.application}</li>
		<li><strong>Note</strong>: ${o.note}</li>
	</ul>
</div>
`);


const makeTypeEdit = templater(o=>`
<div class="display-flex flex-align-center flex-column">
	<a href="#">
		<div class="image-circle edit-image">
			<div class="overlay"></div>
			<img src="${o.img}">
			<div class="edit-image-icon">
    			<i class='fas icon XS'>&#xf304;</i>
    		</div>
		</div>
	</a>
</div>

<hr class="spacer small">

<form id="edit-type-form" class="flex-stretch content active" data-ajax="false">
    <div class="form-control">
       <label for="edit-type-name" class="form-label">Type Name</label>
       <input id="edit-type-name" type="text" class="form-input" data-role="none" value="${o.name}">
    </div>
    <div class="form-control">
       <label for="edit-category" class="form-label">Category</label>
       <input id="edit-category" type="text" class="form-input" data-role="none" value="${o.category}">
    </div>
    <div class="form-control">
       <label for="edit-classification" class="form-label">Classification</label>
       <input id="edit-classification" type="text" class="form-input" data-role="none" value="${o.classification}">
    </div>
    <div class="form-control">
       <a href="#" data-rel="back" class="form-button">Confirm</a>
       <hr class="spacer xs">
       <a href="#" data-rel="back" class="text-centered">Cancel</a>
    </div>
</form>
`);
