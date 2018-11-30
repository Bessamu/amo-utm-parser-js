# Utm Parser для [AmoCRM](https://www.amocrm.ru/)

### Установка (Install)

```
yarn add amo-utm-parser-js 
# or
npm install amo-utm-parser-js 
```

### Использование (Usage)

Добавление в форму (add in form)

someFile.js
```js
import amoUtmParser from 'amo-utm-parser-js'

window.onload = function () {
  amoUtmParser.init()
  
  var someForm = document.getElementById('some-form')
  someForm.addEventListener('submit', function (e) {
    amoUtmParser.addHiddenInputsInForms(e.srcElement)
    //
    // sending form or some another code
    //
  })
}
```

Или передача данных (or just send data)

someAnotherFile.js
```js
import axios from  'axios'
import amoUtmParser from 'amo-utm-parser-js'

window.onload = function () {
  amoUtmParser.init()
  //
  // Some code
  //

  var utmData = amoUtmParser.utms
    utmData['ga_user'] = amoUtmParser.gaUser
      
  axios.post('/some-api', {
    utmData: Object.assign({}, utmData),
  })
  
  //
  // Some code
  //
}
```
