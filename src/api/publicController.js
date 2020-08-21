import svgCaptcha from 'svg-captcha'

class PublicController {
    constructor() {
    }

    async getCaptcha(ctx) {
        const newCaptcha = svgCaptcha.create({
            size: 4,
            ignoreChars: '0o1i', //过滤掉一些字符，例如0o1i
            noise: Math.floor(Math.random() * 5), //噪声线数
            color: true, //字符将具有不同的颜色而不是灰色，如果设置了背景选项，则为true
            width: 120,
            height: 38
            // background: '＃f2f2f2'// SVG图片的背景颜色
        })
        ctx.body = {
            code: 0,
            message: '请求成功',
            data: newCaptcha.data
        }
    }
}

export default new PublicController()
