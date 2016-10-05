import html from './index.pug';
assert.ok(/My Site/.test(html), 'Failed to include head.js');
assert.ok(/\(c\)/.test(html), 'Failed to include foot.js');
