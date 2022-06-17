# AVL 트리

:::tip 정의
AVL(Adelson-Velsky and Landis tree)는 앞서 설명한 최악의 경우 선형적인 트리가 되는 것을 방지하고 스스로 균형을 잡는 이진 탐색 트리입니다.
:::

![image](https://user-images.githubusercontent.com/50647845/174201803-dc7718e1-8738-47f5-883a-7534225591dc.png)

- 트리의 높이가 h일 때 이진탐색트리의 계산복잡성은 O(h)이기 때문에 균형된 트리를 만들어 h를 줄이고자 하는 발상에서 비롯됐습니다.
- 두 자식 서브트리의 높이는 항상 최대 1 만큼 차이가 난다는 특징이 있습니다.
- 어떤 시점에서 높이 차이가 1보다 커지면 회전(rotation)을 통해 균형을 잡아 높이 차이를 줄입니다.
- 탐색, 삽입, 삭제 모두 시간복잡도가 O(logN)입니다.

## 균형 계수 (Balance Factor - BF)

![image](https://user-images.githubusercontent.com/50647845/174202371-0aa8e98f-9448-4776-a526-ed18404aba0a.png)

```
BalanceFactor = height(left subtree) - height(right subtree)
```

- 왼쪽 서브트리의 높이에서 오른쪽 서브트리의 높이를 뺀 것입니다.
- 두 서브트리의 높이가 같거나 잎새노드라면 BF는 0입니다(empty tree의 BF는 -1로 정의합니다).
- BF는 정수 범위 [-1, + 1]인데 노드 삽입 이후에 그래프의 균형 계수가 -1보다 작거나 +1보다 클 수 있습니다.
- 이 경우 회전을 통해 균형을 맞춰줄 수 있습니다.

## AVL의 회전 (rotation)

- 삽입 삭제 시 불균형 상태(BF가 -1 ,0, 1이 아닌 경우) 가 되면 AVL트리는 불균형 노드를 기준으로 서브트리의 위치를 변경하는 rotation 작업을 수행하여 트리의 균형을 맞추게 됩니다.
- 삽입 삭제시 노드들의 배열에 따라 4가지(LL, RR, LR, RL) 불균형이 발생할 수 있으며 각 상황마다 rotation에 방향을 달리하여 트리의 균형을 맞춥니다.

### LL(Left Left) case

- y는 z의 `왼쪽` 자식 노드이고, x는 y의 `왼쪽` 자식 노드인 경우 right rotation을 수행하여 균형을 맞춥니다.

![image](https://user-images.githubusercontent.com/50647845/174203434-476b6f9b-0efc-4954-958b-b2672db21a5e.png)

- y노드의 오른쪽 자식 노드를 z노드로 변경합니다.
- z노드 왼쪽 자식 노드를 y노드 오른쪽 서브트리(T2)로 변경합니다.
- y는 새로운 루트 노드가 됩니다.

::: details 구현하기
```c
struct node *lefttRotate (struct node *z) {
  struct node *y = z->right;
  struct node *T2 = y->left;

  // y의 왼쪽 자식 노드를 z로 지정
  y->left = z;
  
  // z의 오른쪽 자식 노드를 T2로 지정
  z->right = T2;

  // 새로운 루트 노드 y를 반환  
  return y;
}
```
:::

### RR(Right Right) case

y는 z의 `오른쪽` 자식 노드이고, x는 y의 `오른쪽` 자식 노드인 경우 left rotation을 수행하여 균형을 맞춥니다.

![image](https://user-images.githubusercontent.com/50647845/174203797-8d8e7939-bead-4e95-a161-26452b28377a.png)

- y노드의 왼쪽 자식 노드를 z노드로 변경합니다.
- z노드 오른쪽 자식 노드를 y노드 왼쪽 서브트리(T2)로 변경합니다.
- y는 새로운 루트 노드가 됩니다.

::: details 구현하기
```c
struct node *rightRotate (struct node *z) {
  struct node *y = z->left;
  struct node *T2 = y->right;

  // y의 오른쪽 자식 노드를 z로 지정
  y->right = z;
  
  // z의 왼쪽 자식 노드를 T2로 지정
  z->left = T2;
  
  // 새로운 루트 노드 y를 반환  
  return y;
}
```
:::

### LR(Left Right) case

y는 z의 `왼쪽` 자식 노드이고, x는 y의 `오른쪽` 자식 노드인 경우 left , right 순으로 총 두 번의 rotation을 수행하여 균형을 맞춥니다.

![image](https://user-images.githubusercontent.com/50647845/174203898-a1eed89c-16f6-47ca-80ec-25dc1cebe1e9.png)

::: details 구현하기
```c
y = z->left;
y = leftRotate(y);
z = rightRotate(z);
```
:::

### RL(Right Left) case

y는 z의 `오른쪽` 자식 노드이고, x는 y의 `왼쪽` 자식 노드인 경우, right, left 순으로 총 두번의 rotation을 수행하여 균형을 맞춥니다.

![image](https://user-images.githubusercontent.com/50647845/174203925-e112cee0-e29c-4b86-95d6-595be2d4c37b.png)

::: details 구현하기
```c
y = z->right;
y = rightRotate(y);
z = leftRotate(z);
```
:::

### 참고자료

- 주홍철.*면접을 위한 CS 전공지식 노트*.서울:길벗,2022.
- [yoongrammer](https://yoongrammer.tistory.com/72)
- [HyeminNoh](https://github.com/HyeminNoh/Tech-Stack)
