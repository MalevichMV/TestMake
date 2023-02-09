import tabs from './modules/tabs';
import textField from './modules/textField';
import dropdownList from './modules/dropdownList'

window.addEventListener('DOMContentLoaded', function() {
    tabs('.typography__tabs-item', '.typography__styles', '.typography__tabs', 'typography__tabs-item-active');
    textField('.UI__textField-input', '.UI__textField-errorMessage');
    dropdownList();
}); 