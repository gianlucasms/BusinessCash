function etqEnter(eventKey, idProximo) {
    var tecla = (eventKey.keyCode ? eventKey.keyCode : eventKey.which);
    if (tecla === 13) {
        document.getElementById(idProximo).focus();
    }
}