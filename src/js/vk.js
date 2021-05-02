import * as $ from 'jquery';
import {debug} from './main';

function vkInit() {
  if (debug.showVkWidget && (typeof VK !== 'undefined')) {
    VK.Widgets.Comments('vk_comments', {limit: 5, attach: '*'});
  } else {
    $('#vk_comments').toggleClass('vk-comments-debug');
  }
}

export {vkInit};
