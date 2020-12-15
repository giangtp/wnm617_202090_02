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
		<div class="display-flex">
			<div class="image-circle listing-image">
				<img src="${o.img}">
			</div>
			<div class="display-flex flex-column">
				<h3>${o.name}</h3>
				<div class="rating small">
					<img src="images/stars-${o.type_rating}.png">
				</div>
			</div>
		</div>	
	</div>
</li>
`);

const makeUserProfile = templater(o=>`
<div class="profile-top">
 	<div class="display-flex flex-align-center flex-column">
		<div class="image-circle profile-image">
			<img src="${o.img}">
		</div>
	</div>
</div>
<div class="profile-bottom page-side-padding">
	<div class="text-centered">
		<h2>${o.name}</h2>
	    <p">${o.occupation}</p>
    </div>
    <hr class="spacer xs">
	<ul class="info">
		<li class="display-flex flex-align-center">
			<div class='icon' style="margin-top: 0.3em;">
				<img src="images/user_icon.png">
			</div>
			<hr class="vertical-spacer xs">
			  ${o.username}
		</li>
		<li class="display-flex flex-align-center">
			<div class='icon' style="margin-top: 0.3em;">
				<img src="images/mail_icon.png">
			</div>
			<hr class="vertical-spacer xs">
			 ${o.email}
		</li>
		<li class="display-flex flex-align-center">
			<div class='icon' style="margin-top: 0.3em;">
				<img src="images/phone_icon.png">
			</div>
			<hr class="vertical-spacer xs">
			 ${o.phone}
		</li>
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
		<div class="image-circle profile-image">
			<img src="${o.img}">
		</div>
		<h2>${o.name}</h2>
		<div class="rating">
			<img src="images/stars-${o.type_rating}.png">
		</div>
	</div>
	<hr class="spacer">
	<ul class="info">
		<li class="display-flex">
			<strong class="flex-stretch">Category</strong> <span>${o.category}</span>
		</li>
		<li class="display-flex">
			<strong class="flex-stretch">Classification</strong> <span>${o.classification}</span>
		</li>
		<li class="display-flex">
			<strong class="flex-stretch">Spotted</strong> <span class="locations-spot"></span>
		</li>
		<li class="display-flex">
			<strong class="flex-stretch">Last Seen</strong> <span class="last-spot"></span>
		</li>
	</ul>
	<hr class="spacer small">
	<div class="info card">${o.description}</div>
</div>
`);

const makeLocationProfile = templater(o=>`
<div class="location-image profile-top">
	<img src="${o.img}">
</div>

<div class="display-flex flex-align-center flex-column page-side-padding page-top-padding profile-bottom">
	<div class="rating">
		<img src="images/stars-${o.usage_rating}.png">
	</div>
	<hr class="spacer small">
	<ul class="info">
		<li><strong>Date Spotted</strong>: ${o.date_create}</li>
		<li><strong>Application</strong>: ${o.application}</li>
		<li><strong>Font Style</strong>: ${o.font_style}</li>
	</ul>
	<hr class="spacer small">
	<div class="info card">${o.note}</div>
</div>
`);


const makeTypeEdit = templater(o=>`
<div class="display-flex flex-align-center flex-column">
	<a href="#type-upload-page">
		<div class="image-circle edit-image">
			<div class="overlay"></div>
			<img src="${o.img}">
			<div class="edit-image-icon">
		        <img src="images/edit_icon.png">
    		</div>
		</div>
	</a>
</div>

<hr class="spacer small">

<form id="type-edit-form" class="flex-stretch content active" data-ajax="false">
    <div class="form-control">
       <label for="edit-type-name" class="form-label">Type Name</label>
       <input id="edit-type-name" type="text" class="form-input" data-role="none" placeholder="Enter typeface" value="${o.name}">
    </div>
    <div class="form-control">
    	<label for="edit-type-rating" class="form-label">Rating</label>
        <div class="form-select">
            <select id="edit-type-rating" data-role="none">
            	<option hidden selected class="type-rating">${o.type_rating}</option>
                <option value="1">1 - Terrible: &#9733;</option>
                <option value="2">2 - Bad: &#9733;&#9733;</option>
                <option value="3">3 - Decent: &#9733;&#9733;&#9733;</option>
                <option value="4">4 - Good: &#9733;&#9733;&#9733;&#9733;</option>
                <option value="5">5 - Amazing: &#9733;&#9733;&#9733;&#9733;&#9733;</option>
            </select>
        </div>
    </div>
    <div class="form-control">
       <label for="edit-category" class="form-label">Category</label>
       <input id="edit-category" type="text" class="form-input" data-role="none" placeholder="e.g., Sans-serif" value="${o.category}">
    </div>
    <div class="form-control">
       <label for="edit-classification" class="form-label">Classification</label>
       <input id="edit-classification" type="text" class="form-input" data-role="none" placeholder="e.g., Humanist Sans" value="${o.classification}">
    </div>
    <div class="form-control">
       <label for="edit-description" class="form-label">Description</label>
       <textarea id="edit-description" data-role="none" class="form-input" maxlength="100" placeholder="Say something about the type">${o.description}</textarea>
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
	<a href="#user-upload-page">
		<div class="image-circle edit-image">
			<div class="overlay"></div>
			<img src="${o.img}">
			<div class="edit-image-icon">
    			<img src="images/edit_icon.png">
    		</div>
		</div>
	</a>
</div>

<hr class="spacer small">

<form id="user-edit-form" class="flex-stretch content active" data-ajax="false">
    <div class="form-control">
       <label for="edit-username" class="form-label">User Name</label>
       <input id="edit-username" type="text" class="form-input" data-role="none" placeholder="Enter new username" value="${o.username}">
    </div>
    <div class="form-control">
       <label for="edit-fullname" class="form-label">Full Name</label>
       <input id="edit-fullname" type="text" class="form-input" data-role="none" placeholder="Enter new name" value="${o.name}">
    </div>
    <div class="form-control">
       <label for="edit-occupation" class="form-label">Occupation</label>
       <input id="edit-occupation" type="text" class="form-input" data-role="none" placeholder="Enter new occupation" value="${o.occupation}">
    </div>
    <div class="form-control">
       <label for="edit-email" class="form-label">Email</label>
       <input id="edit-email" type="email" class="form-input" data-role="none" placeholder="Enter new email" value="${o.email}">
    </div>
    <div class="form-control">
       <label for="edit-phone" class="form-label">Phone</label>
       <input id="edit-phone" type="tel" class="form-input" data-role="none" placeholder="Enter new phone number" value="${o.phone}">
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
	<a href="#location-upload-page">
		<div class="image-circle edit-image">
			<div class="overlay"></div>
			<img src="${o.img}">
			<div class="edit-image-icon">
    			<img src="images/edit_icon.png">
    		</div>
		</div>
	</a>
</div>

<hr class="spacer small">

<form id="location-edit-form" class="flex-stretch content active" data-ajax="false">
	<div class="form-control">
    	<label for="edit-usage-rating" class="form-label">Rating</label>
        <div class="form-select">
            <select id="edit-usage-rating" data-role="none">
            	<option hidden selected>${o.usage_rating}</option>
                <option value="1">1 - Terrible: &#9733;</option>
                <option value="2">2 - Bad: &#9733;&#9733;</option>
                <option value="3">3 - Decent: &#9733;&#9733;&#9733;</option>
                <option value="4">4 - Good: &#9733;&#9733;&#9733;&#9733;</option>
                <option value="5">5 - Amazing: &#9733;&#9733;&#9733;&#9733;&#9733;</option>
            </select>
        </div>
    </div>
    <div class="form-control">
       <label for="edit-application" class="form-label">Application</label>
       <input id="edit-application" type="text" class="form-input" data-role="none" placeholder="e.g., poster" value="${o.application}">
    </div>
    <div class="form-control">
       <label for="edit-font-style" class="form-label">Font Style</label>
       <input id="edit-font-style" type="text" class="form-input" data-role="none" placeholder="e.g., Italic" value="${o.font_style}">
    </div>
    <div class="form-control">
       <label for="edit-note" class="form-label">Note</label>
       <textarea id="edit-note" data-role="none" class="form-input" maxlength="250" placeholder="Say something about the design">${o.note}</textarea>
    </div>
    <div class="form-control">
       <input type="submit" class="form-button" value="Confirm" data-role="none">
       <hr class="spacer xs">
       <a href="#" data-rel="back" class="text-centered">Cancel</a>
    </div>
</form>
`);

const makeLastSpot = templater(o=>`${o.last_spot}`);

/* const makeTypePopup = o=>`
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
 
`;*/

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
	<div class="icon XL">
		<img src="images/Cancel-Icon.png">
	</div>
	<h3 style="margin-top: 0.5em;">Are you sure?</h3>
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
	<div class="icon XL">
		<img src="images/Cancel-Icon.png">
	</div>
	<h3 style="margin-top: 0.5em;">Are you sure?</h3>
	<span>Do you really want to delete this? This action cannot be done.</span>
</div>
<hr class="spacer small">
<div>
	<a href="#"data-deactivate="#location-delete-modal" class="form-button js-location-delete" data-id="${o.id}">Confirm</a>
   <hr class="spacer xs">
   <a href="#" data-deactivate="#location-delete-modal" class="text-centered">Cancel</a>
</div>
`;


const filterList = (types,category) => {
   let a = [...(new Set(types.map(o=>o[category])))];
   return templater(o=>`<div class="filter" data-field="${category}" data-value="${o}">${o[0].toUpperCase()+o.substr(1)}</div>`)(a);
}

const makeFilterList = (types) => {
   return `
   <div class="filter active" data-field="category" data-value="all">All</div>
   ${filterList(types,'category')}
   `;
}


const makeUploaderImage = ({namespace,folder,name}) => {
   $(`#${namespace}-image`).val(folder+name);
   $(`#${namespace}-page .image-uploader`)
      .css({'background-image':`url('${folder+name}')`})
}


/* CAROUSEL */

var slideIndex = 1;

const showSlides = (n) => {
 var i;
 var slides = document.getElementsByClassName("slide");
 var dots = document.getElementsByClassName("dot");
 if (n > slides.length) {slideIndex = 1}
 if (n < 1) {slideIndex = slides.length}
 for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
 }
 slides[slideIndex-1].style.display = "block";
}

const plusSlides = (n) => {
 showSlides(slideIndex += n);
}

const currentSlide = (n) => {
 showSlides(slideIndex = n);
}
//Codes borrowed from: https://www.w3schools.com/howto/howto_js_slideshow.asp