var categroyBar = document.querySelector('.category-bar-location');
var navbarSideCT = document.querySelector('.navbar-side');
var navbarListSection  = document.querySelector('.navbar-sider__section-list');
function javascriptHeader(){
    // set btn-click for button common
    var btnClick = document.querySelectorAll('.click-btn');
        function clickActive(){
            btnClick.forEach(function(elActive){
                elActive.addEventListener('mousedown',function(event){
                    this.classList.add('btn-down');
                })
            })

            btnClick.forEach(function(elActive){
                elActive.addEventListener('mouseup',function(event){
                    this.classList.remove('btn-down');
                })
            })
        }
        clickActive()

        var menu__btn = document.querySelector('.header__list--js-btn-menu');
        var ListChild1 = document.querySelector('.header__list-child-upVideo');
        var ListChild2 = document.querySelector('.header__list-child-gird');
        var notification = document.querySelector('.header__list-child-notification');
        var icon = document.querySelectorAll('.header__list-item .header__item-icon');

        // set btn riêng cho từng button
        menu__btn.addEventListener('click',function(){

            ListChild1.classList.remove('header__list-child--active');
            ListChild2.classList.remove('header__list-child--active');
            notification.classList.remove('header__list-child-notification--active');

            console.log('hello world');
                navbarListSection.classList.add('navbar-sider__section-list--active');
                navbarSideCT.classList.add('navbar-side--active');        


            // navbarSide.classList.toggle('navbar-side__hide-show');
            // categroyBar.classList.toggle('js--category-hide-navbarSide');

            // if(navbarSide.classList.contains('navbar-side__hide-show')){
            //     document.querySelector('.list-remote__item-link.list-remote__item-link--active').classList.remove('list-remote__item-link--active');
            // } else {
            //     document.querySelector('.list-remote__item-link').classList.add('list-remote__item-link--active');
            // }
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
javascriptHeader();

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
    //  render html for follow-section
    function follower(){
        var htmlFollower = '';
        for(let data of userFllowerData){
            htmlFollower += `
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

            followList.innerHTML = htmlFollower + elementShow; 
            
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

    var btnCloseNav = document.querySelector('.header__btn-menu--js-close');
        btnCloseNav.addEventListener('click',() => {
            document.querySelector('.navbar-sider__section-list.navbar-sider__section-list--active').classList.remove('navbar-sider__section-list--active');
            document.querySelector('.navbar-side.navbar-side--active').classList.remove('navbar-side--active');        
        })
}
navbarSide();

let detailsVD = [
    {
        id:1,
        title: "BINZ x TOULIVER - DON'T BREAK MY HEART (OFFICIAL MV)",
        video: '<iframe width="100%" height="530" src="https://www.youtube.com/embed/Rrr-5-4wcEs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> ',        
        link__relative: '<a href="#">#1 TRONG DANH MỤC ÂM NHẠC THỊNH HÀNH</a>',

        img__src: 'https://i.ytimg.com/vi/Rrr-5-4wcEs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLALb1GXoVAOzMju-V3MzzdkDLOq0A',
        time__VD: '4:43',
        name__channel: 'Binz da potes <i class="ri-checkbox-circle-fill"></i>',
    },
    {
        id:2,
        title: "Chìm Sâu - RPT MCK (feat. Trung Trần) | Official Lyrics Video",
        video: '<iframe width="100%" height="530" src="https://www.youtube.com/embed/Yw9Ra2UiVLw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        link__relative: '<a href="#">#6 TRONG DANH MỤC ÂM NHẠC THỊNH HÀNH</a>',

        img__src: 'https://i.ytimg.com/vi/Yw9Ra2UiVLw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWRjVVItTNbyCeajdohw2CCljuDw',
        time__VD: '3:27',
        name__channel: 'MCK // Nger <i class="ri-music-fill"></i>',

    },
    {
        id:3,
        title: "Bảo Anh - Moodshow Tập 3 (Full) | Xin Lỗi, Một Ngày Mùa Đông, Yếu Đuối, Mặt Trời Của Em",
        video: '<iframe width="100%" height="530" src="https://www.youtube.com/embed/bwpZ2Ss3bVk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        link__relative : '<a href="#">#BaoAnh </a><a href="#">#Moodshow</a><a href="#"> #popmusic</a>',

        img__src: 'https://i.ytimg.com/vi/bwpZ2Ss3bVk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB8IbH45MjJc8JBSwfYFC4S6bWEvQ',
        time__VD: '4:58',
        name__channel: 'Bảo Anh <i class="ri-music-fill"></i>',

    },
    {
        img__src:'https://i.ytimg.com/vi/Oe421EPjeBE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgCDSpAmDl1IAEM1sfyLP7oQ8g2g',
        
        id:4,
        title: "Node.js and Express.js - Full Course",
        video: '<iframe width="100%" height="530" src="https://www.youtube.com/embed/Oe421EPjeBE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        link__relative : '',
        time__VD: '1:54:43',
        name__channel: 'freeCodeCamp.com', 

    },
    {
        img__src:'https://i.ytimg.com/vi/kUMe1FH4CHE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqNc5MbJb8x46bmw-87vRzzn2yBg',
        
        id:5,
        title: "Learn HTML – Full Tutorial for Beginners (2022)",
        video: '<iframe width="100%" height="530" src="https://www.youtube.com/embed/kUMe1FH4CHE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        link__relative : '',
        time__VD: '1:31:27',
        name__channel: 'freeCodeCamp.com',        

    },
    {
        img__src:'https://i.ytimg.com/vi/scybnB9vYVQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCEO7OcI_sx_WfzoJugiYn9Hbb9w',
        
        id:6,
        title: "Form validation - Phần 2",
        video: '<iframe width="100%" height="530" src="https://www.youtube.com/embed/scybnB9vYVQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>',
        link__relative : '<a href="#">#hoclaptrinh </a><a href="#">#mienphi</a><a href="#">#frontend</a>',
        time__VD: '1:01:43',
        name__channel: 'F8 Official <i class="ri-checkbox-circle-fill"></i>',

    },
    {
        img__src:'https://i.ytimg.com/vi/i1cjVyIZCKs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuUJSPsQ8cZefGLB58f9bGRDNF9g',
        
        id:7,
        title: "JSX render Arrays | JSX FQA",
        video: '<iframe width="100%" height="530" src="https://www.youtube.com/embed/i1cjVyIZCKs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        link__relative : '<a href="#">#hoclaptrinh </a><a href="#">#mienphi</a><a href="#">#frontend</a>',
        time__VD: '7:31',
        name__channel: 'F8 Official <i class="ri-checkbox-circle-fill"></i>',        

    },
    {
        img__src:'https://i.ytimg.com/vi/lgo1CEPZoxg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvEWLoi7vQOJxWEDuS1NH-UrsgZQ',
        
        id:8,
        title: "Create a Responsive Halloween Website Design Using HTML CSS & JavaScript 🎃",
        video: '<iframe width="100%" height="530" src="https://www.youtube.com/embed/lgo1CEPZoxg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        link__relative : '<a href="#">#responsivewebsite </a><a href="#">#createresponsivewebsite</a><a href="#">#bedimcode</a>',
        time__VD: '44:47',
        name__channel: 'Bedimcode',

    },
    {
        img__src:'https://i.ytimg.com/vi/5RIFrZEjURA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDmyGsiUsf6F95TGYWY7xPdkry4XA',
        
        id:9,
        title: "Responsive Website Design Using HTML CSS And JavaScript 🥗 | Website Restaurant Light/Dark mode",
        video: '<iframe width="100%" height="530" src="https://www.youtube.com/embed/5RIFrZEjURA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        link__relative : '<a href="#">#responsive </a><a href="#">#website</a><a href="#">#htmlcss</a>',
        time__VD: '34:23',
        name__channel: 'Bedimcode',
          
    },
    {
        img__src:'https://i.ytimg.com/vi/c1xTDSIXit8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBEkvALdBMKt9AE9rTuhUOIViXFAw',
        
        id:10,
        title: "React E-Commerce App Design Tutorial | React Shopping Cart UI Design",
        video: '<iframe width="100%" height="530" src="https://www.youtube.com/embed/c1xTDSIXit8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        link__relative : '<a href="#">#Snowday </a><a href="#">#DCOD</a><a href="#">#Sol7</a>',
        time__VD: '1:42:32',
        name__channel: 'Lama Dev',

    },
    {
        img__src:'https://i.ytimg.com/vi/RwpD29BBmWk/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdHluo9p3wiL4_9MHN3muTlUzSLQ',
        
        id:11,
        title: "Viết chức năng ẩn hiển mật khẩu input với Javascript",
        video: '<iframe width="100%" height="530" src="https://www.youtube.com/embed/Sy75UyVkpUU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        link__relative : '',
        time__VD: '7:43',
        name__channel: 'Evondev',

    },
    {
        img__src:'https://i.ytimg.com/vi/FjHGZj2IjBk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBxIuivm0Rf4G_PclFt0FmBGBy4PA',
        
        id:12,
        title: "editation - Monoman .beautiful comment section relaxing music soothing relief",
        video: '<iframe width="100%" height="530" src="https://www.youtube.com/embed/FjHGZj2IjBk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        link__relative : '  <a href="#">#sleep</a><a href="#">#relaxing </a><a href="#">#study</a>',
        time__VD: '3:04:51',
        name__channel: 'NONOMAN', 

    },
    {
        img__src:'https://i.ytimg.com/vi/zsQJWE9W-ME/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDzcu1DIH305QobGbLzVP5mCFzVPQ',
        
        id:13,
        title: "Tôi Là Ai Trong Em | Guitar Acoustic Cover | Thái Engg - Thắng Nguyễn",
        video: '<iframe width="100%" height="530" src="https://www.youtube.com/embed/zsQJWE9W-ME" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        link__relative : '',
        time__VD: '2:73',
        name__channel: 'DC GanG Officical', 

    },
    {
        img__src:'https://i.ytimg.com/vi/ii1Ra_zLDIo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAF_IkPgOf8goI7XiVygSTVQaonFw',
        
        id:14,
        title: "Từ khóa \"this\" trong Javascript? Dễ hiểu cùng F8 nào!",
        video: '<iframe width="100%" height="530" src="https://www.youtube.com/embed/ii1Ra_zLDIo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        link__relative : '<a href="#">#hoclaptrinh </a><a href="#">#mienphi</a><a href="#">#frontend</a>',
        time__VD: '6:43',
        name__channel: 'F8 Official <i class="ri-checkbox-circle-fill"></i>', 
    },
    {
        img__src:'https://i.ytimg.com/vi/IMyDOj45USU/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCeB3KiaXAdoP6-JsaF24VJgsN7tg',
        
        id:15,
        title: "[Sách nói] Sống Đơn Giản Cho Mình Thanh Thản - Chương 1 | Shunmyo Masuno",
        video: '<iframe width="100%" height="530" src="https://www.youtube.com/embed/IMyDOj45USU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        link__relative : '<a href="#">#fonos</a><a href="#">#sáchnói</a><a href="#">#SốngĐơnGiảnChoMìnhThanhThản</a>',
        time__VD: '50:43',
        name__channel: 'Fonos - Kho sách nói bản quyền', 

    },
    {
        img__src:'https://i.ytimg.com/vi/8BUs-CPjr6c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARjAhUWNTx3B_FVpdMTyi3WO7PIA',
        
        id:16,
        title: "Tiktok hits 2022 👑 Viral songs latest ~ Trending tiktok songs",
        video: '<iframe width="100%" height="530" src="https://www.youtube.com/embed/8BUs-CPjr6c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        link__relative : '',
        time__VD: '1:20:28',
        name__channel: 'Deep Chill Mix',  

    },  
]

let sectionMainVD = document.querySelector('.play-video-section');
var params = new URLSearchParams(window.location.search);
const id = params.get("id");
var indexVideo = id;

let sectionShowVideo = (getVD) => {
    let html = `<div class="play-video__show-video">
                    ${getVD[indexVideo].video}
                    </div>
                    <div class="play-video__content">
                    <span class="play-video__common-type-link">
                    ${getVD[indexVideo].link__relative}
                    </span>
                    </div>
                    <h3 class="play-video__title">${getVD[indexVideo].title}</h3>`;
    sectionMainVD.innerHTML = html;
}
sectionShowVideo(detailsVD)

// section listVideo
let sectionListVideo = (getVD) => {
    let sectionListVD = document.querySelector('.section-listVideo-Choose');
    sectionListVD.innerHTML = getVD.map(dataVD => {
        const {img__src,title,time__VD,name__channel} = dataVD;
        return `
        <div href="" class="listVideo-Choose__content">
        <div class="image"><img src="${img__src}" alt="">
        <div class="listVideo-Choose__box">
        <span class="listVideo-Choose__user-select">
        <i class='bx bx-time-five listVideo-Choose__icon'></i>
        <p>Watch late</p>
        </span>
        <span class="listVideo-Choose__user-select">
            <i class="ri-indent-increase listVideo-Choose__icon"></i>
           <p>add to queue</p>
        </span>
        </div>
        <span class="listVideo-Choose__time-VD">${time__VD}</span>
        </div>
        <div class="listVideo-Choose__box-details">
            <h2 class="listVideo-Choose__title">${title}</h2>
            <p class="listVideo-Choose__name-channel">${name__channel}</p>
            <p class="listVideo-Choose__view-and-day-post">
           <span> 2.6M </span> <span>6 day ago</span></p>
        </div>
       </div>`
    }).join(' ');

}
sectionListVideo(detailsVD);

// handle select video
let selectVDbtn = document.querySelectorAll('.listVideo-Choose__content');
selectVDbtn.forEach((element,index) => {
    element.addEventListener('click', (e) => {
        indexVideo = index;
        sectionShowVideo(detailsVD)
        document.documentElement.scrollTop = 0;
    })
})

// xử lý lớp overlay
let overlay = document.querySelector('.overlay-navbar-side');
let Navbar__ = document.querySelector('.navbar-side');
overlay.addEventListener('mouseup',(evt) => {
    if(event.target !=  Navbar__  && event.target.parentNode !=  Navbar__ ){
            document.querySelector('.navbar-sider__section-list.navbar-sider__section-list--active').classList.remove('navbar-sider__section-list--active');
        }
})

function VD_details(){
    let authorUpdate_section = document.querySelector('.author-update-section');
    let btnShow = document.querySelector('.btn-show');
    let btnSub = document.querySelector('.channel__sub');
    let subTEXT = document.querySelector('.channel__sub p');
    let btnCancel = document.querySelector('.btn-cancel');
    let btnUnsub = document.querySelector('.btn-removeSub');
    let wrapRemoveSub = document.querySelector('.remove-sub');

    let subIndex = 0;

        btnShow.addEventListener('click', evt => {
            authorUpdate_section.classList.toggle('set-heigth');

            if(authorUpdate_section.classList.contains('set-heigth')){
               document.querySelector('.btn-show').innerHTML = 'Show less';
               console.log('show less')
            } else {
               document.querySelector('.btn-show').innerHTML = 'Show more';
               console.log('show more')
            }      
        })
       
        btnSub.addEventListener('click', evt => {
            subIndex++;
            console.log(subIndex);
            if(subIndex == 1){
                evt.currentTarget.style.background = "var(--hover-color)";
                evt.currentTarget.style.color = "var(--gray-text)";
                subTEXT.textContent = "SUBSCRIBED";
            }

            if(subIndex == 2){               
                subIndex = 0;
                wrapRemoveSub.style.display = "flex";
            }
            evt.stopPropagation()
        })

        btnCancel.onclick = () => {
            wrapRemoveSub.style.display = "none";
        }

        btnUnsub.onclick = () => {
            subTEXT.textContent = "SUBSCRIBE";
            btnSub.style.background = "#cc0000";
            btnSub.style.color = "#fff";
            wrapRemoveSub.style.display = "none";
        }
}
VD_details()

function comment(){
    let commetWrapCancel = document.querySelector('.comments-cancel-wrap');
    let input = document.querySelector('.input-comment');
    let btnCancelCM = document.querySelector('.js-btn-cancel')
    input.addEventListener('click', () => {
        commetWrapCancel.style.display = 'flex';
    })
    btnCancelCM.onclick = () => {
        commetWrapCancel.style.display = "none";
    } 
}
comment()