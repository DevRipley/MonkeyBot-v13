const { Captcha } = require("captcha-canvas");
const { MessageAttachment } = require("discord.js")

module.exports = { 
    name: "captcha",
    execute: async (client, message, args) =>{
        const captcha = new Captcha();
        captcha.async = true
        captcha.addDecoy(); 
        captcha.drawTrace(); 
        captcha.drawCaptcha();

        const captchaAttachment = new MessageAttachment(
            await captcha.png,
            "captcha.png"
        );

        message.channel.send({
            files: [captchaAttachment],
            content: `Code: ${captcha.text}`,
        });
    }
}