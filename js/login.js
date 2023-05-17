function login(){
    let form = document.querySelector("#form_main");
    let id = document.querySelector("#floatingInput");
    let password = document.querySelector("#floatingPassword");
    let check = document.querySelector("#idSaveCheck");


    form.action = "../index_login.html";
    form.method = "get"
    

    if(check.checked == true) { // 아이디 체크 o
            alert("쿠키를 저장합니다.");
            setCookie("id", id.value, 1); // 1일 저장
            alert("쿠키 값 :" + id.value);
        } 
    else { // 아이디 체크 x
            setCookie("id", id.value, 0); //날짜를 0 - 쿠키 삭제
    }
    
function closePopup() {
        if (document.getElementById('check_id').value) {
            setCookie("id", "N", 1);
            console.log("쿠키를 설정합니다.");
            self.close();
        }
    }

    if(id.value.length === 0 || password.value.length === 0){
        alert("아이디와 비밀번호를 모두 입력해주세요.")
    }else{
        session_set(); //세션 생성
        form.submit();
        
    }
}

function session_check() { //세션 검사
    if (sessionStorage.getItem("Session_Storage_test")) {
        alert("이미 로그인 되었습니다.");
        location.href="index_login.html";
    }
}


function session_del() {//세션 삭제
    // Check if the sessionStorage object exists
    if (sessionStorage) {
        // Retrieve data
        sessionStorage.removeItem("Session_Storage_test");
        alert("로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.");
    } else {
        alert("세션 스토리지 지원 x");
    }
}

function logout(){
    session_del(); // 세션 삭제
    location.href='../index.html';
}


function get_id(){
    
    var getParameters = function(paramName){
    var returnValue;
    var url = location.href;
    var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&');
        for(var i = 0; i < parameters.length; i++) { 
            var varName = parameters[i].split('=')[0];
            
            if (varName.toUpperCase() == paramName.toUpperCase()) {
                returnValue = parameters[i].split('=')[1];
                return decodeURIComponent(returnValue);
            }
        }
};
alert(getParameters('id') + '님 방갑습니다!');
}

function deleteCookie(cookieName){
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() - 1);
    document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString();
}



function init(){ // 로그인 폼에 쿠키에서 가져온 아이디 입력
    let id = document.querySelector("#floatingInput");
    let check = document.querySelector("#idSaveCheck");
    let get_id = getCookie("id");
    
    if(get_id) { 
    id.value = get_id; 
    check.checked = true; 
    }
    session_check(); // 세션 유무 검사
}


function session_set() { //세션 저장
    let id = document.querySelector("#floatingInput");
    let password = document.querySelector("#floatingPassword");

    if (sessionStorage) {
        let en_text = encrypt_text(password.value);
        sessionStorage.setItem("Session_Storage_test", en_text);

        
    } else {
        alert("로컬 스토리지 지원 x");
    }
}

function session_get() { //세션 읽기
    if (sessionStorage) {
       return sessionStorage.getItem("Session_Storage_test");
    } else {
        alert("세션 스토리지 지원 x");
    }
}

function encodeByAES256(key, data){
    const cipher = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(""),
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
    });
    return cipher.toString();
}

function decodeByAES256(key, data){
    const cipher = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(""),
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
    });
    return cipher.toString(CryptoJS.enc.Utf8);
};
