'use strict';

/* ==============================
    addEventListener -> input 로그인
============================== */
(function(){

    var getIdForm = document.querySelector('.text-field-id');
    var getPwForm = document.querySelector('.text-field-pw');
    
    var getLoginBtn = document.querySelector('.login-btn');

    if (getIdForm) {

        getIdForm.addEventListener('input', function() {
            if (this.value.length === 0) {
                getLoginBtn.disabled = true;
            }
            else if (this.value.length >= 1) {
                getPwForm.addEventListener('input', function() {

                    if (getIdForm.value.length >= 1 && getPwForm.value.length >= 1) {
                        getLoginBtn.disabled = false;
                        getLoginBtn.setAttribute('title', '로그인');
                    }

                });
            }
        });
        
    }

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
                body: document.querySelector('body'),
                dim: document.querySelector('.dim'),

                dimLayer: document.querySelector('.dim-layer'),
        
                doToggle: function(e) {
                    e.preventDefault();
                    this.navToggle.classList.toggle('expanded');
                    this.nav.classList.toggle('expanded');
                    this.dim.classList.toggle('dim-layer');
                    
                    // if (this.dimLayer) {
                    //     this.dim.classList.toggle('dim-layer');
                    // }
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
                    if (getHamburgerExpanded) {
                        setHamburgerIcon.innerHTML = 'close';
                    }
                    else {
                        setHamburgerIcon.innerHTML = 'menu';
                    }
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

                if (metaList.sizes == '192x192') {
                    setLink.setAttribute('href', '/favicon/android-icon-' + metaList.sizes + '.png');
                } else {
                    setLink.setAttribute('href', '/favicon/favicon-' + metaList.sizes + '.png');
                }
                
            } else {
                setLink.setAttribute('href', metaList.href);
            }

            headTitle.appendChild(setLink);
        }

    });

})();
