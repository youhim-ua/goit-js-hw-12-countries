
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import { defaultModules, Stack, defaults } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';

defaults.styling = 'material';
defaults.icons = 'material';

defaultModules.set(PNotifyMobile, {});

const myStack = new Stack({
  dir1: 'down',
  dir2: 'left',
  firstpos1: 25,
  firstpos2: 30,
  context: document.body,
});

const errorOption = {
    text: 'Too many matches found. Please enter a more specific query!',
    module: defaultModules,
    stack: myStack,
    delay: 2000,
    styling: 'material'
};

const errorOptionNotFound = {
    text: 'No matches found!',
    module: defaultModules,
    stack: myStack,
    delay: 2000,
    styling: 'material'
};

export {errorOption,  errorOptionNotFound};