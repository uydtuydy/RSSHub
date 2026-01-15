module.exports = async (ctx) => {
    ctx.state.data = {
        title: '我的新 RSS 源',
        link: 'https://example.com',
        item: [
            {
                title: '测试文章1',
                link: 'https://example.com/1',
                pubDate: new Date().toUTCString(),
                description: '这是我的第一个路由生成的测试内容。',
            },
        ],
    };
};
