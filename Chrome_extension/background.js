chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null,
        {code:"var tableId = document.getElementById('std');var tBody = tableId.getElementsByTagName('tbody')[0];var tableRow = tBody.getElementsByTagName('tr');\
        var pending=0,selected=0,boy=0,girl=0,fst=0,scd=0,trd=0,fth=0;for (var t = 0; t < tableRow.length; t++){if(tableRow[t].children[8].textContent=='待分發'){pending++;}else{selected++;} }\
        for (var t = 0; t < tableRow.length; t++){if(tableRow[t].children[5].textContent=='男'){boy++;}else{girl++;} }\
        for (var t = 0; t < tableRow.length; t++){if(parseInt(tableRow[t].children[7].textContent)==1){fst++;}else if(parseInt(tableRow[t].children[7].textContent)==2){scd++;}else if(parseInt(tableRow[t].children[7].textContent)==3){trd++;}else if(parseInt(tableRow[t].children[7].textContent)==4){fth++;}\
        }alert('課程名稱: '+document.getElementsByClassName('classBase')[0].children[0].children[2].children[1].textContent+'\\n\\n人數限制: '+parseInt(document.getElementsByClassName('classBase')[0].children[0].children[10].children[1].textContent)+'人\\n已中選人數: '+selected+'人\\n待分發人數: '+pending+'人\\n\\n第一志願: '+fst+'人\\n第二志願: '+scd+'人\\n第三志願: '+trd+'人\\n第四志願: '+fth+'人\\n\\n男: '+boy+' 女: '+girl);"});
});

// var tableId = document.getElementById('std');
// var tBody = tableId.getElementsByTagName('tbody')[0];
// var tableRow = tBody.getElementsByTagName('tr');

// for (var t = 0; t < tableRow.length; t++){
//     console.log(tableRow[t].children[3].textContent)
// }