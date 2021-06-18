import 'airbnb-browser-shims';
import * as $ from 'jquery';
import './jquery.tap';
import 'jquery-touchswipe';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/alert';
import 'bootstrap/js/dist/button';
import 'bootstrap/js/dist/modal';
import vkInit from './vk';
import debug from './config';
import {landBlock} from './landings';
// import 'bootstrap/js/dist/carousel';
// import 'bootstrap/js/dist/collapse';
// import 'bootstrap/js/dist/dropdown';
// import 'bootstrap/js/dist/popover';
// import 'bootstrap/js/dist/scrollspy';
// import 'bootstrap/js/dist/tab';
// import 'bootstrap/js/dist/toast';
// import 'bootstrap/js/dist/tooltip';

const asideHideBtn = '.aside__hide-btn';
const asideShowBtn = '.header__aside-btn';
const searchBtn = '.header__search-btn';
const searchForm = '.search';
const shareBtn = '.toggle-social';
const shareItem = '.ya-share2__item';
const date = new Date();
const currentYear = date.getFullYear();
const breakpoints = {
  'sm': 576,
  'md': 768,
  'lg': 992,
  'xl': 1200
};
const realWidth = window.innerWidth;
// const realHeight = window.innerHeight;
const isTouch = realWidth < breakpoints.lg;
const clickEvent = $.isFunction($.fn.tap) && isTouch ? 'tap' : 'click';

let shownSocialButton = false;
let shownAside = false;

$(document).ready(() => {
  console.log('Это бета-версия сайта, которая требует значительных доработок и фиксов, так что не пугайтесь столь жуткого кода - это временная мера. Если Вы хотите принять участие в разработке или рассказать о найденных ошибках, чекните репо на гх - https://github.com/dan-sazonov/old-sudga');
  $('#from-jquery').append('Если этот текст можно прочитать, значит на фронте все правильно.');

  vkInit();

  $('.cur-year').text(currentYear);

  function hideSearchForm() {
    // сворачивает форму поиска
    $(searchForm).addClass('hidden').removeClass('search_active');
    $('.logo').removeClass('hidden');
    $(searchBtn).removeClass('hidden');
    $('.nav').removeClass('hidden');
  }

  function showAside() {
    // показывает сайдбар и сворачивает форму поиска
    hideSearchForm();
    $('.aside').toggleClass('aside_open');
    $(asideHideBtn).toggleClass('aside__shadow_active');
    shownAside = true;
  }

  function hideAside() {
    // скрывает сайдбар
    $('.aside').toggleClass('aside_open');
    $(asideHideBtn).toggleClass('aside__shadow_active');
    shownAside = false;
  }

  function showSearchForm() {
    // показывает форму поиска
    if (realWidth < breakpoints.sm) {
      $('.logo').addClass('hidden');
    }
    $(searchBtn).addClass('hidden');
    $('.nav').addClass('hidden').removeClass('d-sm-flex');
    $(searchForm).removeClass('hidden');
    setTimeout(() => {
      $(searchForm).addClass('search_active');
    }, 20);
  }

  function toggleSocialButton() {
    // показывает кнопки социальных сетей в article__social
    if (shownSocialButton) {
      hideSocialButton();
      return;
    }
    shownSocialButton = true;
    $('.article__share_primary').addClass('d-none').removeClass('d-flex');
    $('.article__share').addClass('d-flex').removeClass('d-none');
    setTimeout(() => {
      $('.article__share').addClass('article__share_active');
    }, 20);
  }

  function hideSocialButton() {
    // скрывает кнопки социальных сетей
    shownSocialButton = false;
    $('.article__share').removeClass('article__share_active').removeClass('d-flex');
    setTimeout(() => {
      $('.article__share').addClass('d-none');
    }, 20);
    setTimeout(() => {
      $('.article__share_primary').removeClass('d-none').addClass('d-flex');
    }, 20);
  }

  // меняем блоки на заглушки, задаем модальные окна
  $('.featureLanding').attr({
    'data-toggle': 'modal',
    'data-target': '#modalLanding'
  });
  $('.landingBlock').html(landBlock);

  if (!debug.showPopularArticle) {
    $('.popular__list').addClass('d-none').removeClass('row');
    $('.popular__landing-block').removeClass('d-none');
  }

  if (!debug.showCookieAlert) {
    $('.cookie-alert').removeClass('d-flex').addClass('hidden');
  }

  // обнуляем заглушенные счетчики
  $('.likes__counter, .dislikes__counter, .views__counter').text(0);

  // для адаптирования
  if (!isTouch) {
    $(searchBtn).addClass('hidden');
    $(searchForm).removeClass('hidden');
    setTimeout(() => {
      $(searchForm).addClass('search_active');
    }, 20);
  }

  // обработчики кликов
  $(asideShowBtn).on(clickEvent, showAside);
  $(asideHideBtn).on(clickEvent, hideAside);
  if (isTouch && realWidth <= breakpoints.sm) { // на не сенсорных устр-вах обработчик свайпа не дает выделить текст
    $('body').swipe({
      swipe: function (event, direction) {
        if (direction === 'right' && !shownAside) {
          showAside();
        }
        if (direction === 'left' && shownAside) {
          hideAside();
        }
      }
    });
  }
  $(searchBtn).on('click', showSearchForm); // fixme tap по батону вызывает перезагрузку страницы, хз почему
  $(shareBtn).on(clickEvent, toggleSocialButton);
  $(shareItem).on(clickEvent, hideSocialButton);
  $('.to-print').click(() => {
    window.print();
  });
});
