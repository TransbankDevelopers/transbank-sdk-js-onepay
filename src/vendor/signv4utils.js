const CryptoJS = require('./crypto-js');

class SigV4Utils {
    /**
     * utilities to do sigv4
     * @class SigV4Utils
     */
    constructor() {

    }

    static sha256(msg) {
            let hash = CryptoJS.SHA256(msg);
            return hash.toString(CryptoJS.enc.Hex);
        }

    static sign(key, msg) {
            let hash = CryptoJS.HmacSHA256(msg, key);
            return hash.toString(CryptoJS.enc.Hex);
        }

    static getSignatureKey(key, dateStamp, regionName, serviceName) {
            let kDate = CryptoJS.HmacSHA256(dateStamp, 'AWS4' + key);
            let kRegion = CryptoJS.HmacSHA256(regionName, kDate);
            let kService = CryptoJS.HmacSHA256(serviceName, kRegion);
            let kSigning = CryptoJS.HmacSHA256('aws4_request', kService);
            return kSigning;
        }
}

module.exports = SigV4Utils;
