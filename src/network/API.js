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

