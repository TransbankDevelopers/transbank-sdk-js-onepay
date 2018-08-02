const OnepayWebSocket = require('./onepay-websocket.js');

function Onepay (transaction) {
        this.version = '1.0.0';
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

        this.drawQrImage = function (htmlTagId) {
            let socketSubscribePromise = new Promise((resolve) => {
                let socket = new OnepayWebSocket(onepay.transaction);
                socket.connect(() => resolve());
            });
            socketSubscribePromise.then(function () {
                let qrImage = new Image();
                qrImage.src = " data:image/png;charset=utf-8;base64," + this.qrCodeAsBase64;
                let html = document.getElementById(htmlTagId);
                html.innerHTML = "";
                html.appendChild(qrImage);
            });
        };

        this.version = function () {
            return this.version;
        }
}

module.exports = Onepay;



