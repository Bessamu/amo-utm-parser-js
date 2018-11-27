# Utm Parser для [AmoCRM](https://www.amocrm.ru/)

### Установка (Install)

```
yarn add amo-utm-parser-js 
# or
npm install amo-utm-parser-js 
```

### Использование (Usage)

somefile.js
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

