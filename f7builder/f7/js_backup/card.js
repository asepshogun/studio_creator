blockManager.add('card_basic', {
    label: 'Card Basic',
    attributes: {
        class: 'fa fa-square',
        title: 'Card Basic'
    },
    content: '<div class="card">' +
        '    <div class="card-content card-content-padding">' +
        '       Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions.' +
        '    </div>' +
        '</div>',
    category: 'Card'
});

blockManager.add('card_default', {
    label: 'Card Default',
    attributes: {
        class: 'fa fa-square',
        title: 'Card Default'
    },
    content: '<div class="card">' +
        '    <div class="card-header">Header</div>' +
        '    <div class="card-content card-content-padding">' +
        '       Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions.' +
        '    </div>' +
        '    <div class="card-footer">Footer</div>' +
        '</div>',
    category: 'Card'
});

blockManager.add('card_picture', {
    label: 'Card Picture',
    attributes: {
        class: 'fa fa-square',
        title: 'Card Picture'
    },
    content: '<div class="card demo-card-header-pic">' +
        '  <div style="background-image:url(http://lorempixel.com/1000/600/nature/3/)" class="card-header align-items-flex-end">Journey To Mountains</div>' +
        '  <div class="card-content card-content-padding">' +
        '    <p class="date">Posted on January 21, 2015</p>' +
        '    <p>Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit...</p>' +
        '  </div>' +
        '  <div class="card-footer"><a href="#" class="link">Like</a><a href="#" class="link">Read more</a></div>' +
        '</div>',
    category: 'Card'
});

blockManager.add('card_facebook', {
    label: 'Card Facebook',
    attributes: {
        class: 'fa fa-square',
        title: 'Card Facebook'
    },
    content: '<div class="card demo-facebook-card">' +
        '  <div class="card-header">' +
        '    <div class="demo-facebook-avatar"><img src="http://lorempixel.com/68/68/people/1/" width="34" height="34"/></div>' +
        '    <div class="demo-facebook-name">John Doe</div>' +
        '    <div class="demo-facebook-date">Monday at 3:47 PM</div>' +
        '  </div>' +
        '  <div class="card-content"> <img src="http://lorempixel.com/1000/700/nature/8/" width="100%"/></div>' +
        '  <div class="card-footer"><a href="#" class="link">Like</a><a href="#" class="link">Comment</a><a href="#" class="link">Share</a></div>' +
        '</div>',
    category: 'Card'
});

blockManager.add('card_facbook_padding', {
    label: 'Card Facebook Padding',
    attributes: {
        class: 'fa fa-square',
        title: 'Card Facebook Padding'
    },
    content: '<div class="card demo-facebook-card">' +
        '  <div class="card-header">' +
        '    <div class="demo-facebook-avatar"><img src="http://lorempixel.com/68/68/people/1/" width="34" height="34"/></div>' +
        '    <div class="demo-facebook-name">John Doe</div>' +
        '    <div class="demo-facebook-date">Monday at 2:15 PM</div>' +
        '  </div>' +
        '  <div class="card-content card-content-padding">' +
        '    <p>What a nice photo i took yesterday!</p><img src="http://lorempixel.com/1000/700/nature/8/" width="100%"/>' +
        '    <p class="likes">Likes: 112    Comments: 43</p>' +
        '  </div>' +
        '  <div class="card-footer"><a href="#" class="link">Like</a><a href="#" class="link">Comment</a><a href="#" class="link">Share</a></div>' +
        '</div>',
    category: 'Card'
});