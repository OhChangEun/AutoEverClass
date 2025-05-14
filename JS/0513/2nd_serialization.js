// JSON 데이터
const jsonData = `
[
    {
        "name": "안유진",
        "age": 20,
        "isStudent": false,
        "courses": ["음악", "댄스", "연기"],
        "address": {
            "city": "서울",
            "zipcode": "12345"
        }
    },
    {
        "name": "가을",
        "age": 20,
        "isStudent": false,
        "courses": ["음악", "댄스", "연기"],
        "address": {
            "city": "서울",
            "zipcode": "12345"
        }
    },
    {
        "name": "레이",
        "age": 19,
        "isStudent": true,
        "courses": ["음악", "일본어", "연기"],
        "address": {
            "city": "서울",
            "zipcode": "12345"
        }
    }
]
`;

// JSON 문자열을 JavaScript 객체로 변환 (역직렬화)
const jsonObject = JSON.parse(jsonData);
console.log("객체로 변환된 데이터:", jsonObject);

// JavaScript 객체를 JSON 문자열로 변환 (직렬화)
const jsonString = JSON.stringify(jsonObject, null, 4);
// JSON.stringify(value, replacer, space);
// replacer: 어떤 속성을 포함시킬지 결정하는 함수 또는 배열
// space: JSON 문자열의 들여쓰기 수준 지정.
