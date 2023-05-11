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
        form.submit();
        get_id();
    }
}


function logout(){
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
}