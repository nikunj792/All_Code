function get_browser() {
    let ua, tem, M;
    ua = this.navigator.userAgent;
    M = ua.match(/(opera|chrome|crios|safari|firefox|fxios|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem =  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return({name: 'IE', version: tem[1] || ''});
    }
    if (M[1] === 'Chrome' || M[1] === 'CriOS') {
        tem = ua.match(/\b(OPR|Edge|EdgA|UBrowser|UCBrowser|MiuiBrowser|XiaoMi|SamsungBrowser)\/(\d+)/);
        if (tem !== null) {
          return({name: tem[1], version: tem[2] || ''});
        }
    }
    M = M[2] ? [M[1], M[2]] : [this.navigator.appName, this.navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) {
      M.splice(1, 1, tem[1]);
    }
    return({name: M[0], version: M[1]});
  }