# ✔ KITCHEN and DOGUE 사이트 클론코딩 (React Project)

## 🎯 목표

-   **React**를 사용해 재사용 가능한 component를 만드는 법을 익히자
-   **Sass**을 사용해 스타일링하는 법을 익히자
-   **JSONServer** API을 통해 REST API 기반 application을 만드는 연습을 하자
-   **Redux-Toolkit, React-Redux** 라이브러리를 사용해 중앙 집중형 상태 관리 방법을 익히자
-   **Redux-Toolkit Query** 모듈을 사용해 서버와 통신하는 법을 익히자
-   **React-Router** 라이브러리를 사용해 SPA(Single Page Application)을 구현하자
-   Responsive Application을 구현하자

## 🧩 실습 결과물

-   KITCHEN and DOGUE 사이트 링크: <http://www.kitchendogue.com/main/index>

-   참고1) Navbar와 Sidebar에서 'KITCHEN AND DOGUE', 'JERKY', 'BAR', 'PORRIDGE' 외 다른 링크들은 home page로 이동하게 했음
-   참고2) 'JERKY' 페이지 첫번째 상품 외 다른 상품들 링크는 home page로 이동하게 했음

### 1️⃣ Navbar

> `화면 너비 > 992px`일 때
> `화면 너비 <= 992px`일 때

### 2️⃣ Sidebar

### 3️⃣ HeroSlider

## 🎨 Flowchart & Structure

## 💥 이슈 및 해결과정

Slider component 하나로 다양한 기능을 가진 슬라이드를 구현하려다 보니, Slider component 내 코드가 100줄이 넘어갈 정도로 매우 heavy해졌다.
여러 슬라이드에 공통으로 존재하는 기능과 독립적으로 존재하는 기능을 구분하여, 공통으로 존재하는 기능은 Slider component에 넣고 반면 독립적으로 존재하는 기능은 상위 component(OverrideSlider, EndedSlider, InfiniteSlider)를 따로 각각 만들어주는 것이 좋겠다고 생각이 들었다.

## 📁 참고자료

-   [React Router](https://reactrouter.com/en/main)
