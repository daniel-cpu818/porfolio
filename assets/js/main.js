import parallax from './components/parallax.js';
import activeMenu from './components/selected_menu.js';
import updateCurrentYear from './helpers/date_updater.js';
import loader from './helpers/loader.js';
import resetToHome from './helpers/reload_page.js';
import sendEmail from './helpers/send_form.js';
import fullScreen from './helpers/full_screen.js';

document.addEventListener('DOMContentLoaded', () => {
    try {
        loader();
    } catch (error) {
        console.error("Error en el módulo loader:", error);
    }

    try {
        resetToHome();
    } catch (error) {
        console.error("Error en el módulo resetToHome:", error);
    }

    try {
        updateCurrentYear();
    } catch (error) {
        console.error("Error en el módulo updateCurrentYear:", error);
    }

    try {
        parallax();
    } catch (error) {
        console.error("Error en el módulo parallax:", error);
    }

    try {
        activeMenu();
    } catch (error) {
        console.error("Error en el módulo activeMenu:", error);
    }

    try {
        sendEmail();
    } catch (error) {
        console.error("Error en el módulo sendEmail:", error);
    }
    try {
        fullScreen();
    } catch (error) {
        console.error("Error en el módulo fullcreen:", error);
    }
});
