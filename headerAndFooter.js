/*按鈕效果*/
const subtitleBtn = document.querySelector("button")
console.log(subtitleBtn)
subtitleBtn.addEventListener('click', function (event) {
  let btnPush = event.target
  console.log(btnPush)
  if (btnPush.tagName === "A") {
    btnPush.classList.add('hvr-push')
    removePush(btnPush)
  }

})
function removePush(btnPush) {
  btnPush.addEventListener("animationend", function () {
    console.log("finish")
    btnPush.classList.remove("hvr-push")
  })
}

/*切換漢堡排*/
const header = document.querySelector(".header");
const headerBar = document.querySelector(".fa-solid");
const nav = document.querySelector(".nav");

headerBar.addEventListener("click", function (event) {
  let barEvent = event.target;

  if (barEvent.classList.contains("fa-bars")) {
    barEvent.classList.remove("fa-bars");
    barEvent.classList.add("fa-xmark");
    nav.style.display = "flex";
  } else {
    barEvent.classList.remove("fa-xmark");
    barEvent.classList.add("fa-bars");
    nav.style.display = "none";
  }
});



/*footer*/
const footerData = [
  { title: '加入師虎', 
    describe: [{subtitle:'如何成為師虎',link:'#' }, {subtitle:'師虎學院',link:'#' }]
  },
  { title: '服務項目', 
    describe: [{subtitle:'安裝服務',link:'#' }, {subtitle:'水電服務',link:'#' },
    {subtitle:'清潔服務',link:'#' },{subtitle:'裝潢整修',link:'#' }
    ,{subtitle:'搬運服務',link:'#' },{subtitle:'家電服務',link:'#' }
    ,{subtitle:'房屋漏水',link:'#' },{subtitle:'消毒病媒',link:'#' }]
  },
  ,
  { title: '部落格', 
    describe: [{subtitle:'最新消息',link:'#' }, {subtitle:'限時優惠',link:'#' },
    {subtitle:'客戶案例',link:'#' },{subtitle:'好物分享',link:'#' }
    ,{subtitle:'我要投稿',link:'#' }]
  },
  { title: '協助', 
    describe: [{subtitle:'關於我們',link:'#' }, {subtitle:'Q&A',link:'#' },
    {subtitle:'下單教學',link:'#' }]
  }
  ];

  const footerServe = document.querySelector('.footer-serve')

  function renderFooter (){
    let str = ''
    let liStr = '' 
    footerData.forEach(item => {      
      item['describe'].forEach(i=>{        
       liStr += `
       <li><a href="${i.link}">${i.subtitle}</a></li>
       `             
      })     
     
     str+=`
     <div>
        <h4>${item.title}</h4>
        <ul>        
        ${liStr}
        </ul>
    </div>
     `
     footerServe.innerHTML = str
     liStr = ''      
    })
  }

  renderFooter()
 

