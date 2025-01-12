document.addEventListener('DOMContentLoaded', function(){
    const header = document.querySelector('header');
    const container = document.getElementById('container');
    const menuButton = document.getElementById('menu');
    const links = document.querySelectorAll('a[href^="#"]');

    // function to handle the scroll
    function handleScroll(){
        container.classList.remove('menuopen');
        header.classList.toggle('sticky', window.scrollY >= 100); // Updated class name to 'sticky'
    }

    // Function to handle menu button click
    function handleMenuButtonClick(){
        header.classList.remove('sticky'); // Updated class name to 'sticky'
        container.classList.toggle('menuopen');
    }

    // function to handle anchor links click
    function handleLinkClick(event){
        event.preventDefault();  // Corrected typo
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);  // Corrected here
        if(targetElement){
            targetElement.scrollIntoView({
                behavior: "smooth"
            });
        }
    }

    // function to close the menu when clicking outside and show the sticky menu
    function handleCloseOutside(event){
        if(!menuButton.contains(event.target)){
            // check if the click was outside the menu button
            container.classList.remove('menuopen');
            header.classList.add('sticky');  // Updated class name to 'sticky'
        }
    }

    window.addEventListener('scroll', handleScroll);
    menuButton.addEventListener('click', handleMenuButtonClick);
    links.forEach(link => link.addEventListener('click', handleLinkClick));

    // listen for clicks anywhere in document
    document.addEventListener('click', handleCloseOutside);
});

