(function () {
    let root = this;

    root.Onepay = function (transaction) {
        this.transaction = transaction;
        if (!this.transaction) {
            console.log("transaction does not exist in object param");
            return;
        }
        if (!this.transaction["qrCodeAsBase64"]) {
            console.log("qrCodeAsBase64 does not exist in object param");
            return;
        }
        if (!this.transaction["ott"]) {
            console.log("ott does not exist in object param");
            return;
        }

        this.qrCodeAsBase64 = transaction.qrCodeAsBase64;
    };
    
    Onepay.prototype.drawQrImage = function (htmlTagId) {
        let onepay = this;
        let socketSubscribePromise = new Promise((resolve, reject) => {
            let socket = new OnepayWebSocket(onepay.transaction);
            socket.connect(() =>{resolve()});
        });
        socketSubscribePromise.then(function () {
            let qrImage = new Image();
            qrImage.src = " data:image/png;charset=utf-8;base64," + onepay.qrCodeAsBase64;
            let html = document.getElementById(htmlTagId);
            html.innerHTML = "";
            html.appendChild(qrImage);
        });
    };
}());