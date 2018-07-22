// 'use strict';

/* ==============================
    set title for each sidebar items
============================== */
// (function(){

//     var sidebarList = [
//         {
//             name: '상황판',
//             href: 'dashboard',
//             icon: 'dashboard',
//             type: 'dashboard-overall',
//             subtitle: 'Dashboard'
//         },
//         {
//             name: '공지사항 / 알림',
//             href: 'notification',
//             icon: 'notifications',
//             type: 'board-plain',
//             subtitle: 'Notification'
//         },
//         {
//             name: '주민투표',
//             href: 'vote',
//             icon: 'how_to_vote',
//             type: 'dashboard',
//             subtitle: 'Vote'
//         },
//         {
//             name: '민원',
//             href: 'petition',
//             icon: 'record_voice_over',
//             type: 'board-plain',
//             subtitle: 'Petition'
//         },
//         {
//             name: '관리자 글 게시',
//             href: 'admin-post',
//             icon: 'security',
//             type: 'qna-board',
//             subtitle: 'Admin post'
//         },
//         {
//             name: '광고 글 게시',
//             href: 'business-post',
//             icon: 'store',
//             type: 'board-plain',
//             subtitle: 'Business post'
//         },
//         {
//             name: '예약알림 만들기',
//             href: 'pre-noti',
//             icon: 'alarm_add',
//             type: 'board-plain',
//             subtitle: 'Notification'
//         },
//     ];

//     var getSidebarContainer = document.getElementsByClassName('sidebar-container')[0];
//     var setSidebarWrapper = document.createElement('div');
//     setSidebarWrapper.className = 'sidebar-wrapper';
//     getSidebarContainer.appendChild(setSidebarWrapper);



//     // sidebar menu - each items
//     (function(){

//         var getSidebarWrapper = document.getElementsByClassName('sidebar-wrapper')[0];
//         var thisUrl = window.location.href;
        
//         sidebarList.forEach(function(list) {

//             var setSidebarItem = document.createElement('a');
//             getSidebarWrapper.appendChild(setSidebarItem);
//             setSidebarItem.className = 'sidebar-item ' + list.type;
//             setSidebarItem.setAttribute('title', list.name);
            
//             var setItemIcon = document.createElement('i');
//             var setItemText = document.createElement('span');

//             setItemIcon.className = 'material-icons md-24';
//             setItemIcon.innerHTML = list.icon;
//             setItemText.className = 'sidebar-text';
//             setItemText.setAttribute('data-subtitle', list.subtitle);
//             setItemText.innerHTML = list.name;

//             setSidebarItem.setAttribute('href', '/html/' + list.href + '.html');

//             setSidebarItem.appendChild(setItemIcon);
//             setSidebarItem.appendChild(setItemText);



//             // set className '.this', HTML title
//             if(thisUrl.indexOf(list.href) != -1) {
//                 setSidebarItem.className += ' this';
//                 document.title += ' ' + list.name;
//             }

//         });

//     })();

// })();



/* ==============================
    show/hide hamburger menu
============================== */
// (function() {

// 	var setHamburgerToggle = {
// 		navToggle: document.querySelector('.hamburger'),
//         nav: document.querySelector('.sidebar-container'),
//         body: document.querySelector('body'),

// 		doToggle: function(e) {
// 			e.preventDefault();
// 			this.navToggle.classList.toggle('expanded');
// 			this.nav.classList.toggle('expanded');
// 			// this.body.classList.toggle('dim-layer');
// 		}
// 	};

// 	setHamburgerToggle.navToggle.addEventListener('click', function(e) {
//         setHamburgerToggle.doToggle(e);
//     });

// }());



/* ==============================
    sidebar accordion menu
============================== */
// (function(){
//     var acc = document.getElementsByClassName('sidebar-accordion');
//     var i;

//     for (i = 0; i < acc.length; i++) {
//         acc[i].addEventListener('click', function() {
//             this.classList.toggle('active');
//             var panel = this.nextElementSibling;
//             if (panel.style.maxHeight)
//                 panel.style.maxHeight = null;
//             else
//                 panel.style.maxHeight = panel.scrollHeight + "px";
            
//         });
//     }
// })();
