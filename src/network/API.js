import request from '@/network/request'

/**
 * {
 * "data": [
 * {
 * "desc": "我们支持订阅啦~",
 * "id": 30,
 * "imagePath": "https://www.wanandroid.com/blogimgs/42da12d8-de56-4439-b40c-eab66c227a4b.png",
 * "isVisible": 1,
 * "order": 2,
 * "title": "我们支持订阅啦~",
 * "type": 0,
 * "url": "https://www.wanandroid.com/blog/show/3352"
 * },
 * {
 * "desc": "",
 * "id": 6,
 * "imagePath": "https://www.wanandroid.com/blogimgs/62c1bd68-b5f3-4a3c-a649-7ca8c7dfabe6.png",
 * "isVisible": 1,
 * "order": 1,
 * "title": "我们新增了一个常用导航Tab~",
 * "type": 1,
 * "url": "https://www.wanandroid.com/navi"
 * },
 * {
 * "desc": "一起来做个App吧",
 * "id": 10,
 * "imagePath": "https://www.wanandroid.com/blogimgs/50c115c2-cf6c-4802-aa7b-a4334de444cd.png",
 * "isVisible": 1,
 * "order": 1,
 * "title": "一起来做个App吧",
 * "type": 1,
 * "url": "https://www.wanandroid.com/blog/show/2"
 * }
 * ],
 * "errorCode": 0,
 * "errorMsg": ""
 * }
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const getBannerImageList = function () {
    return request.get('/banner/json', {
        // 请求参数
        params: {}
    })
}

/**
 * {
 * "data": [
 *    {
 * "adminAdd": false,
 * "apkLink": "",
 * "audit": 1,
 * "author": "xiaoyang",
 * "canEdit": false,
 * "chapterId": 440,
 * "chapterName": "官方",
 * "collect": false,
 * "courseId": 13,
 * "desc": "<p>查阅资料，会发现 Android 4.0开始则默认开启硬件加速；</p>\r\n<p>另外再查阅资料，还会发现：</p>\r\n<pre><code>在Android中，可以四给不同层次上开启硬件加速：\r\n\r\n1、Application\r\n\r\n&lt;applicationandroid:hardwareAccelerated=&quot;true&quot;&gt;\r\n\r\n2、Activity\r\n\r\n&lt;activityandroid:hardwareAccelerated=&quot;true&quot;&gt;\r\n\r\n3、Window\r\n\r\ngetWindow().setFlags(WindowManager.LayoutParams.FLAG_HARDWARE_ACCELERATED,WindowManager.LayoutParams.FLAG_HARDWARE_ACCELERATED);\r\n\r\n4、View\r\n\r\nview.setLayerType(View.LAYER_TYPE_SOFTWARE,null);\r\n</code></pre><p>那么问题来了：</p>\r\n<ol>\r\n<li>官方声明 4.0 后默认开启硬件加速指的是application全局hardwareAccelerated=&quot;true&quot;吗？</li>\r\n<li>如果1 不是，那么默认开启硬件加速指的是什么？与hardwareAccelerated=&quot;true&quot;有什么区别？</li>\r\n<li>如果不手动设置hardwareAccelerated，默认读取到的view LayerType是哪个？是否算是开了硬件加速？</li>\r\n</ol>",
 * "descMd": "",
 * "envelopePic": "",
 * "fresh": false,
 * "host": "",
 * "id": 24990,
 * "isAdminAdd": false,
 * "link": "https://www.wanandroid.com/wenda/show/24990",
 * "niceDate": "2022-11-20 12:34",
 * "niceShareDate": "2022-11-20 12:34",
 * "origin": "",
 * "prefix": "",
 * "projectLink": "",
 * "publishTime": 1668918886000,
 * "realSuperChapterId": 439,
 * "selfVisible": 0,
 * "shareDate": 1668918868000,
 * "shareUser": "",
 * "superChapterId": 440,
 * "superChapterName": "问答",
 * "tags": [
 * {
 * "name": "本站发布",
 * "url": "/article/list/0?cid=440"
 * },
 * {
 * "name": "问答",
 * "url": "/wenda"
 * }
 * ],
 * "title": "每日一问 | Android 默认开启硬件加速与设置hardwareAccelerated是一回事吗？",
 * "type": 1,
 * "userId": 2,
 * "visible": 1,
 * "zan": 3
 * }
 * ],
 * "errorCode": 0,
 * "errorMsg": ""
 * }
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const getTopArticle = function () {
    return request.get('/article/top/json', {
        // 请求参数
        params: {}
    })
}

/**
 * {
 * "data": {
 * "curPage": 1,
 * "datas": [
 *     {
 * "adminAdd": false,
 * "apkLink": "",
 * "audit": 1,
 * "author": "",
 * "canEdit": false,
 * "chapterId": 60,
 * "chapterName": "Android Studio相关",
 * "collect": false,
 * "courseId": 13,
 * "desc": "",
 * "descMd": "",
 * "envelopePic": "",
 * "fresh": false,
 * "host": "",
 * "id": 12871,
 * "isAdminAdd": false,
 * "link": "https://juejin.im/post/5e94815551882573af79b2a0",
 * "niceDate": "2020-04-14 00:05",
 * "niceShareDate": "2020-04-13 23:58",
 * "origin": "",
 * "prefix": "",
 * "projectLink": "",
 * "publishTime": 1586793921000,
 * "realSuperChapterId": 150,
 * "selfVisible": 0,
 * "shareDate": 1586793515000,
 * "shareUser": "鸿洋",
 * "superChapterId": 60,
 * "superChapterName": "开发环境",
 * "tags": [],
 * "title": "数据库还可以这么看？（Android Studio 4.1 新特性）",
 * "type": 0,
 * "userId": 2,
 * "visible": 1,
 * "zan": 0
 * }
 * ],
 * "offset": 0,
 * "over": false,
 * "pageCount": 3,
 * "size": 20,
 * "total": 41
 * },
 * "errorCode": 0,
 * "errorMsg": ""
 * }
 * @param _page
 * @param _cid
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const getTreeArticle = function (_page, _cid) {
    return request.get('/article/list/' + _page + '/json?cid=' + _cid, {
        // 请求参数
        params: {}
    })
}


/**
 * {
 * "data": [
 * {
 * "id": 6,
 * "link": "",
 * "name": "面试",
 * "order": 1,
 * "visible": 1
 * },
 * {
 * "id": 9,
 * "link": "",
 * "name": "Studio3",
 * "order": 1,
 * "visible": 1
 * },
 * {
 * "id": 5,
 * "link": "",
 * "name": "动画",
 * "order": 2,
 * "visible": 1
 * },
 * {
 * "id": 1,
 * "link": "",
 * "name": "自定义View",
 * "order": 3,
 * "visible": 1
 * },
 * {
 * "id": 2,
 * "link": "",
 * "name": "性能优化 速度",
 * "order": 4,
 * "visible": 1
 * },
 * {
 * "id": 3,
 * "link": "",
 * "name": "gradle",
 * "order": 5,
 * "visible": 1
 * },
 * {
 * "id": 4,
 * "link": "",
 * "name": "Camera 相机",
 * "order": 6,
 * "visible": 1
 * },
 * {
 * "id": 7,
 * "link": "",
 * "name": "代码混淆 安全",
 * "order": 7,
 * "visible": 1
 * },
 * {
 * "id": 8,
 * "link": "",
 * "name": "逆向 加固",
 * "order": 8,
 * "visible": 1
 * }
 * ],
 * "errorCode": 0,
 * "errorMsg": ""
 * }
 */
// export const getSearchHotKeys = function () {
//     return request.get('/hotkey/json', {
//         params: {}
//     })
// }


/**
 * {
 * "data": [
 * {
 * "category": "源码",
 * "icon": "",
 * "id": 22,
 * "link": "https://www.androidos.net.cn/sourcecode",
 * "name": "androidos",
 * "order": 11,
 * "visible": 1
 * },
 * {},
 * {},
 * {},
 * {},
 * {},
 * {},
 * {},
 * {},
 * {},
 * {
 * "category": "仓库",
 * "icon": "",
 * "id": 26,
 * "link": "https://www.wanandroid.com/maven_pom/index",
 * "name": "google",
 * "order": 22,
 * "visible": 1
 * },
 * {
 * "category": "仓库",
 * "icon": "",
 * "id": 34,
 * "link": "https://mvnrepository.com/artifact/com.google.code.gson/gson",
 * "name": "maven",
 * "order": 23,
 * "visible": 1
 * },
 * {
 * "category": "博客",
 * "icon": "",
 * "id": 1,
 * "link": "http://blog.csdn.net/lmj623565791",
 * "name": "鸿洋",
 * "order": 31,
 * "visible": 1
 * },
 * {
 * "category": "博客",
 * "icon": "",
 * "id": 2,
 * "link": "http://blog.csdn.net/guolin_blog",
 * "name": "郭霖",
 * "order": 32,
 * "visible": 1
 * },
 * {
 * "category": "博客",
 * "icon": "",
 * "id": 16,
 * "link": "https://github.com/android-cn/android-dev-com",
 * "name": "国外大牛",
 * "order": 33,
 * "visible": 1
 * },
 * {
 * "category": "博客",
 * "icon": "",
 * "id": 17,
 * "link": "http://www.wanandroid.com/article/list/0?cid=176",
 * "name": "国内大牛",
 * "order": 34,
 * "visible": 1
 * },
 * {
 * "category": "博客",
 * "icon": "",
 * "id": 35,
 * "link": "https://github.com/xitu/gold-miner/blob/master/android.md",
 * "name": "外文翻译",
 * "order": 35,
 * "visible": 1
 * },
 * {
 * "category": "技术站",
 * "icon": "",
 * "id": 6,
 * "link": "https://juejin.im/timeline/android",
 * "name": "掘金",
 * "order": 41,
 * "visible": 1
 * },
 * {
 * "category": "技术站",
 * "icon": "",
 * "id": 7,
 * "link": "https://toutiao.io/",
 * "name": "开发者头条",
 * "order": 42,
 * "visible": 1
 * },
 * {
 * "category": "技术站",
 * "icon": "",
 * "id": 8,
 * "link": "https://segmentfault.com/t/android",
 * "name": "segmentfault",
 * "order": 43,
 * "visible": 1
 * },
 * {
 * "category": "工具",
 * "icon": "",
 * "id": 50,
 * "link": "https://www.wanandroid.com/tools/bejson",
 * "name": "Json格式化",
 * "order": 51,
 * "visible": 1
 * },
 * {
 * "category": "工具",
 * "icon": "",
 * "id": 51,
 * "link": "https://www.wanandroid.com/tools/decode",
 * "name": "Url decode",
 * "order": 52,
 * "visible": 1
 * },
 * {
 * "category": "工具",
 * "icon": "",
 * "id": 52,
 * "link": "https://www.wanandroid.com/tools/base64",
 * "name": "Base64",
 * "order": 53,
 * "visible": 1
 * },
 * {
 * "category": "工具",
 * "icon": "",
 * "id": 53,
 * "link": "https://www.wanandroid.com/tools/digit",
 * "name": "md5",
 * "order": 54,
 * "visible": 1
 * },
 * {
 * "category": "工具",
 * "icon": "",
 * "id": 54,
 * "link": "https://www.wanandroid.com/tools/color",
 * "name": "取色器",
 * "order": 55,
 * "visible": 1
 * },
 * {
 * "category": "工具",
 * "icon": "",
 * "id": 10,
 * "link": "http://www.androiddevtools.cn/",
 * "name": "androiddevtools",
 * "order": 59,
 * "visible": 1
 * },
 * {
 * "category": "面试",
 * "icon": "",
 * "id": 12,
 * "link": "http://www.wanandroid.com/article/list/0?cid=73",
 * "name": "Android面试相关",
 * "order": 71,
 * "visible": 1
 * },
 * {
 * "category": "Git",
 * "icon": "",
 * "id": 13,
 * "link": "https://learngitbranching.js.org/",
 * "name": "Git在线可视化学习",
 * "order": 80,
 * "visible": 1
 * },
 * {
 * "category": "Kotlin",
 * "icon": "",
 * "id": 40,
 * "link": "https://fabiomsr.github.io/from-java-to-kotlin/",
 * "name": "java-to-kotlin",
 * "order": 99,
 * "visible": 1
 * },
 * {
 * "category": "项目",
 * "icon": "",
 * "id": 4,
 * "link": "https://github.com/trending/java",
 * "name": "热门开源",
 * "order": 888,
 * "visible": 1
 * },
 * {
 * "category": "项目",
 * "icon": "",
 * "id": 29,
 * "link": "https://github.com/topics/android?l=java&amp;o=desc&amp;s=updated",
 * "name": "最新开源",
 * "order": 888,
 * "visible": 1
 * },
 * {
 * "category": "设计",
 * "icon": "",
 * "id": 27,
 * "link": "https://domchristie.github.io/turndown/",
 * "name": "html2markdown",
 * "order": 998,
 * "visible": 1
 * },
 * {
 * "category": "设计",
 * "icon": "",
 * "id": 19,
 * "link": "http://md.aclickall.com/",
 * "name": "md在线编辑器",
 * "order": 999,
 * "visible": 1
 * },
 * {
 * "category": "设计",
 * "icon": "",
 * "id": 20,
 * "link": "https://unsplash.com/",
 * "name": "无版权素材网站",
 * "order": 999,
 * "visible": 1
 * },
 * {
 * "category": "设计",
 * "icon": "",
 * "id": 23,
 * "link": "https://www.fotor.com.cn/",
 * "name": "素材设计",
 * "order": 999,
 * "visible": 1
 * },
 * {
 * "category": "简历",
 * "icon": "",
 * "id": 42,
 * "link": "https://resumd.t9t.io/",
 * "name": "markdown简历",
 * "order": 999,
 * "visible": 1
 * },
 * {
 * "category": "设计",
 * "icon": "",
 * "id": 43,
 * "link": "https://www.maliquankai.com/designnav/",
 * "name": "设计资源",
 * "order": 999,
 * "visible": 1
 * },
 * {
 * "category": "设计",
 * "icon": "",
 * "id": 32,
 * "link": "http://inloop.github.io/interpolator/",
 * "name": "在线调试动画",
 * "order": 1000,
 * "visible": 1
 * },
 * {
 * "category": "设计",
 * "icon": "",
 * "id": 31,
 * "link": "https://tool.gifhome.com/compress/",
 * "name": "gif压缩",
 * "order": 4444,
 * "visible": 1
 * }
 * ],
 * "errorCode": 0,
 * "errorMsg": ""
 * }
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const getFrequentWebsite = function () {
    return request.get('/friend/json', {
        params: {}
    })
}

