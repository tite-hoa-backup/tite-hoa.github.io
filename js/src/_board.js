// 'use strict';

/* ==============================
    basic board layout (title, header)
============================== */
// (function(){

//     // get title of this page
//     var getSidebarTitle = document.querySelector('.this');

//     var getBoardContainer = document.getElementsByClassName('board-container')[0];


//     // board header
//     var setHeader = document.createElement('div');
//     setHeader.className = 'board-header';

//     (function(){

//         // set title (kor)
//         var setHeaderTitle = document.createElement('h3');
//         setHeaderTitle.className = 'header-title';
//         setHeaderTitle.innerHTML = getSidebarTitle.title;
//         setHeader.appendChild(setHeaderTitle);
        

//         // set subtitle (eng)
//         var getSubtitle = document.querySelector('.this > [data-subtitle]');
//         var setHeaderSubtitle = document.createElement('h6');
//         setHeaderSubtitle.className = 'header-subtitle';
//         setHeaderSubtitle.innerHTML = getSubtitle.dataset.subtitle;
//         setHeader.appendChild(setHeaderSubtitle);


//         // show new post btn if not dashboard
//         if (getSubtitle.dataset.subtitle != 'Dashboard'){

//             // btn - new post
//             var setNewpostBtn = document.createElement('a');
//             setNewpostBtn.className = 'header-newpost';
//             setNewpostBtn.setAttribute('title', '새 글 작성하기');
//             setHeader.appendChild(setNewpostBtn);
    
//             // header write newpost btn
//             (function(){
                
//                 var setBtnIcon = document.createElement('i');
//                 setBtnIcon.className = 'material-icons md-24 header-newpost-icon';
//                 setBtnIcon.innerHTML = 'create';
    
//                 var setBtnSpan = document.createElement('span');
//                 setBtnSpan.innerHTML = '새 글 작성하기';
//                 setBtnSpan.className = 'header-newpost-text';
//                 setNewpostBtn.appendChild(setBtnIcon);
//                 setNewpostBtn.appendChild(setBtnSpan);
    
//             })();
//         }

//     })();



//     // board body
//     var setWrapper = document.createElement('div');
//     setWrapper.className = 'board-wrapper';

//     (function(){

//         var setWrapperHeader = document.createElement('div');
//         setWrapperHeader.className = 'board-wrapper-header';
//         setWrapper.appendChild(setWrapperHeader);

//         // post number count
//         (function(){

//             var setHeaderCount = document.createElement('span');
//             setHeaderCount.className = 'board-notice-count';
//             setHeaderCount.innerHTML = null + '건';

//             setWrapperHeader.appendChild(setHeaderCount);

//         })();

//     })();
    

//     getBoardContainer.appendChild(setHeader);
//     getBoardContainer.appendChild(setWrapper);

// })();
