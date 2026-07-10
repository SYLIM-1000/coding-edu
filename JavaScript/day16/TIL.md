# 객체

## 학습 목표

- dom의 개념을 설명할 수 있다
- getElementById 를 사용할 수 있다
- querySelector, qeurySelectorAll 을 사용할 수 있다
- textContent와 innerHTML의 차이를 이해할 수 있다
- classList로 스타일을 변경할 수 있다

## 배열

여러 개의 값을 하나의 변수에 저장하는 자료 형. 배열은 API를 통해 DB에서 가져온다고.
어떤식으로 가져오는지. 순서는 어떻게 정해지는지 이런걸 규정하는 API는 어떻게 만드는지는 아직 궁금.
배열을 순서(index)를 가지며 0번부터 번호를 매김

## 배열 매서드 (추가 삭제 등)

- push() : 요소 끝에 추가. 배열 뒷부분.
- pop() : 마지막 요소를 제거.
- unsihft() : 요소를 앞에 추가. 배열 앞부분.
- shift() : 첫 번째 요소를 제거.
- splice() : 요소를 지정 위치에 추가/삭제
- concat() : 배열들을 합쳐서 새 배열 생성

## Fild

- 값 1개만 반환, 첫 번째만 반환

## Filter

- 배열 모두 반환. 모든 조건 만족

## some()

- 조건에 만족하는 데이터가 하나라도 있니?

## every()

- 모든 조건에 만족해야 해

## reduce()

- 배열의 값을 하나로 누적해서 계산할 때 사용

## dom

## getElementById("id")

- 해당 id의 값을 가져옴

## queryselector(".something")

- 해당 class나 id나 기타 등등의 값을 가져옴. 가장 먼저 나오는 1개만 가져옴

## queryselectorAll(".something")

- 해당 class나 id나 기타 등등의 값을 가져옴. 해당하는 모든 값을 가져옴
