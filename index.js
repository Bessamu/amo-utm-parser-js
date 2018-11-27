var amoUtmParser = {
  /** @type {string[]} */
  utmList: ['utm_source', 'utm_keyword', 'utm_campaign', 'utm_medium', 'utm_term', 'utm_content'],
  /** @type {string[]} */
  utms: [],

  /**
   * This need do for AmoCrm utms data
   */
  init: function () {
    var utms = this.utms
    var getParams = this.getParameterByName
    this.utmList.forEach(
      function (value) {
        var utm = getParams(value)
        if (utm.length > 0) {
          utms[value] = utm
        }
      }
    )
    this.utms = utms

    this.checkStorage()
    this.saveUtms()
    this.loadUtms()
  },

  /**
   * Check local storage, if new data not like in storage clear local data
   */
  checkStorage: function () {
    for (var key in this.utms) {
      var value = this.utms[key]
      var savedUtm = localStorage.getItem(key)
      if (savedUtm !== value) {
        this.utmList.forEach(
          function(value) {
            localStorage.removeItem(value)
          }
        )
        break
      }
    }
  },

  /**
   * Save Utm data to local storage
   */
  saveUtms: function () {
    for (var key in this.utms) {
      localStorage.setItem(key, this.utms[key])
    }
  },

  /**
   * load data from local storage
   */
  loadUtms: function () {
    var utms = this.utms
    this.utmList.forEach(
      function(value) {
        var savedUtm = localStorage.getItem(value)
        if (savedUtm && savedUtm.length > 0) {
          utms[value] = savedUtm
        }
      }
    )

    this.utms = utms
  },

  /**
   * Method return needed value of utm
   *
   * @param {string} name
   * @returns {string}
   */
  getParameterByName: function (name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]")
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search)
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "))
  },

  /**
   * Add hidden inputs with utm data in form
   *
   * @param {HTMLElement} form
   */
  addHiddenInputsInForms: function (form) {
    for (var key in this.utms) {
      var value = this.utms[key]
      var input = document.createElement('input')
      input.type = 'hidden'
      input.name = key
      input.value = value
      form.appendChild(input)
    }
  }
}

export default amoUtmParser
