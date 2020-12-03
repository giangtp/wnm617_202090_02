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
<div class="user-profile-top">
 	<div class="display-flex flex-align-center flex-column">
		<div class="image-circle profile-image">
			<img src="${o.img}">
		</div>
	</div>
</div>
<div class="user-profile-bottom page-side-padding">
	<div class="text-centered">
		<h2>${o.name}</h2>
	    <p">${o.occupation}</p>
    </div>
	<ul class="info">
		<li><strong>Username</strong>: ${o.username}</li>
		<li><strong>Email</strong>: ${o.email}</li>
		<li><strong>Phone</strong>: ${o.phone}</li>
	</ul>
	<hr class="spacer small">
	<div class="display-flex">
		<div class="info card half">
			<strong>Types</strong>
			<hr class="spacer small">
			<p class="types-spot"></p>
		</div>
		<hr class="vertical-spacer small">
		<div class="info card half">
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
	<table>
		<tr>
			<td><strong>Rating</strong></td>
			<td class="text-right">${o.type_rating}</td>
		</tr>
		<tr>
			<td><strong>Category</strong></td>
			<td class="text-right">${o.category}</td>
		</tr>
		<tr>
			<td><strong>Classification</strong></td>
			<td class="text-right">${o.classification}</td>
		</tr>
		<tr>
			<td><strong>Spotted</strong></td>
			<td class="text-right"><span class="locations-spot"></span></td>
		</tr>
		<tr>
			<td><strong>Last Seen</strong></td>
			<td class="text-right"><span class="last-spot"></span></td>
		</tr>
	</table>
	<hr class="spacer small">
	<div class="info card">${o.description}</div>
</div>
`);

const makeLocationProfile = templater(o=>`
<div class="location-image profile-top">
	<img src="${o.img}">
</div>

<div class="page-side-padding page-top-padding profile-bottom">
	<ul class="info">
		<li><strong>Usage Rating</strong>: ${o.usage_rating}</li>
		<li><strong>Date Spotted</strong>: ${o.date_create}</li>
		<li><strong>Application</strong>: ${o.application}</li>
		<li><strong>Font Style</strong>: ${o.font_style}</li>
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

<form id="type-edit-form" class="flex-stretch content active" data-ajax="false">
    <div class="form-control">
       <label for="edit-type-name" class="form-label">Type Name</label>
       <input id="edit-type-name" type="text" class="form-input" data-role="none" value="${o.name}">
    </div>
    <div class="form-control">
       <label for="edit-type-rating" class="form-label">Rating</label>
       <input id="edit-type-rating" type="text" class="form-input" data-role="none" value="${o.type_rating}">
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
       <label for="edit-description" class="form-label">Description</label>
       <textarea id="edit-description" data-role="none" class="form-input" maxlength="100">${o.description}</textarea>
    </div>
    <div class="form-control">
   		<input type="submit" class="form-button" value="Confirm" data-role="none">
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

<form id="user-edit-form" class="flex-stretch content active" data-ajax="false">
    <div class="form-control">
       <label for="edit-username" class="form-label">User Name</label>
       <input id="edit-username" type="text" class="form-input" data-role="none" value="${o.username}">
    </div>
    <div class="form-control">
       <label for="edit-fullname" class="form-label">Full Name</label>
       <input id="edit-fullname" type="text" class="form-input" data-role="none" value="${o.name}">
    </div>
    <div class="form-control">
       <label for="edit-occupation" class="form-label">Occupation</label>
       <input id="edit-occupation" type="text" class="form-input" data-role="none" value="${o.occupation}">
    </div>
    <div class="form-control">
       <label for="edit-email" class="form-label">Email</label>
       <input id="edit-email" type="email" class="form-input" data-role="none" value="${o.email}">
    </div>
    <div class="form-control">
       <label for="edit-phone" class="form-label">Phone</label>
       <input id="edit-phone" type="tel" class="form-input" data-role="none" value="${o.phone}">
    </div>
    <div class="form-control">
       <input type="submit" class="form-button" value="Confirm" data-role="none">
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

<form id="location-edit-form" class="flex-stretch content active" data-ajax="false">
	<div class="form-control">
       <label for="edit-usage-rating" class="form-label">Usage Rating</label>
       <input id="edit-usage-rating" type="text" class="form-input" data-role="none" value="${o.usage_rating}">
    </div>
    <div class="form-control">
       <label for="edit-application" class="form-label">Application</label>
       <input id="edit-application" type="text" class="form-input" data-role="none" value="${o.application}">
    </div>
    <div class="form-control">
       <label for="edit-font-style" class="form-label">Font Style</label>
       <input id="edit-font-style" type="text" class="form-input" data-role="none" value="${o.font_style}">
    </div>
    <div class="form-control">
       <label for="edit-note" class="form-label">Note</label>
       <textarea id="edit-note" data-role="none" class="form-input" maxlength="250">${o.note}</textarea>
    </div>
    <div class="form-control">
       <input type="submit" class="form-button" value="Confirm" data-role="none">
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
		   <h4>${o.name}</h4>
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

const makeTypeDelete = o=>`
<div class="display-flex flex-column flex-align-center">
	<div class="icon">
		<img src="images/Cancel Icon.png">
	</div>
	<h3>Are you sure?</h3>
	<span>Do you really want to delete this? This action cannot be done.</span>
</div>
<hr class="spacer small">
<div>
	<a href="#"data-deactivate="#type-delete-modal" class="form-button js-type-delete" data-id="${o.id}">Confirm</a>
   <hr class="spacer xs">
   <a href="#" data-deactivate="#type-delete-modal" class="text-centered">Cancel</a>
</div>
`;

const makeLocationDelete = o=>`
<div class="display-flex flex-column flex-align-center">
	<div class="icon">
		<img src="images/Cancel Icon.png">
	</div>
	<h3>Are you sure?</h3>
	<span>Do you really want to delete this? This action cannot be done.</span>
</div>
<hr class="spacer small">
<div>
	<a href="#"data-deactivate="#location-delete-modal" class="form-button js-location-delete" data-id="${o.id}">Confirm</a>
   <hr class="spacer xs">
   <a href="#" data-deactivate="#location-delete-modal" class="text-centered">Cancel</a>
</div>
`;