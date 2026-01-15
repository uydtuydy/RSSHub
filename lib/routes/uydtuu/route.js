// lib/routes/uydtuu/route.js

module.exports = async (ctx) => {
    // 这里是核心逻辑，先用一个简单的例子确保路由能跑通
    ctx.state.data = {
        title: '我的自定义RSS源', // RSS源的标题
        link: 'https://example.com',
        item: [
            {
                title: '测试文章标题',
                link: 'https://example.com/1',
                pubDate: new Date().toUTCString(),
                description: '这是一个用于测试的静态内容，证明路由已正常工作。',
            },
        ],
    };
};
