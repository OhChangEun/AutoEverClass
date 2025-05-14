let memberInfo = [
  {
    name: "이영지",
    age: 21,
    job: "래퍼",
    addr: "서울시 강남구 청담동",
  },
  {
    name: "미미",
    age: 24,
    job: "오마이걸",
    addr: "서울시 강남구 역삼동",
  },
  {
    name: "안유진",
    age: 20,
    job: "아이브",
    addr: "서울시 강북구",
  },
];

// 자바스크립트 객체를 JSON 문자열로 변환하기 : JSON.stringify
let json = JSON.stringify(memberInfo);
console.log(json);

// JSON 문자열을 자바스크립트 객체로 환원하기 : JSON.parse
let objectJson = JSON.parse(text);
console.log(objectJson);

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
