/**
 * Language Switcher and Persistence Script
 * This script handles the language selection from the dropdown and
 * persists the choice across all pages using localStorage.
 */

document.addEventListener('DOMContentLoaded', function() {
    const languageSwitcher = document.querySelector('.top-language-switcher');
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    // Function to update the switcher UI
    function updateSwitcherUI(langName, flagUrl) {
        if (languageSwitcher) {
            languageSwitcher.innerHTML = `<img src="${flagUrl}" alt="${langName} Flag"> ${langName}`;
        }
        
        // Update active state in dropdown
        dropdownItems.forEach(item => {
            if (item.textContent.trim() === langName) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // Check for stored language preference
    const storedLang = localStorage.getItem('selectedLanguage');
    const storedFlag = localStorage.getItem('selectedFlag');

    if (storedLang && storedFlag) {
        updateSwitcherUI(storedLang, storedFlag);
    }

    // Add click listeners to all language options
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get text and flag from the clicked item
            const langName = this.textContent.trim();
            const flagImg = this.querySelector('img');
            const flagUrl = flagImg ? flagImg.getAttribute('src') : '';

            // Update UI
            updateSwitcherUI(langName, flagUrl);

            // Store in localStorage
            localStorage.setItem('selectedLanguage', langName);
            localStorage.setItem('selectedFlag', flagUrl);
            
            console.log('Language changed to:', langName);
        });
    });
});
