import * as $ from 'jquery';
import debug from './config';

const allowedHosts = ['old-sud.ga', 'old-sudga.github.io', 'xn----7sbbgido7cwbu3ka.xn--p1acf'];
let currentHost = '';

if (window.location.hostname.split('.')[0] !== 'www') {
  currentHost = window.location.hostname;
} else {
  currentHost = window.location.hostname.split('.').slice(1).join('.');
}

export function vkInit() {
  if (debug.showVkWidget && (typeof VK !== 'undefined') && allowedHosts.includes(currentHost)) {
    /* global VK */
    VK.Widgets.Comments('vk_comments', {limit: 5, attach: '*'}, 'm0');
  } else if (debug.showVkWidget) {
    $('#vk_comments').addClass('hidden');
    $('#vk_comments_land').removeClass('hidden');
  } else {
    $('#vk_comments').toggleClass('vk-comments-debug');
  }
}
