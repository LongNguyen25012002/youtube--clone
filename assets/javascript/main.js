// explicitly : rõ ràng
// <!-- neatly : gọn gàng -->
import {dataVD,categoryData} from './dataVideo.js';

function start(){
    javascriptHeader();
    navbarSide();
    sliderCarouselhandle();
    showVideoSection();
}
start();

function javascriptHeader(){
    // set btn-click for button common
    var btnClick = document.querySelectorAll('.click-btn');
        function clickActive(){

            btnClick.forEach(function(elActive){
                elActive.addEventListener('mousedown',function(event){
                    this.classList.add('btn-down');
                    event.stopPropagation()
                })
            })

            btnClick.forEach(function(elActive){
                elActive.addEventListener('mouseup',function(event){
                    this.classList.remove('btn-down');
                    event.stopPropagation()
                })
            })
        }
        clickActive()
        var menu__btn = document.querySelector('.header__list--js-btn-menu');
        var ListChild1 = document.querySelector('.header__list-child-upVideo');
        var ListChild2 = document.querySelector('.header__list-child-gird');
        var notification = document.querySelector('.header__list-child-notification');
        var icon = document.querySelectorAll('.header__list-item .header__item-icon');
        var navbarSide = document.querySelector('.navbar-side');
        var categroyBar = document.querySelector('.category-bar-location');

        // set btn riêng cho từng button
        menu__btn.addEventListener('click',function(){
            ListChild1.classList.remove('header__list-child--active');
            ListChild2.classList.remove('header__list-child--active');
            notification.classList.remove('header__list-child-notification--active');

            navbarSide.classList.toggle('navbar-side__hide-show');
            categroyBar.classList.toggle('js--category-hide-navbarSide');

            if(navbarSide.classList.contains('navbar-side__hide-show')){
                document.querySelector('.list-remote__item-link.list-remote__item-link--active').classList.remove('list-remote__item-link--active');
            } else {
                document.querySelector('.list-remote__item-link').classList.add('list-remote__item-link--active');
            }
        })

        var btnMic = document.querySelector('.header-btn-mic');
            btnMic.onclick = () => {
              document.querySelector('.header__microphone-popup').style.display = 'flex';  
            }

        var btnClose = document.querySelector('.microphone-icon-close');
            btnClose.onclick = () => {
                document.querySelector('.header__microphone-popup').style.display = 'none'         
            }

            window.addEventListener('mouseup',function(event){
                let contetnMIc = document.querySelector('.microphone-content');
                if(event.target !=  contetnMIc && event.target.parentNode !=  contetnMIc){
                    document.querySelector('.header__microphone-popup').style.display = 'none';
                }
          }); 

        var btnCreatVD = document.querySelector('.header__list--js-btn-1');
            btnCreatVD.onclick = (e) => {
                ListChild1.classList.toggle('header__list-child--active');
                ListChild2.classList.remove('header__list-child--active');
                notification.classList.remove('header__list-child-notification--active');

                if( ListChild1.classList.contains('header__list-child--active')){
                    icon[0].className = 'ri-video-add-fill header__item-icon';
                    icon[1].className = 'ri-grid-line header__item-icon';
                    icon[2].className = 'bx bx-bell header__item-icon';
                    // ri-movie-line header__list-child-icon
                    console.log(true)
                } else {
                    icon[0].className = 'ri-video-add-line header__item-icon';
                }
            }

        var btnGrid = document.querySelector('.header__list--js-btn-2');
            btnGrid.onclick = (e) => {
                ListChild2.classList.toggle('header__list-child--active');
                ListChild1.classList.remove('header__list-child--active');
                notification.classList.remove('header__list-child-notification--active');

                if(ListChild2.classList.contains('header__list-child--active')){      
                   icon[1].className = 'ri-grid-fill header__item-icon';
                   icon[0].className = 'ri-video-add-line header__item-icon';
                   icon[2].className = 'bx bx-bell header__item-icon';
                }else{
                   icon[1].className = 'ri-grid-line header__item-icon';
                }
            }
            
        var btnBell = document.querySelector('.header__list--js-btn-3');
            btnBell.onclick = () => {
                notification.classList.toggle('header__list-child-notification--active');
                ListChild1.classList.remove('header__list-child--active');
                ListChild2.classList.remove('header__list-child--active');

                if(notification.classList.contains('header__list-child-notification--active')){
                    icon[2].className = 'bx bxs-bell header__item-icon';
                    icon[0].className = 'ri-video-add-line header__item-icon';
                    icon[1].className = 'ri-grid-line header__item-icon';
                 }else{
                    icon[2].className = 'bx bx-bell header__item-icon';
                 }
            }
}

function navbarSide(){
    var followList = document.querySelector('.navbar-sider__list-follow');   

    var userFllowerData = [
        {
            id:1,
            avatar: 'https://yt3.ggpht.com/SzVM0OnLpNhiM0Z7xKTIEOxCOD0pEp_8Yt-pdUdO8coKqAqQA7djTMWr_kHlCnuEVKTct0ET6w=s88-c-k-c0x00ffffff-no-rj',
            nickName: 'I\'m Mary',
            status: 'list-state--live',
            status__Icon: '<i class=\'bx bx-station\'></i>'
        },
        {
            id:2,
            avatar: 'https://yt3.ggpht.com/ytc/AKedOLR6vCt7w4mOtpfn7dGVmobtUEuwBJdvlvBXGTr_iw=s88-c-k-c0x00ffffff-no-rj',
           nickName: 'Learn English with',
           status__Icon:'<i class=\'bx bx-station\'></i>',
           status: 'list-state--live',
        },
        {
            id:3,
            avatar: 'https://yt3.ggpht.com/vkZi355zHPXvfL70O9qnhmeoAGLZn6_Ca47yd7nUOb9GU9XTnROi2-_dblJdcz9JRhvf-uY7dA=s88-c-k-c0x00ffffff-no-rj',
           nickName: 'Fonoss - Kho sách nói nghe',
           status__Icon:'<i class=\'bx bxs-circle\'></i>',
           status: 'list-state--New-Post',
        },
        {
            id:4,
            avatar: 'https://yt3.ggpht.com/Bowu64_L_wQCKPCv-9Y_LWqSUd9sgzQ6nnsZa62LEhznDNk6lbkbEGgZPAL3FPi9EGj-qlPyGA=s88-c-k-c0x00ffffff-no-rj',
            nickName: 'F8 Officail',
            status__Icon:'<i class=\'bx bxs-circle\'></i>',
            status: 'list-state--New-Post',
        },
        {
            id:5,
            avatar: 'https://yt3.ggpht.com/i2BBir9626AxLzMHuyF1sx4WiHV-CqipS0EC9c2UklgT6bC0inZ-XvKVHgsjckxKl2_XjV_uyDk=s88-c-k-c0x00ffffff-no-rj',
            nickName: 'Đen Vâu Officail',
            status__Icon:''
        },
        {
            id:6,
            avatar: 'https://yt3.ggpht.com/ytc/AKedOLRAtRGK8CCzZf5j1AQ6mgee9XDjGMMlU-U-Pbrbwg=s88-c-k-c0x00ffffff-no-rj',
            nickName: 'Sol7 DCOD',
            status__Icon:''
        },
        {
            id:7,
            avatar: 'https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw=s88-c-k-c0x00ffffff-no-rj',
            nickName: 'freeCodeCamp.org',
            status__Icon: '',
        },
        {
            id:8,
            avatar: 'https://yt3.ggpht.com/_q52i8bUAEvcb7JR4e-eNTv23y2A_wg5sCz0NC0GrGtcw1CRMWJSOPVHUDh_bngD0q4gMvVeoA=s88-c-k-c0x00ffffff-no-rj',
            nickName: 'Visual Studio Code',
            status__Icon:'',
        },
        {
            id:9,
            avatar: 'https://yt3.ggpht.com/tBEPr-zTNXEeae7VZKSZYfiy6azzs9OHowq5ZvogJeHoVtKtEw2PXSwzMBKVR7W0MI7gyND8=s88-c-k-c0x00ffffff-no-rj',
            nickName: 'Programming with Mosh',
            status__Icon:''
        },
        {
            id:10,
            avatar: 'https://yt3.ggpht.com/ytc/AKedOLR-TP_Uc-gh9UWENj1CsWNVyxDRwCikaVARVwhY=s88-c-k-c0x00ffffff-no-rj',
            nickName: 'Lama Dev',
            status__Icon:''
        },
        {
            id:11,
            avatar: 'https://yt3.ggpht.com/ytc/AKedOLS0_8Eb99PwVL_DhysKXBT5zKiqbIhC5x2DnaaJmWQ=s88-c-k-c0x00ffffff-no-rj',
            nickName: 'Easy Fontend',
            status__Icon:'<i class=\'bx bxs-circle\'></i>',
            status: 'list-state--New-Post',
        },
        {
            id:12,
            avatar: 'https://yt3.ggpht.com/QLk0PHIv9cFYiq03xr6gL67shtQ0vRDaTAz5WSpwSU3IEB005aZLbOnJ4rnF732VY7fgFszKig=s88-c-k-c0x00ffffff-no-rj',
            nickName: 'evondev',
            status__Icon:'<i class=\'bx bxs-circle\'></i>',
            status: 'list-state--New-Post',
        },
        {
            id:13,
            avatar: 'https://yt3.ggpht.com/mivQftRzFE9dCmIsdoG4zRuLq9iPDmbKCmn9UFKEvCodWoHg4PhZAOi6k8fXXYiZN3J3St6Ydg=s88-c-k-c0x00ffffff-no-rj',
            nickName: 'CodingLab',
            status__Icon:''
        },
        {
            id:14,
            avatar: 'https://yt3.ggpht.com/ytc/AKedOLTST4S8KSU8IRIaj9_X4kTUR4KEnNtSE9lgXkBovw=s88-c-k-c0x00ffffff-no-rj',
            nickName: 'Easy Tutorials',
            status__Icon:''
        },
        {
            id:15,
            avatar: 'https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw=s88-c-k-c0x00ffffff-no-rj',
            nickName: 'Traversy Media',
            status__Icon:''
        },
        {
            id:16,
            avatar: 'https://yt3.ggpht.com/WB8m66eXH9BSgahLoh48FgSefJe66JlnIbT8Jv3R6B7O6guwCN_Dy4snBP-XsDwu4A3JCuZJsg=s88-c-k-c0x00ffffff-no-rj',
            nickName: 'Bedimcode',
            status__Icon:''
        },
        {
            id:17,
            avatar: 'https://yt3.ggpht.com/ytc/AKedOLT0oXy579pE7jrGdZT1Ys2YEGJKlna9nZj0otYm=s88-c-k-c0x00ffffff-no-rj',
            nickName: 'codeSTACKr',
            status__Icon:''
        },
        {
            id:18,
            avatar: 'https://yt3.ggpht.com/dVLgJesBv11fa8NzqhwZP3NGbXlfDE75jthjK9S7S9Nx2pIhPyoup9d4QfWXCeE094p7f4UAO7w=s88-c-k-c0x00ffffff-no-rj',
            nickName: 'Nodemy',
            status__Icon:'<i class=\'bx bxs-circle\'></i>',
            status: 'list-state--New-Post',
        },
        {
            id:19,
            avatar: 'https://yt3.ggpht.com/ytc/AKedOLTUfbbWnB32S6Z4kmZnhLAoLu3XJcaw9cdbaKbXuw=s88-c-k-c0x00ffffff-no-rj',
            nickName: 'Mr.Web Designer',
            status__Icon:'<i class=\'bx bxs-circle\'></i>',
            status: 'list-state--New-Post',
        },
        {
            id:20,
            avatar: 'https://yt3.ggpht.com/fGWtnhzScWaM5wgAMPP1JgmCwqgq3hh85eyK--6DaYfSJ9obKkK1ihx1QnWtKrviDrf4FmQ2PtM=s88-c-k-c0x00ffffff-no-rj',
            nickName: 'Practice English Speaking ',
            status__Icon:'<i class=\'bx bxs-circle\'></i>',
            status: 'list-state--New-Post',
        },
        {
            id:21,
            avatar: 'https://yt3.ggpht.com/fGWtnhzScWaM5wgAMPP1JgmCwqgq3hh85eyK--6DaYfSJ9obKkK1ihx1QnWtKrviDrf4FmQ2PtM=s88-c-k-c0x00ffffff-no-rj',
            nickName: 'Practice English Speaking ',
            status__Icon:'<i class=\'bx bxs-circle\'></i>',
            status: 'list-state--New-Post',
        }
    ];

    //  var showListBtn = document.querySelector('.js--btn-item-show');
    //  render html for follow-section
    function follower(){
        var html = '';
        for(let data of userFllowerData){
            html+= `
            <li class="list-follow__item">
                <a href="#" class="list-follow__item-link">
                    <span><img src="${data.avatar}" alt="follower avatar" class="list-follow__img-avatar"></span>
                    <span class="list-text">${data.nickName}</span>
                    <span class="list-state ${data.status}">${data.status__Icon}</span>
                </a>
             </li>

            `
        }
        var elementShow = `
        <li class="list-follow__item-show">
        <i class="ri-arrow-down-s-line list-follow__item-icon"></i>
        <span class="list-text">Show 72 more</span>
        </li> 
    `
        // Cần tạo thẻ div mới có thể selec tới một node//
        // appendChild chỉ có thể nối thêm một node không nối chuổi

        var elementShow__parent = document.createElement('div');
            elementShow__parent.innerHTML = elementShow;   

            followList.innerHTML = html + elementShow; 
            
            followList.querySelector('.list-follow__item-show').addEventListener('click', function(){
        
                followList.classList.toggle('js--show-more-follower');

            if(followList.classList.contains('js--show-more-follower')){
                document.querySelector('.list-follow__item-show .list-text').innerHTML = 'Show fewer';
                document.querySelector('.list-follow__item-show i').className = 'ri-arrow-up-s-line list-follow__item-icon'
            } else {
                document.querySelector('.list-follow__item-show .list-text').innerHTML = 'Show 72 more';
                document.querySelector('.list-follow__item-show i').className = 'ri-arrow-down-s-line list-follow__item-icon'
            }

        });
    }
    follower();
}

function sliderCarouselhandle(){

    let category_data = [...categoryData];
    var categoryContent = document.querySelector('.category-content');
    var html = '<div class="category-item category-item--active">all</div>';
        for(let getvalue of category_data){
            
            html += `       
            <div class="category-item">${getvalue.type}</div>
           `;
        }
        categoryContent.innerHTML = html;
    
    var carouselContent = document.querySelector('.category-content');
    let isDown = false;
    let startX;
    let scrollLeft;
    carouselContent.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - carouselContent.offsetLeft;
        scrollLeft = carouselContent.scrollLeft;
      });
      carouselContent.addEventListener('mouseleave', () => {
        isDown = false;
      });
      carouselContent.addEventListener('mouseup', (e) => {
        isDown = false;
      });
      carouselContent.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - carouselContent.offsetLeft;
        const walk = (x - startX) * 2; //scroll-fast
        carouselContent.scrollLeft = scrollLeft - walk;
        // console.log(walk);
      });  
      
      var btnLeft = document.querySelector('.carouse-btn--prev');
      var btnRight = document.querySelector('.carouse-btn--next');      
}

function showVideoSection(){

    const dataVideo = [...dataVD]
    var renderVideo = document.querySelector('.js-render-video');
    let htmlVideo = '';
        
    for(var getData of dataVideo){
        htmlVideo += `
            <div class="col c-12 m-4 l-3">
                <div class="show-video-single">
                <a href ="./listVideos/index.html?id=${getData.id}" class="show-video-single--link">    
                    <div class="show-video__image" style="background-image: url(${getData.bg__img});" >
                        <span class="show-video__run-time">1:18:53</span>
                        <span class="show-video__prompt-hover">Keep hovering to play</span>
                    </div>
                </a>
                    <div class="show-video-details">
                        <div class="show-video__details-body">
                            <span>
                                <img src="${getData.author__avatar}" alt="avatar of author" class="show-video__avatar">
                            </span>
                            <div class="show-video__details-infor">                              
                                <div class="show-video__btn-support-location">
                                <div class="btn-support-location-have-relative">
                                    <i class="ri-more-2-fill show-video__btn-icon"></i>
                                    <span class="click-btn"></span>
                                    <ul class="show-video__support-location"></ul>
                                    </div>
                                </div>
                                <a href ="./listVideos/index.html" class="show-video-single--link">  
                                <h3 class="show-video__title">${getData.title}</h3>
                                </a>
                                <span class="show-video__name-channel">${getData.name__channel}</span>
                                <div><span class="show-video__viewed">1M views</span><span class="show-video__date-post">13 days ago</span></div>                                       
                        </div>
                    
                        </div>
                        <div class="show-video__btn-area">
                            <i class='bx bx-time show-video__btn-icon-time'></i> WATCH LATER
                        </div>
                        <div class="show-video__btn-area">
                            <i class="ri-menu-unfold-fill show-video__btn-icon-add"></i>ADD TO QUEUE</div>
                        </div>
                </div>
            </div> 
        `
    }
    renderVideo.innerHTML = htmlVideo; 
}

// change page
let changePage = (el,type,fun) => {
    el.forEach((currentElement , index) => {
        currentElement.addEventListener(type,fun);
    })
}
changePage(document.querySelectorAll('.show-video-single'),'click', handleChangePage);

function handleChangePage(event){
    window.location.replace('http://127.0.0.1:5500/listVideos/index.html');
    event.currentTarget.style.border = ' 1px solid var(--gray-color-thin)';
    event.currentTarget.style.backgroundColor = 'var(--hover-color)'
    event.currentTarget.style.borderRadius = '5px';
    event.currentTarget.style.paddingBottom = '5px';
    event.currentTarget.stopPropagation();

}
