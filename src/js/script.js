import tabs from './modules/tabs';
import textField from './modules/textField';
import dropdownList from './modules/dropdownList';
import check_btns from './modules/check_btns';
import accordion from './modules/accordion';
import navigation from './modules/navigation';
import burger from './modules/burger';
import '../scss/style.scss'

window.addEventListener('DOMContentLoaded', function() {
    tabs();
    textField();
    dropdownList();
    check_btns();
    accordion();
    navigation();
    burger();
}); 