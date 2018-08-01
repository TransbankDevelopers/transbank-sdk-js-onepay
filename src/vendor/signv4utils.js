/**
 * utilities to do sigv4
 * @class SigV4Utils
 */
function SigV4Utils() {
}

SigV4Utils.sign = function (key, msg) {
    let hash = CryptoJS.HmacSHA256(msg, key);
    return hash.toString(CryptoJS.enc.Hex);
};

SigV4Utils.sha256 = function (msg) {
    let hash = CryptoJS.SHA256(msg);
    return hash.toString(CryptoJS.enc.Hex);
};

SigV4Utils.getSignatureKey = function (key, dateStamp, regionName, serviceName) {
    let kDate = CryptoJS.HmacSHA256(dateStamp, 'AWS4' + key);
    let kRegion = CryptoJS.HmacSHA256(regionName, kDate);
    let kService = CryptoJS.HmacSHA256(serviceName, kRegion);
    let kSigning = CryptoJS.HmacSHA256('aws4_request', kService);
    return kSigning;
};