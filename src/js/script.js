import tabs from './modules/tabs';
import textField from './modules/textField';
import dropdownList from './modules/dropdownList';
import check_btns from './modules/check_btns';
import accordion from './modules/accordion';
import navigation from './modules/navigation';
import modal from './modules/modal';
import '../scss/base.scss'

window.addEventListener('DOMContentLoaded', function() {
    tabs();
    textField();
    dropdownList();
    check_btns();
    accordion();
    navigation();
    modal();
}); 