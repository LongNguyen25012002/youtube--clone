   
const dataVD = [
    {
        id:0,
        bg__img: 'https://i.ytimg.com/vi/Rrr-5-4wcEs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLALb1GXoVAOzMju-V3MzzdkDLOq0A',
        author__avatar: 'https://yt3.ggpht.com/HmAJCuCRMkG2eeLDwX2AuQJZoKd0sBe4mGqxBy0FsmaFDyRh1NxbIDOxDm_EaTvvYLIO2FWEDpg=s88-c-k-c0x00ffffff-no-rj',
        title: '  BINZ x TOULIVER - DON\'T BREAK MY HEART (OFFICIAL MV)',
        name__channel: 'Binz da potes <i class="ri-checkbox-circle-fill"></i>',    
        type:'music'    
    },
    {
        id:1,
        bg__img: 'https://i.ytimg.com/vi/Yw9Ra2UiVLw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWRjVVItTNbyCeajdohw2CCljuDw',
        author__avatar: 'https://yt3.ggpht.com/ytc/AKedOLRYf6yMVKjilhkHsRAOmNOCFXJ_V92tLxf9d53t=s88-c-k-c0x00ffffff-no-rj',
        title: ' Chìm Sâu - RPT MCK (feat. Trung Trần) | Official Lyrics Video',
        name__channel: 'MCK // Nger <i class="ri-music-fill"></i>', 
        type:'music'         
    },
    {
        id:2,
        bg__img: 'https://i.ytimg.com/vi/bwpZ2Ss3bVk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB8IbH45MjJc8JBSwfYFC4S6bWEvQ',
        author__avatar: 'https://yt3.ggpht.com/LDnFYHuEGtgEGKOnoBfpOrP_XYjMASuVtCsRGTGAa9oP1ByVdajBRoYpzEAgiHMUZK2BF6DR0LI=s88-c-k-c0x00ffffff-no-rj',
        title: ' Bảo Anh - Moodshow Tập 3 (Full) | Xin Lỗi, Một Ngày Mùa Đông, Yếu Đuối, Mặt Trời Của Em',
        name__channel: 'Bảo Anh <i class="ri-music-fill"></i>',
        type:'music'         
    },
    {
        id:3,
        bg__img: 'https://i.ytimg.com/vi/Oe421EPjeBE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgCDSpAmDl1IAEM1sfyLP7oQ8g2g',
        author__avatar: 'https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw=s68-c-k-c0x00ffffff-no-rj',
        title: 'Node.js and Express.js - Full Course',
        name__channel: 'freeCodeCamp.com <i class="ri-checkbox-circle-fill"></i>',        
    },
    {
        id:4,
        bg__img: 'https://i.ytimg.com/vi/kUMe1FH4CHE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqNc5MbJb8x46bmw-87vRzzn2yBg',
        author__avatar: 'https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw=s68-c-k-c0x00ffffff-no-rj',
        title: ' Learn HTML – Full Tutorial for Beginners (2022)',
        name__channel: 'freeCodeCamp.com <i class="ri-checkbox-circle-fill"></i>',        
    },
    {
        id:5,
        bg__img: 'https://i.ytimg.com/vi/scybnB9vYVQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCEO7OcI_sx_WfzoJugiYn9Hbb9w',
        author__avatar: 'https://yt3.ggpht.com/Bowu64_L_wQCKPCv-9Y_LWqSUd9sgzQ6nnsZa62LEhznDNk6lbkbEGgZPAL3FPi9EGj-qlPyGA=s68-c-k-c0x00ffffff-no-rj',
        title: 'Form validation - Phần 2',
        name__channel: 'F8 Official',        
    },
    {
        id:6,
        bg__img: 'https://i.ytimg.com/vi/i1cjVyIZCKs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuUJSPsQ8cZefGLB58f9bGRDNF9g',
        author__avatar: 'https://yt3.ggpht.com/Bowu64_L_wQCKPCv-9Y_LWqSUd9sgzQ6nnsZa62LEhznDNk6lbkbEGgZPAL3FPi9EGj-qlPyGA=s68-c-k-c0x00ffffff-no-rj',
        title: '  JSX render Arrays | JSX FQA',
        name__channel: 'F8 Official',        
    },
    {
        id:7,
        bg__img: 'https://i.ytimg.com/vi/lgo1CEPZoxg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvEWLoi7vQOJxWEDuS1NH-UrsgZQ',
        author__avatar: ' https://yt3.ggpht.com/WB8m66eXH9BSgahLoh48FgSefJe66JlnIbT8Jv3R6B7O6guwCN_Dy4snBP-XsDwu4A3JCuZJsg=s68-c-k-c0x00ffffff-no-rj',
        title: ' Create a Responsive Halloween Website Design Using HTML CSS & JavaScript 🎃',
        name__channel: 'Bedimcode',        
    },
    {
        id:8,
        bg__img: 'https://i.ytimg.com/vi/5RIFrZEjURA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDmyGsiUsf6F95TGYWY7xPdkry4XA',
        author__avatar: 'https://yt3.ggpht.com/WB8m66eXH9BSgahLoh48FgSefJe66JlnIbT8Jv3R6B7O6guwCN_Dy4snBP-XsDwu4A3JCuZJsg=s68-c-k-c0x00ffffff-no-rj',
        title: 'Responsive Website Design Using HTML CSS And JavaScript 🥗 | Website Restaurant Light/Dark mode',
        name__channel: 'Bedimcode',        
    },
    {
        id:9,
        bg__img: 'https://i.ytimg.com/vi/c1xTDSIXit8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBEkvALdBMKt9AE9rTuhUOIViXFAw',
        author__avatar: 'https://yt3.ggpht.com/ytc/AKedOLR-TP_Uc-gh9UWENj1CsWNVyxDRwCikaVARVwhY=s48-c-k-c0x00ffffff-no-rj',
        title: 'React E-Commerce App Design Tutorial | React Shopping Cart UI Design',
        name__channel: 'Lama Dev',        
    },
    {
        id:10,
        bg__img: 'https://i.ytimg.com/vi/RwpD29BBmWk/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdHluo9p3wiL4_9MHN3muTlUzSLQ',
        author__avatar: 'https://yt3.ggpht.com/QLk0PHIv9cFYiq03xr6gL67shtQ0vRDaTAz5WSpwSU3IEB005aZLbOnJ4rnF732VY7fgFszKig=s68-c-k-c0x00ffffff-no-rj',
        title: 'Viết chức năng ẩn hiển mật khẩu input với Javascript phần 2',
        name__channel: 'Evondev',        
    },
    {
        id:11,
        bg__img: 'https://i.ytimg.com/vi/FjHGZj2IjBk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBxIuivm0Rf4G_PclFt0FmBGBy4PA',
        author__avatar: 'https://yt3.ggpht.com/ytc/AKedOLRukfY1d1oYOASdFqTaujBHrbCealBHy5qht_7a=s88-c-k-c0x00ffffff-no-rj',
        name__channel: 'NONOMAN', 
        title: 'editation - Monoman .beautiful comment section relaxing music soothing relief',       
    },
    {
        id:12,
        bg__img: 'https://i.ytimg.com/vi/zsQJWE9W-ME/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDzcu1DIH305QobGbLzVP5mCFzVPQ',
        author__avatar: 'https://yt3.ggpht.com/ytc/AKedOLSdk6yOXzgxyjc23-5B0gVc4JKfTSv6gtXXaEd3=s68-c-k-c0x00ffffff-no-rj',
        title: ' Tôi Là Ai Trong Em | Guitar Acoustic Cover | Thái Engg - Thắng Nguyễn by Thắng Nguyễn',
        name__channel: 'DC GanG Officical',      

    },
    {
        id:13,
        bg__img: 'https://i.ytimg.com/vi/ii1Ra_zLDIo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAF_IkPgOf8goI7XiVygSTVQaonFw',
        author__avatar: 'https://yt3.ggpht.com/Bowu64_L_wQCKPCv-9Y_LWqSUd9sgzQ6nnsZa62LEhznDNk6lbkbEGgZPAL3FPi9EGj-qlPyGA=s88-c-k-c0x00ffffff-no-rj',
        title: 'Từ khóa "this" trong Javascript? Dễ hiểu cùng F8 nào!',
        name__channel: 'F8 Official',        
    },
    {
        id:14,
        bg__img: 'https://i.ytimg.com/vi/IMyDOj45USU/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCeB3KiaXAdoP6-JsaF24VJgsN7tg',
        author__avatar: 'https://yt3.ggpht.com/vkZi355zHPXvfL70O9qnhmeoAGLZn6_Ca47yd7nUOb9GU9XTnROi2-_dblJdcz9JRhvf-uY7dA=s68-c-k-c0x00ffffff-no-rj', 
        title: '[Sách nói] Sống Đơn Giản Cho Mình Thanh Thản - Chương 1 | Shunmyo Masuno',
        name__channel: 'Fonos - Kho sách nói bản quyền',        
    },
    {
        id:15,
        bg__img: 'https://i.ytimg.com/vi/8BUs-CPjr6c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARjAhUWNTx3B_FVpdMTyi3WO7PIA',
        author__avatar: 'https://yt3.ggpht.com/kD7YWRXSVtAnpt8b6g-A-v2RdlYX6NR1QdV6Lq-FlydTSruPbwZxJBs_Bn2JEZ_qsH0gwJ8zaKk=s68-c-k-c0x00ffffff-no-rj',
        title: 'Tiktok hits 2022 👑 Viral songs latest ~ Trending tiktok songs',
        name__channel: 'Deep Chill Mix',        
    },
];

const categoryData = [
    {
        id:1,
        type: "mixes",
        title: "mixes"
    },
    {
        id:1,
        type: "music",
        title: "music"
    },
    {
        id:1,
        type: "javascript",
        title: "javascript"
    },
    {
        id:1,
        type: "php",
        title: "php"
    },
    {
        id:1,
        type: "music"
    },{
        id:1,
        type: "css"
    },
    {
        id:1,
        type: "html"
    },
    {
        id:1,
        type: "nodejs"
    },
    {
        id:1,
        type: "playlist"
    },
    {
        id:1,
        type: "audiobook"
    },
    {
        id:1,
        type: "humans"
    },
    {
        id:1,
        type: "visua studio code"
    },
    {
        id:1,
        type: "lo-fi"
    },
    {
        id:1,
        type: "chill-out music"
    },
    {
        id:1,
        type: "live"
    },
    {
        id:1,
        type: "python"
    },
    {
        id:1,
        type: "rencently uploaded"
    },
    {
        id:1,
        type: "new to you"
    },
    {
        id:1,
        type: "History"
    }
];

export {dataVD,categoryData}