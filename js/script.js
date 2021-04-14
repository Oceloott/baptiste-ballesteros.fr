// Dark Mode Setup

var darkMode;

if (localStorage.getItem('dark-mode')) {
    // if dark mode is in storage, set variable with that value
    darkMode = localStorage.getItem('dark-mode');
} else {
    // if dark mode is not in storage, set variable to 'light'
    darkMode = 'light';
}

// set new localStorage value
localStorage.setItem('dark-mode', darkMode);

if (localStorage.getItem('dark-mode') == 'dark') {
    document.documentElement.style.setProperty('--backgroundmain', '#1f2335');
    document.documentElement.style.setProperty('--maincolor', '#8bb5e7');
    document.documentElement.style.setProperty('--basecolor', 'white');
    // hide the 'dark' button
    $( ".chekad" ).prop( "checked", true );
    $('.dark-button').hide();
    // show the 'light' button
    $('.light-button').show();
}
if (localStorage.getItem('dark-mode') == 'light') {
    document.documentElement.style.setProperty('--backgroundmain', 'white');
    document.documentElement.style.setProperty('--maincolor', '#8bb5e7');
    document.documentElement.style.setProperty('--basecolor', 'black');
    // hide the 'dark' button
    $( ".chekad" ).prop( "checked", false );
    $('.dark-button').show();
    // show the 'light' button
    $('.light-button').hide();
}
$('.chekad').on('click', function() {
    if (localStorage.getItem('dark-mode') == 'light') {
    $( ".chekad" ).prop( "checked", true );
    document.documentElement.style.setProperty('--backgroundmain', '#1f2335');
    document.documentElement.style.setProperty('--maincolor', '#8bb5e7');
    document.documentElement.style.setProperty('--basecolor', 'white');
    if (localStorage.getItem('font-mode') == 'bluefont') {
        document.documentElement.style.setProperty('--maincolor', '#8bb5e7');
        $('.preference-user-color div').removeClass('active');
        $('.blue-button').addClass('active');

    }
    if (localStorage.getItem('font-mode') == 'redfont') {
        document.documentElement.style.setProperty('--maincolor', '#e79b8b');
        $('.preference-user-color div').removeClass('active');
        $('.red-button').addClass('active');

    }
    if (localStorage.getItem('font-mode') == 'greenfont') {
        document.documentElement.style.setProperty('--maincolor', '#90ccb0');
        $('.preference-user-color div').removeClass('active');
        $('.green-button').addClass('active');

    }
    if (localStorage.getItem('font-mode') == 'purplefont') {
        document.documentElement.style.setProperty('--maincolor', '#b78fcd');
        $('.preference-user-color div').removeClass('active');
        $('.purple-button').addClass('active');
    }


    localStorage.setItem('dark-mode', 'dark');
}else{
    $( ".chekad" ).prop( "checked", false );
        document.documentElement.style.setProperty('--backgroundmain', 'white');
        document.documentElement.style.setProperty('--maincolor', '#8bb5e7');
        document.documentElement.style.setProperty('--basecolor', 'black');
    
    
    
        if (localStorage.getItem('font-mode') == 'bluefont') {
            document.documentElement.style.setProperty('--maincolor', '#7ab7cc');
            $('.preference-user-color div').removeClass('active');
        $('.blue-button').addClass('active');
        }
        if (localStorage.getItem('font-mode') == 'redfont') {
            document.documentElement.style.setProperty('--maincolor', '#e68a8f');
            $('.preference-user-color div').removeClass('active');
        $('.red-button').addClass('active');
        }
        if (localStorage.getItem('font-mode') == 'greenfont') {
            document.documentElement.style.setProperty('--maincolor', '#7acca6');
            $('.preference-user-color div').removeClass('active');
        $('.green-button').addClass('active');
        }
        if (localStorage.getItem('font-mode') == 'purplefont') {
            document.documentElement.style.setProperty('--maincolor', '#b17acd');
            $('.preference-user-color div').removeClass('active');
        $('.purple-button').addClass('active');
        }
        $('body').removeClass('dark');
    
        localStorage.setItem('dark-mode', 'light');
    }});






var fontMode;

if (localStorage.getItem('font-mode')) {
    fontMode = localStorage.getItem('font-mode');
} else {
    darkMode = 'bluefont';
}

localStorage.setItem('font-mode', fontMode);

if (localStorage.getItem('font-mode') == 'bluefont') {
    if (localStorage.getItem('dark-mode') == 'dark') {
        document.documentElement.style.setProperty('--maincolor', '#8bb5e7');
    } else {
        document.documentElement.style.setProperty('--maincolor', '#7ab7cc');
    }
    $('.preference-user-color div').removeClass('active');
        $('.blue-button').addClass('active');
}

if (localStorage.getItem('font-mode') == 'redfont') {
    if (localStorage.getItem('dark-mode') == 'dark') {
        document.documentElement.style.setProperty('--maincolor', '#e79b8b');
    } else {
        document.documentElement.style.setProperty('--maincolor', '#e68a8f');
    }
    $('.preference-user-color div').removeClass('active');
        $('.red-button').addClass('active');
}

if (localStorage.getItem('font-mode') == 'greenfont') {
    if (localStorage.getItem('dark-mode') == 'dark') {
        document.documentElement.style.setProperty('--maincolor', '#90ccb0');
    } else {
        document.documentElement.style.setProperty('--maincolor', '#7acca6');
    }
    $('.preference-user-color div').removeClass('active');
        $('.green-button').addClass('active');
}
if (localStorage.getItem('font-mode') == 'purplefont') {
    if (localStorage.getItem('dark-mode') == 'dark') {
        document.documentElement.style.setProperty('--maincolor', '#b78fcd');
    } else {
        document.documentElement.style.setProperty('--maincolor', '#b17acd');
    }
    $('.preference-user-color div').removeClass('active');
        $('.purple-button').addClass('active');
}

// DARK

$('.blue-button').on('click', function() {

    if (localStorage.getItem('dark-mode') == 'dark') {
        document.documentElement.style.setProperty('--maincolor', '#8bb5e7');
    } else {
        document.documentElement.style.setProperty('--maincolor', '#7ab7cc');
    }
    localStorage.setItem('font-mode', 'bluefont');
    $('.preference-user-color div').removeClass('active');
    $(this).addClass('active');
});
$('.red-button').on('click', function() {

    if (localStorage.getItem('dark-mode') == 'dark') {
        document.documentElement.style.setProperty('--maincolor', '#e79b8b');
    } else {
        document.documentElement.style.setProperty('--maincolor', '#e68a8f');
    }
    localStorage.setItem('font-mode', 'redfont');
    $('.preference-user-color div').removeClass('active');
    $(this).addClass('active');
});
$('.green-button').on('click', function() {

    if (localStorage.getItem('dark-mode') == 'dark') {
        document.documentElement.style.setProperty('--maincolor', '#90ccb0');
    } else {
        document.documentElement.style.setProperty('--maincolor', '#7acca6');
    }
    localStorage.setItem('font-mode', 'greenfont');
    $('.preference-user-color div').removeClass('active');
    $(this).addClass('active');
});

$('.purple-button').on('click', function() {

    if (localStorage.getItem('dark-mode') == 'dark') {
        document.documentElement.style.setProperty('--maincolor', '#b78fcd');
    } else {
        document.documentElement.style.setProperty('--maincolor', '#b17acd');
    }
    localStorage.setItem('font-mode', 'purplefont');
    $('.preference-user-color div').removeClass('active');
    $(this).addClass('active');
});      
                
// setup watch for scroll (menu)
$('.menu-watcher li a').click(function () {
    $('.menu-watcher li a').removeClass('active');
    $(this).addClass('active');
});