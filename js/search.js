document.getElementById("form_main").addEventListener('submit', search_message);

var search_array = []; // 빈 배열 – 전역 변수


function search_message(event) {
    event.preventDefault(); // Prevent form submission
    alert("검색을 수행합니다!");
       search_array.push(search_str.value); // 배열에 검색어 추가
       let text = document.getElementById("search_message").innerHTML = search_array.toString(); // 값 변환
        document.querySelector("#form_main").submit();
    }

