var createState = function () {
    return "SessionValueMakeItABitLongerdasdafasdfafggrgfvvyhyjhgkgkghhfnbvnbvgrdfgd54146dfgdg"
};

var createNonce = function () {
    return "NonceValuefghtffdgdfghhthfg123"
};

var signIn = function () {
    var redirectUri = "https://localhost:44305/Home/SignIn";
    var responseType = "id_token token";
    var scope = "openid ApiOne";
    var authUrl =
        "/connect/authorize/callback" +
        "?client_id=client_id_js" +
        "&redirect_uri=" + encodeURIComponent(redirectUri) +
        "&response_type=" + encodeURIComponent(responseType) +
        "&scope=" + encodeURIComponent(scope) +
        "&nonce=" + createNonce() +
        "&state=" + createState();

    var returnUrl = encodeURIComponent(authUrl);

    window.location.href = "https://localhost:44376/Auth/Login?ReturnUrl=" + returnUrl;
}