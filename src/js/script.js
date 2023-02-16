import tabs from './modules/tabs';
import textField from './modules/textField';
import dropdownList from './modules/dropdownList';
import check_btns from './modules/check_btns';
import accordion from './modules/accordion';
import navigation from './modules/navigation';
import burger from './modules/burger';
import '../scss/base.scss'

window.addEventListener('DOMContentLoaded', function() {
    tabs('.typography__tabs-item', '.typography__styles', '.typography__tabs', 'typography__tabs-item-active');
    textField('.UI__textField-input', '.UI__textField-errorMessage');
    dropdownList('.UI__drop-downList-select', '.UI__drop-downList-select-header', '.UI__drop-downList-select-body','.UI__drop-downList-select-icon','.UI__drop-downList-select-item','.UI__drop-downList-select-current');
    check_btns('.UI__check_button', '.UI__check_button-checkbox','.UI__radio_button', '.UI__radio_button-radio');
    accordion('.UI__accordion-header', '.UI__accordion-body');
    navigation();
    burger('.back-page', '.header__burger');
}); 