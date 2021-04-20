import * as $ from 'jquery';
import 'bootstrap/js/dist/util';
// import Alert from 'bootstrap/js/dist/alert';
// import Button from 'bootstrap/js/dist/button';
// import Carousel from 'bootstrap/js/dist/carousel';
// import Collapse from 'bootstrap/js/dist/collapse';
// import Dropdown from 'bootstrap/js/dist/dropdown';
// import Modal from 'bootstrap/js/dist/modal';
// import Popover from 'bootstrap/js/dist/popover';
// import Scrollspy from 'bootstrap/js/dist/scrollspy';
// import Tab from 'bootstrap/js/dist/tab';
// import Toast from 'bootstrap/js/dist/toast';
// import Tooltip from 'bootstrap/js/dist/tooltip';

const asideHideBtn = '.aside__hide-btn';
const asideShowBtn = '.header__aside-btn';
const searchBtn = '.header__search-btn';
const searchForm = '.search';

$(document).ready(function () {
  console.log('Если Вы нашли ошибку, откройте issue или предложите pr - https://github.com/dan-sazonov/old-sudga');
  $('#from-jquery').append('Если этот текст можно прочитать, значит на фронте все правильно.');

  function showAside() {
    // показывает сайдбар и сворачивает форму поиска
    hideSearchForm();
    $('.aside').toggleClass('aside_open');
    $(asideHideBtn).toggleClass('aside__shadow_active')
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
    setTimeout(function () {
      $(searchForm).addClass('search_active');
    }, 20);
  }

  function hideSearchForm() {
    // сворачивает форму поиска
    $(searchForm).addClass('hidden');
    $(searchForm).removeClass('search_active');
    $('.logo').removeClass('hidden');
    $(searchBtn).removeClass('hidden');
  }

  $(asideShowBtn).click(showAside);
  $(asideHideBtn).click(hideAside);
  $(searchBtn).click(showSearchForm);
});
