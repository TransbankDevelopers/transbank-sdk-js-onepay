function HttpUtil() {

  this.getHttpRequest = function () {
    if (window.XMLHttpRequest) {return new XMLHttpRequest();}
    // eslint-disable-next-line no-undef
    return ActiveXObject('Microsoft.XMLHTTP');
  };

  this.sendPostRedirect = function (destination, params) {
    let form = document.createElement('form');

    form.method = 'POST';
    form.action = destination;

    Object.keys(params).forEach(function (key) {
      let param = document.createElement('input');

      param.type = 'hidden';
      param.name = key;
      param.value = params[key];
      form.appendChild(param);
    });

    let submit = document.createElement('input');

    submit.type = 'submit';
    submit.name = 'submitButton';
    submit.style.display = 'none';

    form.appendChild(submit);
    document.body.appendChild(form);
    form.submit();
  };
}

module.exports = HttpUtil;

