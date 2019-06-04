import { configure, addParameters } from '@storybook/react';

addParameters({
  backgrounds: [
    { name: 'light', value: '#fff', default: true },
    { name: 'dark', value: '#373737' },
  ],
});

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
