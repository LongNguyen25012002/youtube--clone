   
const dataVD = [
    {
        id:1,
        bg__img: 'https://i.ytimg.com/vi/Rrr-5-4wcEs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLALb1GXoVAOzMju-V3MzzdkDLOq0A',
        author__avatar: 'https://yt3.ggpht.com/HmAJCuCRMkG2eeLDwX2AuQJZoKd0sBe4mGqxBy0FsmaFDyRh1NxbIDOxDm_EaTvvYLIO2FWEDpg=s88-c-k-c0x00ffffff-no-rj',
        title: '  BINZ x TOULIVER - DON\'T BREAK MY HEART (OFFICIAL MV)',
        name__channel: 'Binz da potes',        
    },
    {
        id:2,
        bg__img: 'https://i.ytimg.com/vi/Yw9Ra2UiVLw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWRjVVItTNbyCeajdohw2CCljuDw',
        author__avatar: 'https://yt3.ggpht.com/ytc/AKedOLRYf6yMVKjilhkHsRAOmNOCFXJ_V92tLxf9d53t=s88-c-k-c0x00ffffff-no-rj',
        title: ' Chìm Sâu - RPT MCK (feat. Trung Trần) | Official Lyrics Video',
        name__channel: 'MCK // Nger',        
    },
    {
        id:3,
        bg__img: 'https://i.ytimg.com/vi/bwpZ2Ss3bVk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB8IbH45MjJc8JBSwfYFC4S6bWEvQ',
        author__avatar: 'https://yt3.ggpht.com/LDnFYHuEGtgEGKOnoBfpOrP_XYjMASuVtCsRGTGAa9oP1ByVdajBRoYpzEAgiHMUZK2BF6DR0LI=s88-c-k-c0x00ffffff-no-rj',
        title: ' Bảo Anh - Moodshow Tập 3 (Full) | Xin Lỗi, Một Ngày Mùa Đông, Yếu Đuối, Mặt Trời Của Em',
        name__channel: 'Bảo Anh',        
    },
    {
        id:4,
        bg__img: 'https://i.ytimg.com/vi/Oe421EPjeBE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgCDSpAmDl1IAEM1sfyLP7oQ8g2g',
        author__avatar: 'https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw=s68-c-k-c0x00ffffff-no-rj',
        title: 'freeCodeCamp.com',
        name__channel: 'freeCodeCamp.com',        
    },
    {
        id:5,
        bg__img: 'https://i.ytimg.com/vi/kUMe1FH4CHE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqNc5MbJb8x46bmw-87vRzzn2yBg',
        author__avatar: 'https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw=s68-c-k-c0x00ffffff-no-rj',
        title: '  BINZ x TOULIVER - DON\'T BREAK MY HEART (OFFICIAL MV)',
        name__channel: 'freeCodeCamp.com',        
    },
    {
        id:6,
        bg__img: 'https://i.ytimg.com/vi/scybnB9vYVQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCEO7OcI_sx_WfzoJugiYn9Hbb9w',
        author__avatar: 'https://yt3.ggpht.com/WB8m66eXH9BSgahLoh48FgSefJe66JlnIbT8Jv3R6B7O6guwCN_Dy4snBP-XsDwu4A3JCuZJsg=s68-c-k-c0x00ffffff-no-rj',
        title: 'Form validation - Phần 2',
        name__channel: 'F8 Official',        
    },
    {
        id:7,
        bg__img: 'https://i.ytimg.com/vi/lgo1CEPZoxg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvEWLoi7vQOJxWEDuS1NH-UrsgZQ',
        author__avatar: 'https://yt3.ggpht.com/WB8m66eXH9BSgahLoh48FgSefJe66JlnIbT8Jv3R6B7O6guwCN_Dy4snBP-XsDwu4A3JCuZJsg=s68-c-k-c0x00ffffff-no-rj',
        title: '  BINZ x TOULIVER - DON\'T BREAK MY HEART (OFFICIAL MV)',
        name__channel: 'Bedimcode',        
    },
    {
        id:8,
        bg__img: 'https://i.ytimg.com/vi/AzmdwZ6e_aM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDp13wxry2gYq60t0sfkC_MIALm4w',
        author__avatar: 'https://yt3.ggpht.com/Bowu64_L_wQCKPCv-9Y_LWqSUd9sgzQ6nnsZa62LEhznDNk6lbkbEGgZPAL3FPi9EGj-qlPyGA=s68-c-k-c0x00ffffff-no-rj',
        title: '  BINZ x TOULIVER - DON\'T BREAK MY HEART (OFFICIAL MV)',
        name__channel: 'F8 Offical',        
    },
    {
        id:9,
        bg__img: 'https://i.ytimg.com/vi/PxlKrOpvW74/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBlwSJ_HFuIVtZDVVTxMDZH48SLDA',
        author__avatar: 'https://yt3.ggpht.com/djdtXJfeK-YN5XPFN1LhQUAUKtKiNWpMcYKMLSS3qYUwhHU3fK2gTsyXu0xBvuqPiGy6SVLmrQ=s68-c-k-c0x00ffffff-no-rj',
        title: '  BINZ x TOULIVER - DON\'T BREAK MY HEART (OFFICIAL MV)',
        name__channel: 'Musci Clup',        
    },
    {
        id:10,
        bg__img: 'https://i.ytimg.com/vi/I4M5k-KTHek/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAw5PDeH2sDJu6PiQY0tpGbNUTrWA',
        author__avatar: 'https://yt3.ggpht.com/ytc/AKedOLRXEW9QDHyUxvkXinH9DNQRf7DdRDApOGEuharz=s88-c-k-c0x00ffffff-no-rj',
        title: ' P$mall ft. Sol7, Ben - SNOWDAY (Prod. AOQUADI)',
        name__channel: 'DC GanG Officical',        
    },
    {
        id:11,
        bg__img: 'https://i.ytimg.com/vi/RwpD29BBmWk/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdHluo9p3wiL4_9MHN3muTlUzSLQ',
        author__avatar: 'https://yt3.ggpht.com/QLk0PHIv9cFYiq03xr6gL67shtQ0vRDaTAz5WSpwSU3IEB005aZLbOnJ4rnF732VY7fgFszKig=s68-c-k-c0x00ffffff-no-rj',
        title: 'Viết chức năng ẩn hiển mật khẩu input với Javascript phần 2',
        name__channel: 'Evondev',        
    },
    {
        id:12,
        bg__img: 'https://i.ytimg.com/vi/GobshIuHA_Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAmSUkc3Dy7CxqBGJ0hEEtSCdcKvQ',
        author__avatar: 'https://yt3.ggpht.com/ytc/AKedOLTp9bJW_izra1BITuboTUch_oCZJRyZazvc0rECIA=s68-c-k-c0x00ffffff-no-rj',
        title: '  Viral Songs latest ♫ Acoustic Love Songs 2022 🍃 Chill Music cover of popular songs',
        name__channel: 'Fall in luv',        
    },
    {
        id:13,
        bg__img: 'https://i.ytimg.com/vi/zsQJWE9W-ME/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDzcu1DIH305QobGbLzVP5mCFzVPQ',
        author__avatar: 'https://yt3.ggpht.com/ytc/AKedOLSdk6yOXzgxyjc23-5B0gVc4JKfTSv6gtXXaEd3=s68-c-k-c0x00ffffff-no-rj',
        title: ' Tôi Là Ai Trong Em | Guitar Acoustic Cover | Thái Engg - Thắng Nguyễn by Thắng Nguyễn',
        name__channel: 'DC GanG Officical',      

    },
    {
        id:14,
        bg__img: 'https://i.ytimg.com/vi/xr2d_1h4U0Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB95DW4Fddh7eGlS7I8G8IvgIB9Nw',
        author__avatar: 'https://yt3.ggpht.com/Bowu64_L_wQCKPCv-9Y_LWqSUd9sgzQ6nnsZa62LEhznDNk6lbkbEGgZPAL3FPi9EGj-qlPyGA=s88-c-k-c0x00ffffff-no-rj',
        title: 'ClassList Property',
        name__channel: 'F8 Official',        
    },
    {
        id:15,
        bg__img: 'https://i.ytimg.com/vi/4MnDYpPJAfQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCObSRKzteJQpTG2aUQ1Othw3MrFg',
        author__avatar: 'https://yt3.ggpht.com/UAIOW5NLHyFRFW2DKjHbQ-7IujGNFRwQoM14g-2gyjBXRpxzpJEyBuIdIspPGOVUTKxAHBkn3SA=s68-c-k-c0x00ffffff-no-rj', 
        title: 'Đàm phán Nga và Ukraine có hướng tích cực',
        name__channel: 'VTV24',        
    },
    {
        id:16,
        bg__img: 'https://i.ytimg.com/vi/3P6jKsjkJcw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWTAeu61jV1xOFrhrIwnfmf1xV-g',
        author__avatar: 'https://yt3.ggpht.com/kD7YWRXSVtAnpt8b6g-A-v2RdlYX6NR1QdV6Lq-FlydTSruPbwZxJBs_Bn2JEZ_qsH0gwJ8zaKk=s68-c-k-c0x00ffffff-no-rj',
        title: 'Tiktok hits 2022 👑 Viral songs latest ~ Trending tiktok songs',
        name__channel: 'Deep Chill Mix',        
    },
];

const categoryData = [
    {
        id:1,
        type: "mixes"
    },
    {
        id:1,
        type: "music"
    },
    {
        id:1,
        type: "javascript"
    },
    {
        id:1,
        type: "php"
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