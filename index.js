let sortButton = document.getElementsByClassName('sort-btn')[0];
let shuffleButton = document.getElementsByClassName('shuffle-btn')[0];

sortButton.addEventListener('click',function(event) {
    let elementList = new Array (...document.getElementsByClassName('now'));
    let colorArray = ['#6f98a8','#2b8ead','#2f454e','#2b8ead','#2f454e','#bfbfbf','#bfbfbf','#6e97a7','#2f454e'];
    elementList = elementList.sort();
    document.querySelector('.num-section').innerHTML = '';
    for(var i = 0, len = elementList.length; i < len; i++) {
      elementList[i].innerHTML=`${i+1}`;
      elementList[i].style.backgroundColor = colorArray[i];
      document.querySelector('.num-section').appendChild(elementList[i]);
}
});

shuffleButton.addEventListener('click',function(event) {
    let elementList = new Array (...document.getElementsByClassName('now'));
    elementList = elementList.sort(() => Math.random() - 0.5);
    for(var i = 0, len = elementList.length; i < len; i++) {
    var parent = elementList[i].parentNode;
    var detatchedItem = parent.removeChild(elementList[i]);
    parent.appendChild(detatchedItem);
}
});

function loadMobileStyles() {
    console.log("resize",window.screen.width)
    if(window.screen.width < 375) {
         let elementList = new Array (...document.getElementsByClassName('now'));
         let colorArray = ['#6f98a8','#2b8ead','#2f454e','#2b8ead','#2f454e','#bfbfbf','#bfbfbf','#6e97a7','#2f454e'];
         document.querySelector('.num-section').innerHTML = '';
         for(var i = 0, len = elementList.length; i < len; i++) {
           elementList[i].style.borderLeft =`10px solid ${colorArray[i]}`;
           elementList[i].style.fontSize ='x-large';
           document.querySelector('.num-section').appendChild(elementList[i]);
          }
    } else {
            document.querySelector('.num-section').innerHTML = ` <div class="now" style="background-color: #6f98a8;">1</div>
                <div class="now" style="background-color: #2b8ead;">2</div>
                <div class="now" style="background-color: #2f454e;">3</div>
                <div class="now" style="background-color: #2b8ead;">4</div>
                <div class="now" style="background-color: #2f454e;">5</div>
                <div class="now" style="background-color: #bfbfbf;">6</div>
                <div class="now" style="background-color: #bfbfbf;">7</div>
                <div class="now" style="background-color: #6e97a7;">8</div>
                <div class="now" style="background-color: #2f454e;">9</div>`;
          }
}