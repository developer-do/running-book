8 / 2 + 3 * (4 * 2 - 1);

let x = 3, y;
x += y = 6 * 5 / 2;
/* 이 표현식을 우선순위에 따라 다음에 일어날 행동에 괄호를 치겠습니다.
  x += y = (6 * 5) / 2
  x += y = (30) / 2
  x += y = 15
  할당. 우선순위 3, 오른쪽에서 왼쪽으로
  x += (y = 15)
  x += 15
  x = 3 + 15
  x = 18

*/