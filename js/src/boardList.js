'use strict';

/* ==============================
    set each layout by list type
============================== */
// board-plain
// qna-board
// dashboard
// dashboard-overall

var mockDataList = [
    {
        listTitle: '착목한는 얼마나 무한한 굳세게 교향악이다. 위하여, 않는 과실이 아름다우냐? 이상의 아니한 만천하의 그들은 커다란 힘있다.',
        createdDate: '2018/06/03 23:14'
    },
    {
        listTitle: '수 것은 이상 피에 사막이다. 얼음 갑 싶이 청춘 봄바람이다.',
        createdDate: '2018/06/11 12:48'
    },
    {
        listTitle: '두손을 그들의 피어나기 인간에 안고, 않는 이상은 약동하다. 안고, 인생을 그들에게 물방아 못할 내는 속잎나고, 말이다.',
        createdDate: '2018/06/15 14:57'
    }
];

(function(){
    
    // board-plain only
    var getBoardPlain = document.querySelector('.this.board-plain');

    if (getBoardPlain) {

        var getBoardWrapper = document.querySelector('.board-wrapper');

        mockDataList.forEach(function(list) {
            var setBoardList = document.createElement('div');
            setBoardList.className = 'list-board-plain';


            // set list items
            (function(){

                getBoardWrapper.appendChild(setBoardList);


                // checkbox
                var setCheckboxDiv = document.createElement('div');
                var setCheckbox = document.createElement('input');
                setCheckboxDiv.className = 'list-check-box-wrapper';
                setCheckbox.setAttribute('type', 'checkbox');
                // setCheckbox.setAttribute('onchange', 'isChecked()');
                setCheckbox.className = 'list-check-box';
                
                setBoardList.appendChild(setCheckboxDiv);
                setCheckboxDiv.appendChild(setCheckbox);
                
                // TODO: 체크박스 상태에 따라 배경색 변경
                // setCheckbox.setAttribute('onchange', 'isChecked()');
                // function isChecked(){
                //     var getCheckBox = document.querySelector('.list-check-box');
                //     if (getCheckBox.checked) {
                //         this.style.color = 'red';
                //     }
                // };
    

                // text
                var setBoardListSpanDiv = document.createElement('div');
                var setBoardListSpan = document.createElement('a');
                setBoardListSpanDiv.className = 'list-board-text-wrapper';
                setBoardListSpan.className = 'list-board-text';
                setBoardListSpan.innerHTML = list.listTitle;
                
                setBoardList.appendChild(setBoardListSpanDiv);
                setBoardListSpanDiv.appendChild(setBoardListSpan);



                // timestamp
                var setBoardListTsDiv = document.createElement('div');
                var setBoardListTsSpan = document.createElement('span');
                setBoardListTsDiv.className = 'list-board-time';
                setBoardListTsSpan.innerHTML = list.createdDate;
                
                setBoardList.appendChild(setBoardListTsDiv);
                setBoardListTsDiv.appendChild(setBoardListTsSpan);



                // edit post
                var setBoardEditDiv = document.createElement('div');
                var setBoardEditSpan = document.createElement('a');
                setBoardEditDiv.className = 'list-board-edit';
                setBoardEditSpan.innerHTML = '수정하기';
                
                setBoardList.appendChild(setBoardEditDiv);
                setBoardEditDiv.appendChild(setBoardEditSpan);

            })();
    
        });
    }

})();



/* ==============================
    set board body item types
============================== */
// (function(){
    
//     // board-plain only
//     var getBoardPlain = document.querySelector('.this.board-plain');

//     if (getBoardPlain) {

//     }
// })();