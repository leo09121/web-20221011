document.getElementById("form_main").addEventListener('submit', search_message);

function search_message(event) {
    event.preventDefault(); // Prevent form submission
    alert("검색을 수행합니다!");
    let search_str = document.querySelector("#search_txt").value.toLowerCase(); // Get search input value and convert to lowercase
    let profanityWords = ["바보", "멍청이", "미친"]; // Profanity words to filter
    let searchLimitReached = false; // Flag to check if search limit is reached

    for (let i = 0; i < profanityWords.length; i++) {
        if (search_str.includes(profanityWords[i])) {
            alert("비속어가 포함되었습니다. 검색이 제한됩니다.");
            searchLimitReached = true;
            break;
        }
    }

  if (!searchLimitReached) {
        document.getElementById("search_message").innerText = "현재 검색어 : " + search_str;
        document.getElementById("form_main").submit();
    }
}