blockManager.add('form_inline', {
    label: 'Form Inline',
    attributes: {
        class: 'fa fa-square',
        title: 'Form Inline'
    },
    content: '    <div class="block-title">Full Layout / Inline Labels</div>' +
        '<div class="list inline-labels no-hairlines-md">' +
        '  <ul>' +
        '    <li class="item-content item-input">' +
        '      <div class="item-media">' +
        '        <i class="icon demo-list-icon"></i>' +
        '      </div>' +
        '      <div class="item-inner">' +
        '        <div class="item-title item-label">Name</div>' +
        '        <div class="item-input-wrap">' +
        '          <input type="text" placeholder="Your name">' +
        '          <span class="input-clear-button"></span>' +
        '        </div>' +
        '      </div>' +
        '    </li>' +
        '    <li class="item-content item-input">' +
        '      <div class="item-media">' +
        '        <i class="icon demo-list-icon"></i>' +
        '      </div>' +
        '      <div class="item-inner">' +
        '        <div class="item-title item-label">Password</div>' +
        '        <div class="item-input-wrap">' +
        '          <input type="password" placeholder="Your password">' +
        '          <span class="input-clear-button"></span>' +
        '        </div>' +
        '      </div>' +
        '    </li>' +
        '    <li class="item-content item-input">' +
        '      <div class="item-media">' +
        '        <i class="icon demo-list-icon"></i>' +
        '      </div>' +
        '      <div class="item-inner">' +
        '        <div class="item-title item-label">E-mail</div>' +
        '        <div class="item-input-wrap">' +
        '          <input type="email" placeholder="Your e-mail">' +
        '          <span class="input-clear-button"></span>' +
        '        </div>' +
        '      </div>' +
        '    </li>' +
        '    <li class="item-content item-input">' +
        '      <div class="item-media">' +
        '        <i class="icon demo-list-icon"></i>' +
        '      </div>' +
        '      <div class="item-inner">' +
        '        <div class="item-title item-label">URL</div>' +
        '        <div class="item-input-wrap">' +
        '          <input type="url" placeholder="URL">' +
        '          <span class="input-clear-button"></span>' +
        '        </div>' +
        '      </div>' +
        '    </li>' +
        '    <li class="item-content item-input">' +
        '      <div class="item-media">' +
        '        <i class="icon demo-list-icon"></i>' +
        '      </div>' +
        '      <div class="item-inner">' +
        '        <div class="item-title item-label">Phone</div>' +
        '        <div class="item-input-wrap">' +
        '          <input type="tel" placeholder="Your phone number">' +
        '          <span class="input-clear-button"></span>' +
        '        </div>' +
        '      </div>' +
        '    </li>' +
        '    <li class="item-content item-input">' +
        '      <div class="item-media">' +
        '        <i class="icon demo-list-icon"></i>' +
        '      </div>' +
        '      <div class="item-inner">' +
        '        <div class="item-title item-label">Gender</div>' +
        '        <div class="item-input-wrap">' +
        '          <select placeholder="Please choose...">' +
        '            <option value="Male">Male</option>' +
        '            <option value="Female">Female</option>' +
        '          </select>' +
        '        </div>' +
        '      </div>' +
        '    </li>' +
        '    <li class="item-content item-input">' +
        '      <div class="item-media">' +
        '        <i class="icon demo-list-icon"></i>' +
        '      </div>' +
        '      <div class="item-inner">' +
        '        <div class="item-title item-label">Birthday</div>' +
        '        <div class="item-input-wrap">' +
        '          <input type="date" value="2014-04-30" placeholder="Please choose...">' +
        '        </div>' +
        '      </div>' +
        '    </li>' +
        '    <li class="item-content item-input">' +
        '      <div class="item-media">' +
        '        <i class="icon demo-list-icon"></i>' +
        '      </div>' +
        '      <div class="item-inner">' +
        '        <div class="item-title item-label">Date time</div>' +
        '        <div class="item-input-wrap">' +
        '          <input type="datetime-local" placeholder="Please choose...">' +
        '        </div>' +
        '      </div>' +
        '    </li>' +
        '    <li class="item-content item-input">' +
        '      <div class="item-media">' +
        '        <i class="icon demo-list-icon"></i>' +
        '      </div>' +
        '      <div class="item-inner">' +
        '        <div class="item-title item-label">Range</div>' +
        '        <div class="item-input-wrap">' +
        '          <div class="range-slider range-slider-init" data-label="true">' +
        '            <input type="range" value="50" min="0" max="100" step="1">' +
        '          </div>' +
        '        </div>' +
        '      </div>' +
        '    </li>' +
        '    <li class="item-content item-input">' +
        '      <div class="item-media">' +
        '        <i class="icon demo-list-icon"></i>' +
        '      </div>' +
        '      <div class="item-inner">' +
        '        <div class="item-title item-label">Textarea</div>' +
        '        <div class="item-input-wrap">' +
        '          <textarea placeholder="Bio"></textarea>' +
        '        </div>' +
        '      </div>' +
        '    </li>' +
        '    <li class="item-content item-input">' +
        '      <div class="item-media">' +
        '        <i class="icon demo-list-icon"></i>' +
        '      </div>' +
        '      <div class="item-inner">' +
        '        <div class="item-title item-label">Resizable</div>' +
        '        <div class="item-input-wrap">' +
        '          <textarea class="resizable" placeholder="Bio"></textarea>' +
        '        </div>' +
        '      </div>' +
        '    </li>' +
        '  </ul>' +
        '</div>',
    category: 'Form'
});

blockManager.add('form_inline_blank', {
    label: 'Form Inline blank',
    attributes: {
        class: 'fa fa-square',
        title: 'Form Inline'
    },
    content: '    <div class="list inline-labels">' +
        '  <ul>' +
        '    <li class="item-content item-input">' +
        '      <div class="item-media">... icon/image here ...</div>' +
        '      <div class="item-inner">' +
        '        <div class="item-title item-label">Name</div>' +
        '        <div class="item-input-wrap">' +
        '          <input type="text" name="name">' +
        '          <span class="input-clear-button"></span>' +
        '        </div>' +
        '      </div>' +
        '    </li>' +
        '  </ul>' +
        '</div>',
    category: 'Form'
});

blockManager.add('form_stacked', {
    label: 'Form Stacked',
    attributes: {
        class: 'fa fa-square',
        title: 'Form Stacked'
    },
    content: '<div class="list no-hairlines-md">' +
        '  <ul>' +
        '    <li class="item-content item-input">' +
        '      <div class="item-media">' +
        '        <i class="icon demo-list-icon"></i>' +
        '      </div>' +
        '      <div class="item-inner">' +
        '        <div class="item-title item-label">Name</div>' +
        '        <div class="item-input-wrap">' +
        '          <input type="text" placeholder="Your name">' +
        '          <span class="input-clear-button"></span>' +
        '        </div>' +
        '      </div>' +
        '    </li>' +
        '    <li class="item-content item-input">' +
        '      <div class="item-media">' +
        '        <i class="icon demo-list-icon"></i>' +
        '      </div>' +
        '      <div class="item-inner">' +
        '        <div class="item-title item-label">Password</div>' +
        '        <div class="item-input-wrap">' +
        '          <input type="password" placeholder="Your password">' +
        '          <span class="input-clear-button"></span>' +
        '        </div>' +
        '      </div>' +
        '    </li>' +
        '    <li class="item-content item-input">' +
        '      <div class="item-media">' +
        '        <i class="icon demo-list-icon"></i>' +
        '      </div>' +
        '      <div class="item-inner">' +
        '        <div class="item-title item-label">E-mail</div>' +
        '        <div class="item-input-wrap">' +
        '          <input type="email" placeholder="Your e-mail">' +
        '          <span class="input-clear-button"></span>' +
        '        </div>' +
        '      </div>' +
        '    </li>' +
        '    <li class="item-content item-input">' +
        '      <div class="item-media">' +
        '        <i class="icon demo-list-icon"></i>' +
        '      </div>' +
        '      <div class="item-inner">' +
        '        <div class="item-title item-label">URL</div>' +
        '        <div class="item-input-wrap">' +
        '          <input type="url" placeholder="URL">' +
        '          <span class="input-clear-button"></span>' +
        '        </div>' +
        '      </div>' +
        '    </li>' +
        '    <li class="item-content item-input">' +
        '      <div class="item-media">' +
        '        <i class="icon demo-list-icon"></i>' +
        '      </div>' +
        '      <div class="item-inner">' +
        '        <div class="item-title item-label">Phone</div>' +
        '        <div class="item-input-wrap">' +
        '          <input type="tel" placeholder="Your phone number">' +
        '          <span class="input-clear-button"></span>' +
        '        </div>' +
        '      </div>' +
        '    </li>' +
        '    <li class="item-content item-input">' +
        '      <div class="item-media">' +
        '        <i class="icon demo-list-icon"></i>' +
        '      </div>' +
        '      <div class="item-inner">' +
        '        <div class="item-title item-label">Gender</div>' +
        '        <div class="item-input-wrap">' +
        '          <select placeholder="Please choose...">' +
        '            <option value="Male">Male</option>' +
        '            <option value="Female">Female</option>' +
        '          </select>' +
        '        </div>' +
        '      </div>' +
        '    </li>' +
        '    <li class="item-content item-input">' +
        '      <div class="item-media">' +
        '        <i class="icon demo-list-icon"></i>' +
        '      </div>' +
        '      <div class="item-inner">' +
        '        <div class="item-title item-label">Birthday</div>' +
        '        <div class="item-input-wrap">' +
        '          <input type="date" value="2014-04-30" placeholder="Please choose...">' +
        '        </div>' +
        '      </div>' +
        '    </li>' +
        '    <li class="item-content item-input">' +
        '      <div class="item-media">' +
        '        <i class="icon demo-list-icon"></i>' +
        '      </div>' +
        '      <div class="item-inner">' +
        '        <div class="item-title item-label">Date time</div>' +
        '        <div class="item-input-wrap">' +
        '          <input type="datetime-local" placeholder="Please choose...">' +
        '        </div>' +
        '      </div>' +
        '    </li>' +
        '    <li class="item-content item-input">' +
        '      <div class="item-media">' +
        '        <i class="icon demo-list-icon"></i>' +
        '      </div>' +
        '      <div class="item-inner">' +
        '        <div class="item-title item-label">Range</div>' +
        '        <div class="item-input-wrap">' +
        '          <div class="range-slider range-slider-init" data-label="true">' +
        '            <input type="range" value="50" min="0" max="100" step="1">' +
        '          </div>' +
        '        </div>' +
        '      </div>' +
        '    </li>' +
        '    <li class="item-content item-input">' +
        '      <div class="item-media">' +
        '        <i class="icon demo-list-icon"></i>' +
        '      </div>' +
        '      <div class="item-inner">' +
        '        <div class="item-title item-label">Textarea</div>' +
        '        <div class="item-input-wrap">' +
        '          <textarea placeholder="Bio"></textarea>' +
        '        </div>' +
        '      </div>' +
        '    </li>' +
        '    <li class="item-content item-input">' +
        '      <div class="item-media">' +
        '        <i class="icon demo-list-icon"></i>' +
        '      </div>' +
        '      <div class="item-inner">' +
        '        <div class="item-title item-label">Resizable</div>' +
        '        <div class="item-input-wrap">' +
        '          <textarea class="resizable" placeholder="Bio"></textarea>' +
        '        </div>' +
        '      </div>' +
        '    </li>' +
        '  </ul>' +
        '</div>',
    category: 'Form'
});

blockManager.add('form_stacked_blank', {
    label: 'blank stacked label',
    attributes: {
        class: 'fa fa-square',
        title: 'Floating label'
    },
    content:

        '<div class="list">' +
        '<ul>' +
        '  <li class="item-content item-input">' +
        '    <div class="item-media">... icon/image here ...</div>' +
        '    <div class="item-inner">' +
        '      <div class="item-title item-label">Name</div>' +
        '      <div class="item-input-wrap">' +
        '        <input type="text" name="name">' +
        '        <span class="input-clear-button"></span>' +
        '      </div>' +
        '    </div>' +
        '  </li>' +
        '</ul>' +
        '</div>',
    category: 'Form'
});

blockManager.add('form_only_input', {
    label: 'Form Only Input',
    attributes: {
        class: 'fa fa-square',
        title: 'Form Only Input'
    },
    content: '<div class="block-title">Only Inputs Inset</div>' +
        '<div class="list inset">' +
        '  <ul>' +
        '    <li class="item-content item-input">' +
        '      <div class="item-inner">' +
        '        <div class="item-input-wrap">' +
        '          <input type="text" placeholder="Your name">' +
        '          <span class="input-clear-button"></span>' +
        '        </div>' +
        '      </div>' +
        '    </li>' +
        '    <li class="item-content item-input">' +
        '      <div class="item-inner">' +
        '        <div class="item-input-wrap">' +
        '          <input type="password" placeholder="Your password">' +
        '          <span class="input-clear-button"></span>' +
        '        </div>' +
        '      </div>' +
        '    </li>' +
        '    <li class="item-content item-input">' +
        '      <div class="item-inner">' +
        '        <div class="item-input-wrap">' +
        '          <input type="email" placeholder="Your e-mail">' +
        '          <span class="input-clear-button"></span>' +
        '        </div>' +
        '      </div>' +
        '    </li>' +
        '    <li class="item-content item-input">' +
        '      <div class="item-inner">' +
        '        <div class="item-input-wrap">' +
        '          <input type="url" placeholder="URL">' +
        '          <span class="input-clear-button"></span>' +
        '        </div>' +
        '      </div>' +
        '    </li>' +
        '  </ul>' +
        '</div>',
    category: 'Form'
});