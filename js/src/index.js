'use strict';

/* ==============================
    addEventListener -> input 로그인
============================== */
(function(){
    var getIdForm = document.querySelector('.text-field-id');
    var getPwForm = document.querySelector('.text-field-pw');
    var getLoginBtn = document.querySelector('.login-btn');

    if (getIdForm) {
        getLoginBtn.disabled = false;
        // getIdForm.addEventListener('input', function() {
        //     if (this.value.length === 0) 
        //         getLoginBtn.disabled = true;
        //     else if (this.value.length >= 0 || getPwForm.value.length >= 0) {
        //         getPwForm.addEventListener('input', function() {
        //             if (getIdForm.value.length >= 0 && getPwForm.value.length >= 0) {
        //                 getLoginBtn.disabled = false;
        //                 getLoginBtn.setAttribute('title', '로그인');
        //             }
        //         })
        //     }
        // })
    }
})();



/* ==============================
    ripple effect
============================== */
(function(){
    var getBtnTags = Array.prototype.slice.call(document.querySelectorAll('button'));
    var getBtnNewPost = Array.prototype.slice.call(document.querySelectorAll('.header-newpost'));
    var getBtnSidebar = Array.prototype.slice.call(document.querySelectorAll('.sidebar-item'));
    // var getBtnSelector = Array.prototype.slice.call(document.querySelectorAll('fieldset span'));

    var getBtnAll = [];
    getBtnAll = getBtnAll.concat(getBtnTags, getBtnNewPost, getBtnSidebar);

    getBtnAll.forEach(function(btn){
        btn.setAttribute("ripple", "ripple");
    });
})();



/* ==============================
    ripple effect
============================== */
(function() {
    var cleanUp,
        debounce,
        i,
        len,
        ripple,
        rippleContainer,
        ripples,
        showRipple;

    debounce = function(func, delay) {
        var inDebounce;

        inDebounce = undefined;

        return function() {
            var args, context;
            context = this;
            args = arguments;
            clearTimeout(inDebounce);
            return inDebounce = setTimeout(function() {
                return func.apply(context, args);
            }, delay);
        };
    };

    showRipple = function(e) {
        var pos, ripple, rippler, size, style, x, y;

        ripple = this;
        rippler = document.createElement('span');
        size = ripple.offsetWidth;
        pos = ripple.getBoundingClientRect();
        x = e.clientX - pos.left - (size / 2);
        y = e.clientY - pos.top - (size / 2);
        style = 'top:' + y + 'px; left: ' + x + 'px; height: ' + size + 'px; width: ' + size + 'px;';
        ripple.rippleContainer.appendChild(rippler);
        
        return rippler.setAttribute('style', style);
    };

    cleanUp = function() {
        while (this.rippleContainer.firstChild) {
            this.rippleContainer.removeChild(this.rippleContainer.firstChild);
        }
    };

    ripples = document.querySelectorAll('[ripple]');

    for (i = 0, len = ripples.length; i < len; i++) {
        ripple = ripples[i];
        rippleContainer = document.createElement('div');
        rippleContainer.className = 'ripple--container';
        ripple.addEventListener('mousedown', showRipple);
        ripple.addEventListener('mouseup', debounce(cleanUp, 2000));
        ripple.rippleContainer = rippleContainer;
        ripple.appendChild(rippleContainer);
    }
})();



/* ==============================
    getFullYear
============================== */
(function(){
    var d = new Date();
    var y = d.getFullYear();
    document.getElementsByClassName("copyright")[0].innerHTML = y;
})();



/* ==============================
    show/hide hamburger menu 아이콘 설정
============================== */
(function() {
    var getHamburgerClass = document.querySelector('.hamburger');
    var setHamburgerIcon = document.querySelector('.hamburger > i');
    var vw = window.innerWidth;

        if (getHamburgerClass) {
            var setHamburgerToggle = {
                navToggle: document.querySelector('.hamburger'),
                nav: document.querySelector('.sidebar-container'),
                dim: document.querySelector('.dim'),
                dimLayer: document.querySelector('.dim-layer'),
                
                doToggle: function(e) {
                    e.preventDefault();
                    this.navToggle.classList.toggle('expanded');
                    this.nav.classList.toggle('expanded');
                    this.dim.classList.toggle('dim-layer');
                    // this.dimLayer.classList.toggle('dim-layer');

                    if (this.dimLayer)
                        this.dim.classList.toggle('dim-layer');
                }
            };
        
            setHamburgerToggle.navToggle.addEventListener('click', function(e) {
                setHamburgerToggle.doToggle(e);
            });
    
            // hamburger menu icon change toggle (mqbp 아이콘 변경)
            var setHamburger = document.querySelector('.hamburger');
            
            if (setHamburger) {
                setHamburger.addEventListener('click', function() {
                    var getHamburgerExpanded = document.querySelectorAll('.expanded')[1];
                    if (getHamburgerExpanded)
                        setHamburgerIcon.innerHTML = 'close';
                    else 
                        setHamburgerIcon.innerHTML = 'menu';
                });
            }
        }
}());



/* ==============================
    meta Tags **meta [name, content]**
============================== */
(function(){
    var thisUrl = window.location.href;
    var thisTitle = document.title;
    var thisDesc = document.querySelector('meta[name="description"]').getAttribute('content');
    var thisKeys = document.querySelector('meta[name="keywords"]').getAttribute('content');
    var thisOGImg = document.querySelector('meta[property="og:image"]').getAttribute('content');

    var metaLists = [
        { name: 'url', content: thisUrl },
        { name: 'identifier-URL', content: thisUrl },
        { name: 'pagename', content: thisTitle },
        { name: 'HandheldFriendly', content: 'true' },
        { name: 'referrer', content: 'origin-when-cross-origin' },
        { name: 'twitter:url', content: thisUrl },
        { name: 'twitter:domain', content: thisUrl },
        { name: 'twitter:title', content: thisTitle },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:description', content: thisDesc },
        { name: 'twitter:image', content: thisOGImg },
        { name: 'twitter:image:src', content: thisOGImg },
        { name: 'twitter:image:alt', content: thisTitle },
        { property: 'og:img:alt', content: thisOGImg },
        { property: 'og:img:url', content: thisOGImg },
        { property: 'og:img:secure_url', content: thisOGImg },
        { property: 'article:tag', content: thisKeys },
        { property: 'al:web:url', content: thisUrl },
        { itemprop: 'name', content: thisTitle },
        { itemprop: 'description', content: thisDesc },
        { itemprop: 'image', content: thisOGImg },
        { rel: 'apple-touch-icon', sizes: '57x57' },
        { rel: 'apple-touch-icon', sizes: '60x60' },
        { rel: 'apple-touch-icon', sizes: '72x72' },
        { rel: 'apple-touch-icon', sizes: '76x76' },
        { rel: 'apple-touch-icon', sizes: '114x114' },
        { rel: 'apple-touch-icon', sizes: '120x120' },
        { rel: 'apple-touch-icon', sizes: '144x144' },
        { rel: 'apple-touch-icon', sizes: '152x152' },
        { rel: 'apple-touch-icon', sizes: '180x180' },
        { rel: 'icon', sizes: '192x192' },
        { rel: 'icon', sizes: '32x32' },
        { rel: 'icon', sizes: '96x96' },
        { rel: 'icon', sizes: '16x16' },
        { rel: 'manifest', href: '/favicon/manifest.json' },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { name: 'msapplication-TileColor', content: '/favicon/ms-icon-144x144.png' },
        { name: 'theme-color', content: '#ffffff' },
    ];

    var headTitle = document.querySelector('head');
    metaLists.forEach(function(metaList) {
        if (metaList.name) {
            var setMeta = document.createElement('meta');
            setMeta.setAttribute('name', metaList.name);
            setMeta.setAttribute('content', metaList.content);
            headTitle.appendChild(setMeta);
        }

        else if (metaList.property) {
            var setMeta = document.createElement('meta');
            setMeta.setAttribute('property', metaList.property);
            setMeta.setAttribute('content', metaList.content);
            headTitle.appendChild(setMeta);
        }

        else if (metaList.itemprop) {
            var setMeta = document.createElement('meta');
            setMeta.setAttribute('itemprop', metaList.itemprop);
            setMeta.setAttribute('content', metaList.content);
            headTitle.appendChild(setMeta);
        }

        else if (metaList.rel == 'apple-touch-icon') {
            var setLink = document.createElement('link');
            setLink.setAttribute('rel', metaList.rel);
            setLink.setAttribute('sizes', metaList.sizes);
            setLink.setAttribute('href', '/favicon/apple-icon-' + metaList.sizes + '.png');
            headTitle.appendChild(setLink);
        }

        else if (metaList.rel == 'icon' || metaList.rel == 'manifest') {
            var setLink = document.createElement('link');
            setLink.setAttribute('rel', metaList.rel);

            if (metaList.rel == 'icon') {
                setLink.setAttribute('type', 'image/png');
                setLink.setAttribute('sizes', metaList.sizes);

                if (metaList.sizes == '192x192')
                    setLink.setAttribute('href', '/favicon/android-icon-' + metaList.sizes + '.png');
                else
                    setLink.setAttribute('href', '/favicon/favicon-' + metaList.sizes + '.png');
                
            } else {
                setLink.setAttribute('href', metaList.href);
            }

            headTitle.appendChild(setLink);
        }
    });
})();



/* ==============================
    checkbox innerhtml
============================== */
// (function(){
//     var getSetTimeDiv = document.querySelector('.write-post-set-time-form');
//     var getSetTimeSpan = document.querySelector('.write-post-summary > .write-post-summary-text');
//     var getCheckboxAll = document.querySelectorAll('.write-post-set-date > .write-post-set-date-item > input');
//     var getCheckboxAllLabel = document.querySelectorAll('.write-post-set-date > .write-post-set-date-item');
//     var getRadioAll = document.querySelectorAll('.write-post-set-date > .write-post-set-date-radio-wrapper > input');


//     getCheckboxAllLabel.forEach(function(label) {
//         var check = function() {
//             label.input.checked = true;
//         };

//         label.addEventListener('click', check);
//     });

//     getRadioAll.forEach(function(radioEach) {
//         if (radioEach.checked == true)
//             getSetTimeSpan.innerHTML += radioEach.value;
//     });

//     var check = function() {
//         this.checked = true;
//     };

//     for (var i = 0; i < getCheckboxAll.length; i++) {
    
//         getCheckboxAllLabel[i].addEventListener('click', check);
    
//         if (getCheckboxAll[i].checked == true) {
//             if (getCheckboxAll[i])
//                 getSetTimeSpan.innerHTML += getCheckboxAll[i].value;
//             else
//                 getSetTimeSpan.innerHTML += ', ' + getCheckboxAll[i].value;
//         }
//     }

// })();
