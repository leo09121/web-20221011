var search_array = []; // 빈 배열 – 전역 변수
var slangs = ["idiot", "바보", "멍청이"]; // 욕설 리스트

function search_message() { 
  let search_str = document.querySelector("#search_txt");
  if (search_str.value.length === 0) { // 문자 길이, 엄격한 비교
    alert("검색어가 비었습니다. 입력해주세요"); 
  } else if (slangs.includes(search_str.value.toLowerCase())) { // 욕설 체크
    alert(search_str.value + "는 검색어로 적절하지 않습니다.");
  } else {
    alert("검색을 수행합니다!");
    search_array.push(search_str.value); // 배열에 검색어 추가
    let text = document.getElementById("search_message").innerHTML = search_array.toString(); // 값 변환
    document.querySelector("#form_main").submit();
  }
}

document.getElementById("search_btn").addEventListener('click', search_message);
