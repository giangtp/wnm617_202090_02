/* const makeTypeList = (a) => {
	return a.reduce((r,o,i,a)=>{
		return r+`
		<div>${o.name}</div>
		`
	},'');
} */

const makeRecentList = templater(o=>`
<li>
	<div class="image-circle image-border recent-list-image js-type-jump" data-id="${o.type_id}">
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
    	<p class="small-text">Location, CA</p>
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
			<p class="types-spot"></p>
		</div>
		<hr class="vertical-spacer small">
		<div class="info card">
			<strong>Locations</strong>
			<hr class="spacer small">
			<p class="locations-spot"></p>
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
			<li><strong>Number Spotted</strong>: <span class="locations-spot"></span></li>
			<li><strong>Last Spotted</strong>: <span class="last-spot"></span></li>
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

const makeUserEdit = templater(o=>`
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

<form id="edit-user-form" class="flex-stretch content active" data-ajax="false">
    <div class="form-control">
       <label for="edit-username" class="form-label">User Name</label>
       <input id="edit-username" type="text" class="form-input" data-role="none" value="${o.username}">
    </div>
    <div class="form-control">
       <label for="edit-fullname" class="form-label">Full Name</label>
       <input id="edit-fullname" type="text" class="form-input" data-role="none" value="${o.name}">
    </div>
    <div class="form-control">
       <label for="edit-email" class="form-label">Email</label>
       <input id="edit-email" type="text" class="form-input" data-role="none" value="${o.email}">
    </div>
    <div class="form-control">
       <label for="edit-phone" class="form-label">Phone</label>
       <input id="edit-phone" type="text" class="form-input" data-role="none" value="${o.phone}">
    </div>
    <div class="form-control">
       <a href="#" data-rel="back" class="form-button">Confirm</a>
       <hr class="spacer xs">
       <a href="#" data-rel="back" class="text-centered">Cancel</a>
    </div>
</form>
`);

const makeLocationEdit = templater(o=>`
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

<form id="edit-location-form" class="flex-stretch content active" data-ajax="false">
    <div class="form-control">
       <label for="edit-date" class="form-label">Date Spotted</label>
       <input id="edit-date" type="text" class="form-input" data-role="none" value="${o.date_create}">
    </div>
    <div class="form-control">
       <label for="edit-application" class="form-label">Application</label>
       <input id="edit-application" type="text" class="form-input" data-role="none" value="${o.application}">
    </div>
    <div class="form-control">
       <label for="edit-note" class="form-label">Note</label>
       <textarea id="edit-note" data-role="none" class="form-input" maxlength="250">${o.note}</textarea>
    </div>
    <div class="form-control">
       <a href="#" data-rel="back" class="form-button">Confirm</a>
       <hr class="spacer xs">
       <a href="#" data-rel="back" class="text-centered">Cancel</a>
    </div>
</form>
`);

const makeLastSpot = templater(o=>`${o.last_spot}`);

const makeTypePopup = o=>`
<div class="display-flex">
	<div class="image-circle">
	   <img src="${o.img}" style="width:100px;height:100px">
	</div>
	<hr class="vertical-spacer small">
	<div class="flex-stretch">
		<div>
		   <h3>${o.name}</h3>
		   <h6>Category</h6>
		   <div>${o.category}</div>
		   <h6>Classification</h6>
		   <div>${o.classification}</div>
		</div>
	</div>
</div>
<hr class="spacer xs">
<a href="#" class="form-button js-type-jump" data-id="${o.type_id}" data-deactivate="#recent-type-modal">Visit</a> 
`;

const makeLocationPopup = o=>`
<div class="display-flex">
	<div class="image-circle">
	   <img src="${o.img}" style="width:100px;height:100px">
	</div>
	<hr class="vertical-spacer small">
	<div class="flex-stretch">
		<div>
		   <h6>Date Spotted</h6> 
		   <div>${o.date_create}</div>
		   <h6>Application</h6> 
		   <div>${o.application}</div>
		</div>
	</div>
</div>
<hr class="spacer xs">
<a href="#" class="form-button js-location-jump" data-id="${o.id}" data-deactivate="#location-modal">Visit</a> 
`;