import 'airbnb-browser-shims';
import {vkInit} from './vk';
import {debug} from './config';

import * as $ from 'jquery';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/alert';
// import 'bootstrap/js/dist/button';
// import 'bootstrap/js/dist/carousel';
// import 'bootstrap/js/dist/collapse';
// import 'bootstrap/js/dist/dropdown';
// import 'bootstrap/js/dist/modal';
// import 'bootstrap/js/dist/popover';
// import 'bootstrap/js/dist/scrollspy';
// import 'bootstrap/js/dist/tab';
// import 'bootstrap/js/dist/toast';
// import 'bootstrap/js/dist/tooltip';

const asideHideBtn = '.aside__hide-btn';
const asideShowBtn = '.header__aside-btn';
const searchBtn = '.header__search-btn';
const searchForm = '.search';
const date = new Date();
const currentYear = date.getFullYear();

$(document).ready(() => {
  console.log('Если Вы нашли ошибку, откройте issue или предложите pr - https://github.com/dan-sazonov/old-sudga');
  $('#from-jquery').append('Если этот текст можно прочитать, значит на фронте все правильно.');

  vkInit();

  if (!debug.showCookieAlert) {
    $('.cookie-alert').removeClass('d-flex').addClass('hidden');
  }

  $('.cur-year').text(currentYear);

  function showAside() {
    // показывает сайдбар и сворачивает форму поиска
    hideSearchForm();
    $('.aside').toggleClass('aside_open');
    $(asideHideBtn).toggleClass('aside__shadow_active');
  }

  function hideAside() {
    // скрывает сайдбар
    $('.aside').toggleClass('aside_open');
    $(asideHideBtn).toggleClass('aside__shadow_active');
  }

  function showSearchForm() {
    // показывает форму поиска
    $('.logo').addClass('hidden');
    $(searchBtn).addClass('hidden');
    $(searchForm).removeClass('hidden');
    setTimeout(() => {
      $(searchForm).addClass('search_active');
    }, 20);
  }

  function hideSearchForm() {
    // сворачивает форму поиска
    $(searchForm).addClass('hidden').removeClass('search_active');
    $('.logo').removeClass('hidden');
    $(searchBtn).removeClass('hidden');
  }

  $(asideShowBtn).click(showAside);
  $(asideHideBtn).click(hideAside);
  $(searchBtn).click(showSearchForm);
});
