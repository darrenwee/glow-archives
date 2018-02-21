var cookieConsent = {
    setCookie: function (key, value) {
        var expires = new Date();
        expires.setTime(expires.getTime() + (365 * 24 * 60 * 60 * 1000));
        //Here we declare that the domain lu.se and its subdomains will gain access to the cookie we set
        document.cookie = key + '=' + value + ';expires=' + expires.toUTCString() + ';domain=lu.se';
        document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
    },

    getCookie: function (key) {
        var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
        return keyValue ? keyValue[2] : null;
    },

    acceptCookies: function () {
        $('#sliding-popup').slideUp('slow');
        cookieConsent.setCookie('cookie-accepted', 1);
        includeGoogleAnayticsCode();
    },

    readMore: function () {
        // The page with information on our cookie policy has the id 24127
        var redirect = 'http://www.ht.lu.se?id=24127';
        var language = document.getElementsByTagName('html')[0].getAttribute('lang');
        if (language.indexOf('en') >= 0) {
            redirect = 'http://www.ht.lu.se?id=24127&L=1';
        }
        location.href = redirect;
    }
};

if (cookieConsent.getCookie('cookie-accepted') !== '1') {
    $('#sliding-popup').slideDown('slow');
}

if (cookieConsent.getCookie('cookie-accepted') !== null) {
    includeGoogleAnayticsCode();
}

function includeGoogleAnayticsCode() {
    if(typeof googleAnalyticsPropertyId === 'undefined') {
        return;
    }
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

    ga('create', googleAnalyticsPropertyId, 'auto');
    ga('set', 'anonymizeIp', true);
    ga('send', 'pageview');
}
