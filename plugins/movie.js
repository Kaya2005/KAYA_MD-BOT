const _0x12d841 = _0x54f8;
(function (_0x222b73, _0x54e7ec) {
    const _0x577947 = _0x54f8,
        _0x53c88a = _0x222b73();
    while (!![]) {
        try {
            const _0x5cd2c1 = -parseInt(_0x577947(0x20d)) / 0x1 + -parseInt(_0x577947(0x1d2)) / 0x2 * (parseInt(_0x577947(0x1cc)) / 0x3) + parseInt(_0x577947(0x20e)) / 0x4 * (-parseInt(_0x577947(0x1e2)) / 0x5) + parseInt(_0x577947(0x1e0)) / 0x6 + parseInt(_0x577947(0x225)) / 0x7 * (-parseInt(_0x577947(0x1fd)) / 0x8) + -parseInt(_0x577947(0x21c)) / 0x9 + parseInt(_0x577947(0x1e5)) / 0xa;
            if (_0x5cd2c1 === _0x54e7ec) break;
            else _0x53c88a['push'](_0x53c88a['shift']());
        } catch (_0x30f5f8) {
            _0x53c88a['push'](_0x53c88a['shift']());
        }
    }
}(_0x5405, 0x95a8d));
function _0x54f8(_0x59614a, _0x12a7b6) {
    const _0x54059f = _0x5405();
    return _0x54f8 = function (_0x54f869, _0x44a3a1) {
        _0x54f869 = _0x54f869 - 0x1c6;
        let _0x17d1d5 = _0x54059f[_0x54f869];
        return _0x17d1d5;
    }, _0x54f8(_0x59614a, _0x12a7b6);
}
const axios = require(_0x12d841(0x23b)),
    {
        cmd,
        commands
    } = require(_0x12d841(0x200)),
    fs = require('fs'),
    path = require(_0x12d841(0x1df)),
    cheerio = require(_0x12d841(0x1cd)),
    {
        sinhalaSub
    } = require(_0x12d841(0x228));
cmd({
    'pattern': _0x12d841(0x23d),
    'alias': [_0x12d841(0x203)],
    'react': '📑',
    'category': _0x12d841(0x1f9),
    'desc': _0x12d841(0x1fb),
    'filename': __filename
}, async (_0x13c9aa, _0x2123e1, _0x26bf84, {
    from: _0x2beada,
    q: _0x19515d,
    reply: _0x54059c
}) => {
    const _0x34f037 = _0x12d841;
    try {
        if (!_0x19515d) return await _0x54059c('*Please provide a search query! (e.g., Deadpool)*');
        var _0x3904c9 = await sinhalaSub();
        const _0x4d4428 = await _0x3904c9['search'](_0x19515d),
            _0x1ff073 = _0x4d4428[_0x34f037(0x1ee)][_0x34f037(0x1f7)](0x0, 0xa);
        if (!_0x1ff073 || _0x1ff073[_0x34f037(0x208)] === 0x0) return await _0x54059c('No results found for: ' + _0x19515d);
        let _0x49c238 = _0x34f037(0x209) + _0x19515d + _0x34f037(0x1d9);
        _0x1ff073['forEach']((_0x45ce4b, _0xee64bc) => {
            const _0x2df387 = _0x34f037;
            _0x49c238 += '*' + (_0xee64bc + 0x1) + _0x2df387(0x1f8) + _0x45ce4b[_0x2df387(0x1ec)] + '\x0a🔗 Link: ' + _0x45ce4b['link'] + '\x0a\x0a';
        });
        const _0x37a70e = await _0x13c9aa[_0x34f037(0x230)](_0x2beada, {
                'text': _0x49c238,
                'contextInfo': {
                    'mentionedJid': [_0x34f037(0x22d)],
                    'groupMentions': [],
                    'forwardingScore': 0x1,
                    'isForwarded': !![],
                    'forwardedNewsletterMessageInfo': {
                        'newsletterJid': _0x34f037(0x22c),
                        'newsletterName': 'Lααɾα-ᴍᴅ ✻',
                        'serverMessageId': 0x3e7
                    },
                    'externalAdReply': {
                        'title': _0x34f037(0x204),
                        'body': _0x34f037(0x1dc),
                        'mediaType': 0x1,
                        'sourceUrl': 'https://github.com/sadiyamin',
                        'thumbnailUrl': 'https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg',
                        'renderLargerThumbnail': ![],
                        'showAdAttribution': !![]
                    }
                }
            }, {
                'quoted': _0x26bf84
            }),
            _0x14c96d = _0x37a70e[_0x34f037(0x1f4)]['id'];
        _0x13c9aa['ev']['on'](_0x34f037(0x210), async _0x2a3ec4 => {
            const _0x145f51 = _0x34f037,
                _0x597641 = _0x2a3ec4[_0x145f51(0x1d7)][0x0];
            if (!_0x597641[_0x145f51(0x234)]) return;
            const _0x473a9c = _0x597641[_0x145f51(0x234)][_0x145f51(0x222)] || _0x597641['message']['extendedTextMessage']?. [_0x145f51(0x20b)],
                _0x33c323 = _0x597641[_0x145f51(0x234)][_0x145f51(0x1e6)] && _0x597641[_0x145f51(0x234)][_0x145f51(0x1e6)][_0x145f51(0x242)][_0x145f51(0x241)] === _0x14c96d;
            if (_0x33c323) {
                const _0x5eee4f = parseInt(_0x473a9c[_0x145f51(0x1db)]());
                if (!isNaN(_0x5eee4f) && _0x5eee4f > 0x0 && _0x5eee4f <= _0x1ff073[_0x145f51(0x208)]) {
                    const _0xc9cd73 = _0x1ff073[_0x5eee4f - 0x1],
                        _0x246d4a = _0x145f51(0x1d5) + encodeURIComponent(_0xc9cd73['link']);
                    try {
                        const _0x3bc443 = await axios[_0x145f51(0x21b)](_0x246d4a),
                            _0x2ca307 = _0x3bc443[_0x145f51(0x221)][_0x145f51(0x1ee)],
                            _0x33cde5 = _0x2ca307[_0x145f51(0x1fa)] || [];
                        if (_0x33cde5[_0x145f51(0x208)] === 0x0) return await _0x54059c('No PixelDrain links found.');
                        let _0x47cefa = _0x145f51(0x1f2) + _0x2ca307[_0x145f51(0x1ec)] + _0x145f51(0x1c7);
                        _0x47cefa += _0x145f51(0x1fc), _0x33cde5[_0x145f51(0x1ea)]((_0x5991e7, _0x287db8) => {
                            const _0x6d6af1 = _0x145f51;
                            _0x47cefa += '*' + (_0x287db8 + 0x1) + _0x6d6af1(0x1f8) + _0x5991e7[_0x6d6af1(0x23c)] + _0x6d6af1(0x232) + _0x5991e7[_0x6d6af1(0x213)] + _0x6d6af1(0x1ef) + _0x5991e7[_0x6d6af1(0x231)] + '\x0a\x0a';
                        });
                        const _0x494148 = await _0x13c9aa['sendMessage'](_0x2beada, {
                                'text': _0x47cefa,
                                'contextInfo': {
                                    'mentionedJid': [_0x145f51(0x22d)],
                                    'groupMentions': [],
                                    'forwardingScore': 0x1,
                                    'isForwarded': !![],
                                    'forwardedNewsletterMessageInfo': {
                                        'newsletterJid': _0x145f51(0x22c),
                                        'newsletterName': 'Lααɾα-ᴍᴅ ✻',
                                        'serverMessageId': 0x3e7
                                    },
                                    'externalAdReply': {
                                        'title': 'KAYA MD',
                                        'body': '𝑯𝒆𝒓𝒗𝒆 𝒌𝒂𝒚𝒂',
                                        'mediaType': 0x1,
                                        'sourceUrl': _0x145f51(0x1e8),
                                        'thumbnailUrl': _0x145f51(0x205),
                                        'renderLargerThumbnail': ![],
                                        'showAdAttribution': !![]
                                    }
                                }
                            }, {
                                'quoted': _0x597641
                            }),
                            _0x14738c = _0x494148[_0x145f51(0x1f4)]['id'];
                        _0x13c9aa['ev']['on'](_0x145f51(0x210), async _0x2785ec => {
                            const _0x360125 = _0x145f51,
                                _0x13d095 = _0x2785ec[_0x360125(0x1d7)][0x0];
                            if (!_0x13d095[_0x360125(0x234)]) return;
                            const _0x220c58 = _0x13d095[_0x360125(0x234)][_0x360125(0x222)] || _0x13d095[_0x360125(0x234)]['extendedTextMessage']?. ['text'],
                                _0x11b5c0 = _0x13d095['message']['extendedTextMessage'] && _0x13d095[_0x360125(0x234)][_0x360125(0x1e6)][_0x360125(0x242)][_0x360125(0x241)] === _0x14738c;
                            if (_0x11b5c0) {
                                const _0x3f7e40 = parseInt(_0x220c58[_0x360125(0x1db)]());
                                if (!isNaN(_0x3f7e40) && _0x3f7e40 > 0x0 && _0x3f7e40 <= _0x33cde5[_0x360125(0x208)]) {
                                    const _0x39807d = _0x33cde5[_0x3f7e40 - 0x1],
                                        _0x57f385 = _0x39807d[_0x360125(0x231)][_0x360125(0x1e9)]('/')['pop']();
                                    await _0x13c9aa[_0x360125(0x230)](_0x2beada, {
                                        'react': {
                                            'text': '⬇️',
                                            'key': _0x494148['key']
                                        }
                                    }), await _0x13c9aa[_0x360125(0x230)](_0x2beada, {
                                        'text': '*Downloading your movie... 📥*\x0a*Wait few minits...*\x0a\x0a> *© ᴄʀᴇᴀᴛᴇᴅ ʙy 𝑯𝒆𝒓𝒗𝒆 𝒌𝒂𝒚𝒂*',
                                        'contextInfo': {
                                            'mentionedJid': ['243823661981@s.whatsapp.net'],
                                            'groupMentions': [],
                                            'forwardingScore': 0x1,
                                            'isForwarded': !![],
                                            'forwardedNewsletterMessageInfo': {
                                                'newsletterJid': _0x360125(0x22c),
                                                'newsletterName': _0x360125(0x23e),
                                                'serverMessageId': 0x3e7
                                            },
                                            'externalAdReply': {
                                                'title': _0x360125(0x204),
                                                'body': _0x360125(0x1dc),
                                                'mediaType': 0x1,
                                                'sourceUrl': _0x360125(0x1e8),
                                                'thumbnailUrl': _0x360125(0x205),
                                                'renderLargerThumbnail': ![],
                                                'showAdAttribution': !![]
                                            }
                                        }
                                    }, {
                                        'quoted': _0x26bf84
                                    });
                                    const _0x4bee71 = 'https://pixeldrain.com/api/file/' + _0x57f385;
                                    await _0x13c9aa['sendMessage'](_0x2beada, {
                                        'react': {
                                            'text': '⬆',
                                            'key': _0x494148['key']
                                        }
                                    }), await _0x13c9aa['sendMessage'](_0x2beada, {
                                        'document': {
                                            'url': _0x4bee71
                                        },
                                        'mimetype': 'video/mp4',
                                        'fileName': _0x2ca307[_0x360125(0x1ec)] + _0x360125(0x232) + _0x39807d[_0x360125(0x23c)] + '.mp4',
                                        'caption': _0x2ca307[_0x360125(0x1ec)] + _0x360125(0x20f) + _0x39807d[_0x360125(0x23c)] + _0x360125(0x1d6),
                                        'contextInfo': {
                                            'mentionedJid': ['243823661981@s.whatsapp.net'],
                                            'groupMentions': [],
                                            'forwardingScore': 0x1,
                                            'isForwarded': !![],
                                            'forwardedNewsletterMessageInfo': {
                                                'newsletterJid': '120363192254044294@newsletter',
                                                'newsletterName': _0x360125(0x23e),
                                                'serverMessageId': 0x3e7
                                            },
                                            'externalAdReply': {
                                                'title': _0x360125(0x204),
                                                'body': _0x360125(0x1dc),
                                                'mediaType': 0x1,
                                                'sourceUrl': _0x360125(0x1e8),
                                                'thumbnailUrl': _0x360125(0x205),
                                                'renderLargerThumbnail': ![],
                                                'showAdAttribution': !![]
                                            }
                                        }
                                    }, {
                                        'quoted': _0x26bf84
                                    }), await _0x13c9aa[_0x360125(0x230)](_0x2beada, {
                                        'react': {
                                            'text': '✅',
                                            'key': _0x26bf84[_0x360125(0x1f4)]
                                        }
                                    });
                                } else await _0x54059c('Invalid selection. Please reply with a valid number.');
                            }
                        });
                    } catch (_0x3f0504) {
                        console[_0x145f51(0x1ca)](_0x145f51(0x219), _0x3f0504), await _0x54059c('An error occurred while fetching movie details. Please try again.');
                    }
                } else await _0x54059c(_0x145f51(0x1f3));
            }
        });
    } catch (_0x7e47d) {
        console[_0x34f037(0x1ca)]('Error during search:', _0x7e47d), _0x54059c(_0x34f037(0x212));
    }
}), cmd({
    'pattern': _0x12d841(0x214),
    'alias': [_0x12d841(0x220)],
    'react': '📑',
    'category': 'download',
    'desc': 'ginisisilacartoon.net',
    'filename': __filename
}, async (_0x1d2873, _0xd216d2, _0x163ef5, {
    from: _0x21e02f,
    q: _0x16580e,
    isDev: _0x4ac3b2,
    reply: _0x2a24ca
}) => {
    const _0xf2d031 = _0x12d841;
    try {
        if (!_0x16580e) return await _0x2a24ca(_0xf2d031(0x20c));
        const _0x1c649f = _0xf2d031(0x1fe) + encodeURIComponent(_0x16580e),
            _0x45bf90 = await axios[_0xf2d031(0x21b)](_0x1c649f),
            _0x15eb94 = cheerio['load'](_0x45bf90['data']);
        let _0x3442b1 = [];
        _0x15eb94(_0xf2d031(0x1c9))['each']((_0x17a69e, _0x91a99e) => {
            const _0x295e10 = _0xf2d031,
                _0x435894 = _0x15eb94(_0x91a99e)[_0x295e10(0x1d1)](_0x295e10(0x23a))[_0x295e10(0x226)]('title'),
                _0x3ac96d = _0x15eb94(_0x91a99e)[_0x295e10(0x1d1)](_0x295e10(0x229))[_0x295e10(0x20b)]()['trim'](),
                _0x2afa6a = _0x15eb94(_0x91a99e)[_0x295e10(0x1d1)](_0x295e10(0x23a))[_0x295e10(0x226)](_0x295e10(0x1e7)),
                _0x12c713 = _0x15eb94(_0x91a99e)[_0x295e10(0x1d1)](_0x295e10(0x22b))[_0x295e10(0x226)](_0x295e10(0x20a));
            _0x435894 && _0x2afa6a && _0x3442b1[_0x295e10(0x224)]({
                'title': _0x435894,
                'postedTime': _0x3ac96d,
                'episodeLink': _0x295e10(0x1da) + _0x2afa6a,
                'imageUrl': _0x12c713
            });
        });
        if (_0x3442b1[_0xf2d031(0x208)] === 0x0) return await _0x2a24ca(_0xf2d031(0x1dd) + _0x16580e);
        let _0x26cf8c = '🔢 *Please reply with the number you want to select*\x0a\x0a📺 Search Results for *' + _0x16580e + _0xf2d031(0x237);
        _0x3442b1['forEach']((_0x1b4e89, _0xfb1300) => {
            const _0xd3119b = _0xf2d031;
            _0x26cf8c += '*' + (_0xfb1300 + 0x1) + _0xd3119b(0x1f8) + _0x1b4e89['title'] + _0xd3119b(0x211) + _0x1b4e89[_0xd3119b(0x1ce)] + _0xd3119b(0x1ef) + _0x1b4e89[_0xd3119b(0x227)] + '\x0a\x0a';
        });
        const _0x5dd19f = await _0x1d2873['sendMessage'](_0x21e02f, {
                'text': _0x26cf8c,
                'contextInfo': {
                    'mentionedJid': [_0xf2d031(0x22d)],
                    'groupMentions': [],
                    'forwardingScore': 0x1,
                    'isForwarded': !![],
                    'forwardedNewsletterMessageInfo': {
                        'newsletterJid': '120363192254044294@newsletter',
                        'newsletterName': _0xf2d031(0x23e),
                        'serverMessageId': 0x3e7
                    },
                    'externalAdReply': {
                        'title': 'KAYA MD',
                        'body': '𝑯𝒆𝒓𝒗𝒆 𝒌𝒂𝒚𝒂',
                        'mediaType': 0x1,
                        'sourceUrl': _0xf2d031(0x1e8),
                        'thumbnailUrl': _0xf2d031(0x205),
                        'renderLargerThumbnail': ![],
                        'showAdAttribution': !![]
                    }
                }
            }, {
                'quoted': _0x163ef5
            }),
            _0x44e901 = _0x5dd19f[_0xf2d031(0x1f4)]['id'];
        _0x1d2873['ev']['on'](_0xf2d031(0x210), async _0x275d84 => {
            const _0x79788c = _0xf2d031,
                _0xd06d0b = _0x275d84['messages'][0x0];
            if (!_0xd06d0b[_0x79788c(0x234)]) return;
            const _0x5984f4 = _0xd06d0b[_0x79788c(0x234)][_0x79788c(0x222)] || _0xd06d0b[_0x79788c(0x234)][_0x79788c(0x1e6)]?. [_0x79788c(0x20b)],
                _0x14201e = _0xd06d0b[_0x79788c(0x1f4)][_0x79788c(0x21f)],
                _0x3cb6dc = _0xd06d0b['message']['extendedTextMessage'] && _0xd06d0b[_0x79788c(0x234)]['extendedTextMessage'][_0x79788c(0x242)]['stanzaId'] === _0x44e901;
            if (_0x3cb6dc) {
                const _0x434909 = parseInt(_0x5984f4[_0x79788c(0x1db)]());
                if (!isNaN(_0x434909) && _0x434909 > 0x0 && _0x434909 <= _0x3442b1[_0x79788c(0x208)]) {
                    const _0x5acb02 = _0x3442b1[_0x434909 - 0x1],
                        _0x2c3271 = _0x79788c(0x233) + _0x5acb02[_0x79788c(0x1ec)] + '\x0a⏳ *ᴅᴀᴛᴇ:-* ' + _0x5acb02[_0x79788c(0x1ce)] + _0x79788c(0x21d) + _0x5acb02[_0x79788c(0x227)] + _0x79788c(0x1e4),
                        _0x56b7cf = {
                            'image': {
                                'url': _0x5acb02[_0x79788c(0x215)]
                            },
                            'caption': _0x2c3271
                        };
                    await _0x1d2873[_0x79788c(0x230)](_0x14201e, _0x56b7cf, {
                        'quoted': _0xd06d0b
                    });
                    const _0x315dfd = await axios[_0x79788c(0x21b)](_0x5acb02[_0x79788c(0x227)]),
                        _0x5882dd = cheerio[_0x79788c(0x22f)](_0x315dfd[_0x79788c(0x221)]),
                        _0xb4011a = _0x5882dd(_0x79788c(0x1e3))['attr'](_0x79788c(0x20a));
                    if (_0xb4011a) {
                        const _0x5f5be3 = _0x79788c(0x1d8) + _0xb4011a;
                        try {
                            const _0x1e19fb = await axios['get'](_0x5f5be3),
                                _0x5d691b = _0x1e19fb[_0x79788c(0x1ee)]['dl_link'];
                            _0x5d691b ? await _0x1d2873[_0x79788c(0x230)](_0x14201e, {
                                'document': {
                                    'url': _0x5d691b
                                },
                                'mimetype': _0x79788c(0x1d3),
                                'fileName': 'Sadeesha | ' + _0x5acb02['title'] + _0x79788c(0x217),
                                'caption': _0x5acb02[_0x79788c(0x1ec)] + _0x79788c(0x1e1),
                                'contextInfo': {
                                    'mentionedJid': [_0x79788c(0x22d)],
                                    'groupMentions': [],
                                    'forwardingScore': 0x1,
                                    'isForwarded': !![],
                                    'forwardedNewsletterMessageInfo': {
                                        'newsletterJid': _0x79788c(0x22c),
                                        'newsletterName': '𝙆𝘼𝙔𝘼♱𝙈𝘿🍃',
                                        'serverMessageId': 0x3e7
                                    },
                                    'externalAdReply': {
                                        'title': _0x79788c(0x204),
                                        'body': _0x79788c(0x1dc),
                                        'mediaType': 0x1,
                                        'sourceUrl': _0x79788c(0x1e8),
                                        'thumbnailUrl': _0x79788c(0x205),
                                        'renderLargerThumbnail': ![],
                                        'showAdAttribution': !![]
                                    }
                                }
                            }, {
                                'quoted': _0xd06d0b
                            }) : await _0x2a24ca(_0x79788c(0x1de));
                        } catch (_0xef63b4) {
                            console[_0x79788c(0x1ca)](_0x79788c(0x236), _0xef63b4), await _0x2a24ca(_0x79788c(0x1eb));
                        }
                    } else await _0x2a24ca(_0x79788c(0x1cb));
                } else await _0x2a24ca(_0x79788c(0x1ff));
            }
        });
    } catch (_0x387561) {
        _0x2a24ca('*Error occurred while scraping!*'), console['error'](_0x387561);
    }
}), cmd({
    'pattern': _0x12d841(0x206),
    'react': '📑',
    'category': _0x12d841(0x1f9),
    'desc': _0x12d841(0x239),
    'filename': __filename
}, async (_0x4c53d1, _0x47cf36, _0x3832c8, {
    from: _0x20fd1e,
    q: _0x205422,
    isDev: _0x289e57,
    reply: _0x3acc2a
}) => {
    const _0x2f86bf = _0x12d841;
    try {
        if (!_0x205422) return await _0x3acc2a(_0x2f86bf(0x1f5));
        const _0xfc657b = _0x2f86bf(0x223) + encodeURIComponent(_0x205422),
            _0x2264b4 = await axios[_0x2f86bf(0x21b)](_0xfc657b),
            _0x39c008 = cheerio['load'](_0x2264b4['data']);
        let _0x1d475e = [];
        _0x39c008(_0x2f86bf(0x1d0))[_0x2f86bf(0x21e)]((_0x50d475, _0x1a6b50) => {
            const _0x294e4d = _0x2f86bf,
                _0x2270fe = _0x39c008(_0x1a6b50)['find']('h5.elementor-post__title > a')[_0x294e4d(0x20b)]()[_0x294e4d(0x1db)](),
                _0x3526f4 = _0x39c008(_0x1a6b50)[_0x294e4d(0x1d1)](_0x294e4d(0x238))[_0x294e4d(0x226)](_0x294e4d(0x1e7)),
                _0x43cea5 = _0x39c008(_0x1a6b50)[_0x294e4d(0x1d1)](_0x294e4d(0x202))[_0x294e4d(0x226)](_0x294e4d(0x20a));
            _0x2270fe && _0x3526f4 && _0x43cea5 && _0x1d475e[_0x294e4d(0x224)]({
                'title': _0x2270fe,
                'episodeLink': _0x3526f4,
                'imgUrl': _0x43cea5
            });
        });
        if (_0x1d475e['length'] === 0x0) return await _0x3acc2a('No results found for: ' + _0x205422);
        let _0x193587 = _0x2f86bf(0x1cf) + _0x205422 + _0x2f86bf(0x237);
        _0x1d475e[_0x2f86bf(0x1ea)]((_0x341aaa, _0xb7314b) => {
            const _0x4f398e = _0x2f86bf;
            _0x193587 += '*' + (_0xb7314b + 0x1) + _0x4f398e(0x1f8) + _0x341aaa[_0x4f398e(0x1ec)] + _0x4f398e(0x1ef) + _0x341aaa[_0x4f398e(0x227)] + '\x0a\x0a';
        });
        const _0x5cf1b8 = await _0x4c53d1['sendMessage'](_0x20fd1e, {
                'text': _0x193587
            }, {
                'quoted': _0x3832c8
            }),
            _0x3a4aff = _0x5cf1b8['key']['id'];
        _0x4c53d1['ev']['on']('messages.upsert', async _0x31f8f9 => {
            const _0x4603f1 = _0x2f86bf,
                _0x25496f = _0x31f8f9[_0x4603f1(0x1d7)][0x0];
            if (!_0x25496f['message']) return;
            const _0x275fc2 = _0x25496f[_0x4603f1(0x234)][_0x4603f1(0x222)] || _0x25496f['message'][_0x4603f1(0x1e6)]?. [_0x4603f1(0x20b)],
                _0x44f970 = _0x25496f[_0x4603f1(0x1f4)][_0x4603f1(0x21f)],
                _0x28ca5e = _0x25496f[_0x4603f1(0x234)][_0x4603f1(0x1e6)] && _0x25496f['message'][_0x4603f1(0x1e6)][_0x4603f1(0x242)][_0x4603f1(0x241)] === _0x3a4aff;
            if (_0x28ca5e) {
                const _0x5ddbfe = parseInt(_0x275fc2[_0x4603f1(0x1db)]());
                if (!isNaN(_0x5ddbfe) && _0x5ddbfe > 0x0 && _0x5ddbfe <= _0x1d475e[_0x4603f1(0x208)]) {
                    const _0x33ec54 = _0x1d475e[_0x5ddbfe - 0x1],
                        _0x58c70a = await axios['get'](_0x33ec54['episodeLink']),
                        _0x35d8a4 = cheerio[_0x4603f1(0x22f)](_0x58c70a[_0x4603f1(0x221)]),
                        _0x575266 = _0x35d8a4(_0x4603f1(0x1f1))['attr']('href');
                    if (_0x575266) {
                        await _0x4c53d1['sendMessage'](_0x44f970, {
                            'image': {
                                'url': _0x33ec54[_0x4603f1(0x1c6)]
                            },
                            'caption': _0x4603f1(0x21a) + _0x33ec54[_0x4603f1(0x1ec)] + _0x4603f1(0x216) + _0x33ec54[_0x4603f1(0x227)] + '\x0a⬇️ Download will follow.'
                        }, {
                            'quoted': _0x25496f
                        });
                        const _0x3facb6 = path[_0x4603f1(0x1ed)](__dirname, _0x4603f1(0x1c8)),
                            _0x26f02c = fs[_0x4603f1(0x1f6)](_0x3facb6),
                            _0x243cb1 = await axios({
                                'url': _0x575266,
                                'method': 'GET',
                                'responseType': _0x4603f1(0x207)
                            });
                        _0x243cb1[_0x4603f1(0x221)][_0x4603f1(0x240)](_0x26f02c), _0x26f02c['on'](_0x4603f1(0x1f0), async () => {
                            const _0xeb618f = _0x4603f1;
                            await _0x4c53d1[_0xeb618f(0x230)](_0x44f970, {
                                'document': {
                                    'url': _0x3facb6
                                },
                                'mimetype': 'application/zip',
                                'fileName': _0x33ec54['title'] + _0xeb618f(0x23f),
                                'caption': '*' + _0x33ec54['title'] + '*\x0a\x0a> Lααɾα-ᴍᴅ ✻',
                                'contextInfo': {
                                    'mentionedJid': [_0xeb618f(0x22d)],
                                    'groupMentions': [],
                                    'forwardingScore': 0x1,
                                    'isForwarded': !![],
                                    'forwardedNewsletterMessageInfo': {
                                        'newsletterJid': _0xeb618f(0x22c),
                                        'newsletterName': 'Lααɾα-ᴍᴅ ✻',
                                        'serverMessageId': 0x3e7
                                    },
                                    'externalAdReply': {
                                        'title': _0xeb618f(0x204),
                                        'body': _0xeb618f(0x1dc),
                                        'mediaType': 0x1,
                                        'sourceUrl': 'https://github.com/sadiyamin',
                                        'thumbnailUrl': _0xeb618f(0x205),
                                        'renderLargerThumbnail': ![],
                                        'showAdAttribution': !![]
                                    }
                                }
                            }, {
                                'quoted': _0x25496f
                            }), fs[_0xeb618f(0x218)](_0x3facb6);
                        }), _0x26f02c['on'](_0x4603f1(0x1ca), _0x2aecc4 => {
                            const _0x2bdaff = _0x4603f1;
                            console[_0x2bdaff(0x1ca)](_0x2bdaff(0x22e), _0x2aecc4), _0x3acc2a(_0x2bdaff(0x22a));
                        });
                    } else await _0x3acc2a(_0x4603f1(0x1d4));
                } else await _0x3acc2a(_0x4603f1(0x235));
            }
        });
    } catch (_0x8d7e0f) {
        console[_0x2f86bf(0x1ca)](_0x8d7e0f), await _0x3acc2a(_0x2f86bf(0x201));
    }
});
function _0x5405() {
    const _0x349bf3 = ['*\x0a🔗 Link: ', '.mp4', 'unlinkSync', 'Error fetching movie details:', '🎬 *', 'get', '7585209bRSSID', '\x0a📎 *ᴇᴘɪꜱᴏᴅᴇ ʟɪɴᴋ*:- ', 'each', 'remoteJid', 'cartoon', 'data', 'conversation', 'https://www.baiscope.lk/?s=', 'push', '805FxGAWr', 'attr', 'episodeLink', 'mrnima-moviedl', 'div.posted-time', '*Error downloading the episode ZIP file.*', 'div.inner-video-thumb-wrapper img', '120363192254044294@newsletter', '243823661981@s.whatsapp.net', 'Error downloading ZIP file:', 'load', 'sendMessage', 'link', ' - ', '*🪄 ɴᴀᴍᴇ:-* ', 'message', '*Invalid selection. Please choose a valid number.*', 'Error fetching the download link:', ':*\x0a\x0a', 'h5.elementor-post__title > a', 'baiscope.lk', 'div.video-title > a', 'axios', 'quality', 'movie', '𝙆𝘼𝙔𝘼♱𝙈𝘿', '.zip', 'pipe', 'stanzaId', 'contextInfo', 'imgUrl', '*\x0a\x0a', 'downloaded_episode.zip', 'div.inner-video-cell', 'error', 'No downloadable link found for this episode.', '3tMHkqD', 'cheerio', 'postedTime', '📺 Search Results for *', 'article.elementor-post', 'find', '121530cAkzmQ', 'video/mp4', '*Download link not found for the selected episode.*', 'https://api-site-2.vercel.app/api/sinhalasub/movie?url=', '\x0a*ᴄʀᴇᴀᴛᴇᴅ ʙʏ 𝑯𝒆𝒓𝒗𝒆 𝒌𝒂𝒚𝒂*', 'messages', 'https://www.dark-yasiya-api.site/download/ginisisila?url=', '\":\x0a\x0a', 'https://ginisisilacartoon.net/', 'trim', '𝑯𝒆𝒓𝒗𝒆 𝒌𝒂𝒚𝒂', 'No results found for: ', 'Failed to retrieve the download link for this episode.', 'path', '714648bmYvFE', ' |  *HERVE KAYA*\x0a\x0a> Kaya-MD', '3814415vkBxjx', 'div#player-holder iframe', '\x0a\x0a☘ *We are uploading the Movie/Episode you requested.*', '33712610hvhyHf', 'extendedTextMessage', 'href', 'https://github.com/sadiyamin', 'split', 'forEach', 'An error occurred while trying to fetch the download link.', 'title', 'join', 'result', '\x0a🔗 Link: ', 'finish', 'a.dlm-buttons-button', '🔢 *Please reply with the number you want to select*\x0a\x0a🎥 *', 'Invalid selection. Please reply with a valid number.', 'key', '*Please provide a search query! (e.g., Avatar)*', 'createWriteStream', 'slice', '.* ', 'download', 'dl_links', 'Search movies on sinhalasub and get download links', '*Available PixelDrain Download Links:*\x0a', '42304RjOoHO', 'https://ginisisilacartoon.net/search.php?q=', 'Please reply with a valid number from the list.', '../command', '*An error occurred while scraping the data.*', '.elementor-post__thumbnail img', 'sinhalasub', 'KAYA MD', 'https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg', 'baiscope', 'stream', 'length', '🔢 *Please reply with the number you want to select*\x0a\x0a📽️ *Search Results for* \"', 'src', 'text', '*Please provide a search query! (e.g., Garfield)*', '602795RoIwGc', '4gKPRbm', '\x0aQuality: ', 'messages.upsert', '\x0a🗓️ Posted: ', '*An error occurred while searching!*', 'size', 'ginisisila', 'imageUrl'];
    _0x5405 = function () {
        return _0x349bf3;
    };
    return _0x5405();
}