function getAd(androidORiOS,data) {
    let base, videoType, videoLanguage, baseUrl;
    /* adBaseUrlMobile value is https://stagingb2bapi.zee5.com/adtags/webmobileads.php */
    /* adBaseUrl value is https://b2bapi.zee5.com/adtags/webads.php */
    /* Commenting the code for static value  */
    // baseUrl = androidORiOS ? adBaseUrlMobile : adBaseUrl;
    baseUrl = androidORiOS ? 'https://stagingb2bapi.zee5.com/adtags/webmobileads.php' : 'https://b2bapi.zee5.com/adtags/webads.php';
    videoLanguage = '';
    videoType = data.content_type === 'episode' ? 'tvshow' : data.content_type;
    let canonical = setCanonicalUrl(data);
    if (data.audio_languages && data.audio_languages.length) {
      for (let i = 0; i < data.audio_languages.length; i++) {
        videoLanguage += (i !== 0 ? ', ' : '') + data.audio_languages[i];
      }
    }
    base = baseUrl + '?videoid=' + (data.id || '') +
                  '&videotitle=' + (data.episode_name_en || data.title_en || '') +
                  '&channelname=' + ((data.channel_name && data.channel_name !== 'NA') ? data.channel_name : '').replace('&', 'and') +
                  '&showname=' + (data.title_en || '') +
                  '&videotype=' + (videoType || '') +
                  '&videolanguage=' + (videoLanguage || '') +
                  '&videogenre=' + (data.genre ? data.genre : '') +
                  '&pageurl=' + (canonical || '') +
                  '&ver=' + (this.window.appVersion || '');
    if (data.asset_type === 1) {
      base = base + '&season=' + (data.season_no || '');
    }
    /* Code Commented here to avoid the service call */
    // if (this.videoAnalyticsService.getRemarketingBlock()) {
    //   base = base + '&is_lat=1';
    // } else if (this.videoAnalyticsService.getRemarketingBlock() === false) {
    //   base = base + '&is_lat=0';
    // }
    if (true) {
      base = base + '&is_lat=1';
    } else {
      base = base + '&is_lat=0';
    }
    let adXml;

  
/* Need to work on this and use the subject in this code */
    getAdInfo(base).takeUntil(this.ngUnsubscribe).timeout(environment.timeOut).subscribe(value => {
      adXml = xmljs.xml2js(value._body);
      this.getad(adXml.elements[0].elements);
      },
      err => {
        this.videoService.apiErrorEvent(err);
    });
    return base;
  }

  function getAdInfo(url) {
    return this.http.get(url)
    .map(this.extractData1)
    .catch(this.handleErrorObservable);
  }

  function getad(adarray){
    this.adOffsets = [];
    for (let i = 0; i < adarray.length; i++) {
      getSecond(adarray[i].attributes.timeOffset);
    }
  }

  function getSecond(timeString){
    let time,
    sec = 0,
    adOffsets =[];
    if (timeString !== 'start' && timeString !== 'end') {
      time = timeString.split(':');
      for (let i = time.length - 1; i >= 0; i--) {
        sec += parseInt(time[i], 10) *  Math.pow(60, time.length - 1 - i);
      }
      if (adOffsets.indexOf(sec) === -1) {
        adOffsets.push(sec);
      }
    }
  }

  function setCanonicalUrl(data) {
    let title, episode,canonical;
    title = data.title_en || data.title;
    episode = data.episode_name_en || data.episode_name;
    if (data.category === 'tvshow') {
      canonical = this.window.location.origin + '/' + getBaseLocation() + data.category + 's/details' + '/' + convertToLowercase(title) + '/' + data.series_id + '/' + convertToLowercase(episode) + '/' + data.id;
    } else if (data.category === 'original') {
      canonical = this.window.location.origin + '/' + getBaseLocation() + 'zee5original' + 's/details' + '/' + convertToLowercase(title) + '/' + data.series_id + '/' + convertToLowercase(episode) + '/' + data.id;
    } else if (data.category === 'movie' || data.category === 'video') {
      canonical = this.window.location.origin + '/' + getBaseLocation() + data.category + 's/details' + '/' + convertToLowercase(title) + '/' + data.id;
    } else if (data.category === 'Live TV' ) {
      canonical = this.window.location.origin + '/' + getBaseLocation() + data.share_url;
    }
    return canonical;
  }

  function getBaseLocation() {
    let token;
    token = this.localStorage.getItem('token');
    if (token) {
    if (this.localStorage.getItem('UserDisplayLanguage') !== 'en') {
      return '' + this.localStorage.getItem('UserDisplayLanguage') + '/';
    } else {
      return '';
    }

  } else {
      if (this.localStorage.getItem('display_language') !== 'en') {
        return '' + this.localStorage.getItem('display_language') + '/';
      } else {
        return '';
      }
    }
  }

  function convertToLowercase(value) {
    let show_title;
    if (value) {

      show_title = value.toLowerCase().replace(/ /g, '-');
      show_title = show_title.replace(/---/g, '-');
      show_title = show_title.replace(/,/g, '');
      show_title = show_title.replace(/&/g, 'and');
      show_title = show_title.replace(/[��`~!@#$%^&*()|+\=?;:'�",.<>\{\}\[\]]/gi, '');
      show_title = show_title.replace(/[^\011\012\015\040-\177]/gi, '');
      show_title = show_title.replace(/--/g, '-');
    } else {
      show_title = 'title';
    }
    return show_title;
  }
