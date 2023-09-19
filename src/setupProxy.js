const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (WrapComponent) => {
    WrapComponent.use(
        "/hyundai_bbs",
        createProxyMiddleware({
            "target":"http://localhost:8080/portfolio/team_project2",
            changeOrigin: true
        })
    )
    WrapComponent.use(
        "/hyundai_user",
        createProxyMiddleware({
            "target":"http://localhost:8080/portfolio/team_project2",
            changeOrigin: true
        })
    )   
}