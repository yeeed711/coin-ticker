# Coin-Tracker

> bithumb open API를 활용해 코인정보를 보여주는 웹 사이트입니다.

- URL : https://yeeed711.github.io/coin-tracker

<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/ReactQuery-FF4154?style=flat&logo=React Query&logoColor=white"> <img src="https://img.shields.io/badge/styled_components-DB7093?style=flat&logo=styled-components&logoColor=white"> <img src="https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=React Router&logoColor=white"> <img src="https://img.shields.io/badge/recoil-764ABC?style=flat&logo=recoil&logoColor=white">

## 기능

### 1. 코인 정보

- `실시간 시세`, `변동률(전일대비)`, `고가`, `저가`, `거래금액`을 보여줍니다.
- <img width="600" alt="스크린샷 2022-10-23 오전 12 01 23" src="https://user-images.githubusercontent.com/97894417/197346290-a7ca1fa7-2304-48f6-99ba-438fb4dac2ee.png">

### 2. 다크모드/라이트모드

- 기본적으로 `라이트모드`이며 버튼을 클릭하면 웹 페이지가 `다크모드`로 변경됩니다.
- |                                                                                  라이트모드                                                                                   |                                                                                   다크모드                                                                                    |
  | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
  | <img width="80" alt="스크린샷 2022-10-23 오전 12 02 34" src="https://user-images.githubusercontent.com/97894417/197346338-a8e54224-c0ba-4460-a77b-40c34ba3a518.png"> | <img width="80" alt="스크린샷 2022-10-23 오전 12 02 43" src="https://user-images.githubusercontent.com/97894417/197346343-de94c70e-11cb-42ad-844d-a782f69f8895.png"> |

### 3. 코인 상세 정보

- 코인을 클릭하면 상세정보 페이지로 넘어갑니다.
- 좌측에는 코인리스트를 볼 수 있으며, 우측에는 실시간 시세와 함께 캔들차트, 그래프 차트를 볼 수 있습니다.
  |캔들차트|그래프차트|
  |:---:|:---:|
  | <img width="600" alt="스크린샷 2022-10-23 오전 12 03 52" src="https://user-images.githubusercontent.com/97894417/197346401-be99b112-cf9d-48f9-84ae-e60c68273deb.png"> | <img width="600" alt="스크린샷 2022-10-23 오전 12 04 06" src="https://user-images.githubusercontent.com/97894417/197346410-cd6be074-f59a-41e1-9405-518f71b58b9f.png"> |

## 트러블슈팅

### 배열순회와 객체순회

- 빗썸 사이트에서 받아온 api응답값에 원하는 데이터 형태로 정제하는데 어려움을 겪었다.
- 단순히 배열안의 객체라면 `map`을 통해 배열을 순회하면 됐지만 객체라서 `Object` 메서드를 사용했다.
- 처음엔 키 값만 필요했기 때문에 `Object.keys`를 사용하여 순회하였다. 하지만 후에 객체의 `value`값이 필요해져 `entries`로 순회를 했는데 객체안에 또 다른 객체가 있어서 원하는 데이터에 접근하기 위해서는 객체를 두번 순회 해야만했다.
- 결과적으로 객체를 순회하는 다른 방법 중 하나인 `for in` 문을 사용해서 원하는 데이터에 접근할 수 있었다.

### 데이터의 정렬

- 시각화 차트를 구현하던 중 차트의 모양, 결과값이 기댓값과 달랐다.
- 받아온 데이터 안을 확인해보니 모든 데이터가 날짜를 기준으로 `오름차순` 되어있었다.
- 제일 최신 데이터를 사용하기 위해 데이터의 뒤에서 부터 100개를 잘라 사용했다.

### 직접 URL로 접근하면 사라지는 데이터들

- `Link`의 `state`속성 안에 `props`를 담아 다음 라우터 페이지에서 그 `props`를 사용 했었는데 직접 url을 작성해서 페이지에 접근할 경우 에러를 유발했다.
- `link`를 클릭해서 들어오는 경우에만 `props`를 사용할 수 있기 때문이었기에 `usePrams`를 사용하여 `pathname`을 가져오는 방식으로 해결했다.

### 데이터를 매 순간 불러오기

- 코인 시세는 실시간으로 계속 변하는 데이터기 때문에 이를 보여주기 위해서는 데이터를 계속해서 새로 불러와야했다.
- 기존에 `fetch`를 사용하면 `setInterval`같은 메서드를 사용해 계속해서 `fetch`를 해줘야한다.
- `react-qurey`를 사용했기에 내장 기능 중 하나인 `refetchInterval`을 사용하여 1초마다 데이터를 새로 불러오게했다.
