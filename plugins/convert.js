const _0x2f4f24 = _0x34fd;
(function (_0x1ae6c8, _0x267c22) {
    const _0x329925 = _0x34fd,
        _0x2822fb = _0x1ae6c8();
    while (!![]) {
        try {
            const _0x271b2c = parseInt(_0x329925(0x148)) / 0x1 + parseInt(_0x329925(0x159)) / 0x2 + -parseInt(_0x329925(0x11f)) / 0x3 * (-parseInt(_0x329925(0x11d)) / 0x4) + -parseInt(_0x329925(0x155)) / 0x5 * (-parseInt(_0x329925(0x140)) / 0x6) + parseInt(_0x329925(0x13b)) / 0x7 * (parseInt(_0x329925(0x11c)) / 0x8) + parseInt(_0x329925(0x135)) / 0x9 * (parseInt(_0x329925(0x125)) / 0xa) + parseInt(_0x329925(0x14c)) / 0xb * (-parseInt(_0x329925(0x141)) / 0xc);
            if (_0x271b2c === _0x267c22) break;
            else _0x2822fb['push'](_0x2822fb['shift']());
        } catch (_0x5b87c3) {
            _0x2822fb['push'](_0x2822fb['shift']());
        }
    }
}(_0x41f1, 0xc2f44));
function _0x34fd(_0x57593e, _0x3f650c) {
    const _0x41f164 = _0x41f1();
    return _0x34fd = function (_0x34fdaa, _0x4504f8) {
        _0x34fdaa = _0x34fdaa - 0x11c;
        let _0x46532a = _0x41f164[_0x34fdaa];
        return _0x46532a;
    }, _0x34fd(_0x57593e, _0x3f650c);
}
const axios = require(_0x2f4f24(0x130)),
    {
        cmd,
        commands
    } = require(_0x2f4f24(0x14a)),
    {
        Sticker,
        createSticker,
        StickerTypes
    } = require(_0x2f4f24(0x15c)),
    googleTTS = require('google-tts-api'),
    {
        getRandom
    } = require(_0x2f4f24(0x14e));
var imgmsg = 'ʀᴇᴘʟʏ ᴛᴏ ᴀ ᴘʜᴏᴛᴏ ғᴏʀ sᴛɪᴄᴋᴇʀ!',
    descg = _0x2f4f24(0x142);
function _0x41f1() {
    const _0x3f5830 = ['log', '159792KrOOkw', '356JDIGMc', 'error', '29316DcjSps', 'Error !!', '🤹‍♀️', 'toBuffer', 'https://api.mymemory.translated.net/get?q=', '\x0a🌍 *KAYA-MD TRANSLATION* 🌍\x0a\x0a🔤 *Original*: ', '3492950MpkoLT', 'writeFile', '\x0a\x0a🔠 *Translated*: ', 'msg', '🌍 Translate text between languages', 'transparent', 'viewOnceMessage', 'promises', 'sticker', 'includes', '⚠️ An error occurred data while translating the your text. Please try again later🤕', 'axios', '.jpg', 'audio/mpeg', '\x0a\x0a> *created by sadeesha coder*', 'type', '27XxuOVP', 'data', 'other', 'getAudioUrl', 'trt', 'tts', '133uhgNsq', 'Need some text.', '--crop', 'download', 'FULL', '6sKOrYf', '12ALuvnM', 'ɪᴛ ᴄᴏɴᴠᴇʀᴛs ʏᴏᴜʀ ʀᴇᴘʟɪᴇᴅ ᴘʜᴏᴛᴏ ᴛᴏ sᴛɪᴄᴋᴇʀ.', 'get', '.webp', 'length', 'sendMessage', 'CROPPED', '1365091XXjgrW', 'imageMessage', '../command', 'download songs', '41561707eUpMCb', 'translatedText', '../lib/functions', 'stic', '12345', 'convert', '\x0a\x0a🌐 *Language*: ', 'hi-IN', '❗ Please provide a language code and text. Usage: .translate [language code] [text]', '2379005tESdTC', 'slice', 'quoted', 'Sadeesha Coder', '877756xXFNmb', '&langpair=en|', 'https://translate.google.com', 'wa-sticker-formatter'];
    _0x41f1 = function () {
        return _0x3f5830;
    };
    return _0x41f1();
}
cmd({
    'pattern': _0x2f4f24(0x12d),
    'react': _0x2f4f24(0x121),
    'alias': ['s', _0x2f4f24(0x14f)],
    'desc': descg,
    'category': _0x2f4f24(0x151),
    'use': '.sticker <Reply to image>',
    'filename': __filename
}, async (_0x1823ba, _0x8f2b68, _0x575892, {
    from: _0x3377c4,
    reply: _0x4090f3,
    isCmd: _0x5a0ab5,
    command: _0x56cb52,
    args: _0x1f47cb,
    q: _0x15f82c,
    isGroup: _0x5e4832,
    pushname: _0x12c345
}) => {
    const _0xed24d3 = _0x2f4f24;
    try {
        const _0x4b64d0 = _0x575892['quoted'] && (_0x575892['quoted']['type'] === _0xed24d3(0x149) || _0x575892[_0xed24d3(0x157)][_0xed24d3(0x134)] === _0xed24d3(0x12b) && _0x575892['quoted'][_0xed24d3(0x128)]['type'] === _0xed24d3(0x149)),
            _0x55f551 = _0x575892[_0xed24d3(0x157)] && _0x575892['quoted'][_0xed24d3(0x134)] === 'stickerMessage';
        if (_0x575892['type'] === 'imageMessage' || _0x4b64d0) {
            const _0x10e222 = getRandom(_0xed24d3(0x131)),
                _0x62b828 = _0x4b64d0 ? await _0x575892[_0xed24d3(0x157)][_0xed24d3(0x13e)]() : await _0x575892[_0xed24d3(0x13e)]();
            await require('fs')[_0xed24d3(0x12c)][_0xed24d3(0x126)](_0x10e222, _0x62b828);
            let _0xac7701 = new Sticker(_0x10e222, {
                'pack': _0x12c345,
                'author': _0xed24d3(0x158),
                'type': _0x15f82c[_0xed24d3(0x12e)](_0xed24d3(0x13d)) || _0x15f82c[_0xed24d3(0x12e)]('-c') ? StickerTypes[_0xed24d3(0x147)] : StickerTypes[_0xed24d3(0x13f)],
                'categories': ['🤩', '🎉'],
                'id': _0xed24d3(0x150),
                'quality': 0x4b,
                'background': _0xed24d3(0x12a)
            });
            const _0x45dab2 = await _0xac7701['toBuffer']();
            return _0x1823ba['sendMessage'](_0x3377c4, {
                'sticker': _0x45dab2
            }, {
                'quoted': _0x8f2b68
            });
        } else {
            if (_0x55f551) {
                const _0x3021e1 = getRandom(_0xed24d3(0x144)),
                    _0x4ab3e7 = await _0x575892[_0xed24d3(0x157)][_0xed24d3(0x13e)]();
                await require('fs')['promises'][_0xed24d3(0x126)](_0x3021e1, _0x4ab3e7);
                let _0x32609c = new Sticker(_0x3021e1, {
                    'pack': _0x12c345,
                    'author': '𝒉𝑒𝑟𝑣𝑒 𝑘𝑎𝑦𝑎',
                    'type': _0x15f82c[_0xed24d3(0x12e)](_0xed24d3(0x13d)) || _0x15f82c[_0xed24d3(0x12e)]('-c') ? StickerTypes[_0xed24d3(0x147)] : StickerTypes[_0xed24d3(0x13f)],
                    'categories': ['🤩', '🎉'],
                    'id': _0xed24d3(0x150),
                    'quality': 0x4b,
                    'background': _0xed24d3(0x12a)
                });
                const _0x496fd7 = await _0x32609c[_0xed24d3(0x122)]();
                return _0x1823ba['sendMessage'](_0x3377c4, {
                    'sticker': _0x496fd7
                }, {
                    'quoted': _0x8f2b68
                });
            } else return await _0x4090f3(imgmsg);
        }
    } catch (_0x55dd7b) {
        _0x4090f3(_0xed24d3(0x120)), console[_0xed24d3(0x11e)](_0x55dd7b);
    }
}), cmd({
    'pattern': _0x2f4f24(0x13a),
    'desc': _0x2f4f24(0x14b),
    'category': _0x2f4f24(0x13e),
    'react': '👧',
    'filename': __filename
}, async (_0xc05495, _0xe82eb6, _0x305980, {
    from: _0x2e9a43,
    quoted: _0x30f791,
    body: _0x49a393,
    isCmd: _0x384963,
    command: _0xdc7358,
    args: _0x3e4eec,
    q: _0x4e3c0e,
    isGroup: _0x465fc4,
    sender: _0x13863d,
    senderNumber: _0x13f1aa,
    botNumber2: _0x3c364f,
    botNumber: _0x6a95e,
    pushname: _0x3e425a,
    isMe: _0x31b9a9,
    isOwner: _0x1408a9,
    groupMetadata: _0x3dc04b,
    groupName: _0x20edd2,
    participants: _0x32400c,
    groupAdmins: _0x199f09,
    isBotAdmins: _0x121d9c,
    isAdmins: _0x15a8a2,
    reply: _0xbf02f0
}) => {
    const _0x379ddb = _0x2f4f24;
    try {
        if (!_0x4e3c0e) return _0xbf02f0(_0x379ddb(0x13c));
        const _0x2d4c08 = googleTTS[_0x379ddb(0x138)](_0x4e3c0e, {
            'lang': _0x379ddb(0x153),
            'slow': ![],
            'host': _0x379ddb(0x15b)
        });
        await _0xc05495[_0x379ddb(0x146)](_0x2e9a43, {
            'audio': {
                'url': _0x2d4c08
            },
            'mimetype': _0x379ddb(0x132),
            'ptt': !![]
        }, {
            'quoted': _0xe82eb6
        });
    } catch (_0x2c9a1f) {
        _0xbf02f0('' + _0x2c9a1f);
    }
}), cmd({
    'pattern': _0x2f4f24(0x139),
    'alias': ['translate'],
    'desc': _0x2f4f24(0x129),
    'react': '⚡',
    'category': _0x2f4f24(0x137),
    'filename': __filename
}, async (_0x264fc0, _0x5d6dbe, _0x44cff1, {
    from: _0x4c9114,
    q: _0x3284e2,
    reply: _0x2c3a4f
}) => {
    const _0x2b658e = _0x2f4f24;
    try {
        const _0x6491d1 = _0x3284e2['split'](' ');
        if (_0x6491d1[_0x2b658e(0x145)] < 0x2) return _0x2c3a4f(_0x2b658e(0x154));
        const _0x44ecb8 = _0x6491d1[0x0],
            _0x201af2 = _0x6491d1[_0x2b658e(0x156)](0x1)['join'](' '),
            _0x17e95e = _0x2b658e(0x123) + encodeURIComponent(_0x201af2) + _0x2b658e(0x15a) + _0x44ecb8,
            _0x126ca7 = await axios[_0x2b658e(0x143)](_0x17e95e),
            _0x2e88c2 = _0x126ca7[_0x2b658e(0x136)]['responseData'][_0x2b658e(0x14d)],
            _0x409528 = _0x2b658e(0x124) + _0x201af2 + _0x2b658e(0x127) + _0x2e88c2 + _0x2b658e(0x152) + _0x44ecb8['toUpperCase']() + _0x2b658e(0x133);
        return _0x2c3a4f(_0x409528);
    } catch (_0x5ef155) {
        return console[_0x2b658e(0x15d)](_0x5ef155), _0x2c3a4f(_0x2b658e(0x12f));
    }
});