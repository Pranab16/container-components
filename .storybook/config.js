import { configure } from '@kadira/storybook';

const requires = require.context('../src', true, /storybook\.js$/);
const loadStories = () => requires.keys().forEach(requires);

configure(loadStories, module);
