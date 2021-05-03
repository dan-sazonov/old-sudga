import * as $ from 'jquery';
import {debug} from './config';

function vkInit() {
  if (debug.showVkWidget && (typeof VK !== 'undefined')) {
    VK.Widgets.Comments('vk_comments', {limit: 5, attach: '*'});
  } else if (debug.showVkWidget) {
    $('#vk_comments').addClass('hidden');
    $('#vk_comments_land').removeClass('hidden');
  } else {
    $('#vk_comments').toggleClass('vk-comments-debug');
  }
}

export {vkInit};
