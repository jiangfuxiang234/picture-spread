var ul = document.getElementsByTagName('ul')[0];
var lis = document.querySelectorAll('.innit li');
var last = null;
var closeBtn = document.querySelectorAll('.direction .close');
console.log(closeBtn)
var timer = setTimeout(function(){
    ul.className = '';
},200)
lis.forEach(function(li,index){
    console.log(li,index)
    li.onclick = function(){
        last && (last.className = ''); // 一定要先执行这个清空语句，不然你点两次的时候，会将点击的active清除
        this.className = 'active';     // (因为点两次的话last和this都是同一个，如果将清空语句放在后面，则会将active清除)
        last = this;
        ul.setAttribute('id', 'activeWrap')
    }
     closeBtn[index].onclick = function(e){
         lis[index].className = '';
         ul.removeAttribute('id', 'activeWrap');
         last = null;
         e.stopPropagation(); // 因为close的父级li也绑定了点击事件，所以点击close时会冒泡给li，同时触发，
     }                        // 一个是要清除active，一个是要加上active，这样就矛盾实现不了功能，所以要阻止冒泡
})