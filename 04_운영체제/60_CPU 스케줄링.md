# CPU 스케줄링

- CPU 스케줄러는 CPU 스케줄링 알고리즘에 따라 프로세스에서 해야 하는 일을 스레드 단위로 CPU에 할당합니다.
- 프로그램이 실행될 떄는 CPU 스케줄링 알고리즘이 어떤 프로그램에 CPU 소유권을 줄 것인지 결정합니다.
- 해당 알고리즘은 CPU 이용률은 높게, 주어진 시간에 많은 일을 수행하도록, `Ready Queue`에 있는 프로세스는 적게, 응답시간은 짧게 설정하는 것을 목표로 합니다.

![image](https://user-images.githubusercontent.com/50647845/178168301-9a4cf44f-f3be-424b-8ef6-bd782f7bdd83.png)

- 프로세스는 작업을 완료할 때까지 다양한 상태가 되는데, 우리가 주목해야할 것은 `Waiting`입니다.
- 프로세스가 CPU를 점유하여 작업을 수행하는 도중 `I/O` 또는 `Interrupt`가 발생하면 일시적으로 프로세스는 CPU를 사용하지 않고 점유만 하고 있는 상황이 발생합니다.
- 위의 상황을 줄이고 CPU를 최대한 활용하면 시스템의 성능 개선을 꾀할 수 있는데, "어떻게 프로세스들이 CPU를 효율적으로 사용하게 할 것인가?" 라는 고민에서 CPU 스케줄링이 출발한다고 할 수 있다.

## 비선점형 (Non-Preemptive)

:::tip 정의
비선점형 방식은 프로세스가 스스로 CPU 소유권을 포기하는 방식입니다.
:::

- 한 프로세스가 CPU를 점유했다면 `I/O`나 `Interrupt` 발생 또는 프로세스가 종료될 때까지 다른 프로세스가 CPU를 점유하지 못하도록 합니다.
- 강제로 프로세스를 중지하지 않기에, 컨텍스트 스위칭으로 인한 부하가 적습니다.

### FCFS (First Come First Served)

:::tip 정의
가장 먼저 온 것을 가장 먼저 처리하는 알고리즘입니다.
:::

![image](https://user-images.githubusercontent.com/50647845/178171195-384e54bf-4a57-4c5d-b56d-75f25a6a6264.png)

> 대기 시간: P1 = 0, P2 = 24, P3 = 27  
> 평균 대기 시간: (0 + 24 + 27) / 3 = 17

![image](https://user-images.githubusercontent.com/50647845/178171292-76d7544c-4d33-47cc-bf77-0ddd223d5c69.png)

> 대기 시간: P1 = 6, P2 = 0, P3 = 3  
> 평균 대기 시간: (6 + 0 + 3) / 3 = 3

- 작업의 수행 순서에 따라 대기 시간이 변할 수 있습니다.
- 길게 수행되는 프로세스 때문에 '`Ready Queue`에서 오래 기다리는 현상(**convoy effect**)'이 발생한다는 단점이 있습니다.

### SJF (Shortest Job First)

:::tip 정의
실행 시간이 가장 짧은 프로세스를 가장 먼저 실행하는 알고리즘입니다.
:::

![image](https://user-images.githubusercontent.com/50647845/178171572-e274b345-38bd-4096-b61e-56e2145ad38c.png)

> 평균 대기 시간 = (0 + 6 + 3 + 7) / 4 = 4

- 한 번 CPU를 할당 받으면 자신의 CPU Burst Time이 끝나기 전에는 놓지 않습니다.
- 긴시간을 가진 프로세스가 실행되지 않는 현상(**starvation**) 이 발생합니다.
- 평균 대기시간이 가장 짧습니다.
- 그러나 실제로는 실행 시간을 알 수 없기에 과거의 실행했던 시간을 토대로 추측해서 사용합니다.

### 우선순위

:::tip 정의
미리 주어진 `Priority`에 따라 CPU를 할당하는 알고리즘입니다.
:::

- 기존 `SJF`는 스케줄링의 경우 긴 시간을 가진 프로세스가 실행되지 않는 현상이 있었습니다.
- 따라서 우선순위를 추가하여 단점을 보완하고자 하였습니다. 하지만 낮은 `Priority` 를 가진 `Process`는 전혀 수행되지 않아 또 다시 **Starvation**이 발생합니다.
- 할당을 기다리는 시간에 따라 `Priority`를 증가시켜 주는 **Aging**을 통해 단점을 보완할 수 있습니다. (`Aging`을 적용하면 비선점 형이 아닌 이제 선점형이 된다는 점에 유의)

## 선점형 (preemptive)

:::tip 정의
선점형 방식은 현대 운영체제가 쓰는 방식으로, 지금 사용하고 있는 프로세스를 알고리즘에 의해 중단시켜버리고 강제로 다른 프로세스에 CPU 소유권을 할당하는 방식을 말합니다.
:::

- CPU가 어떤 프로세스에 의해 점유 중일 때, 우선 순위가 높은 프로세스가 CPU를 차지할 수 있습니다.
- 우선 순위가 높은 프로세스를 빠르게 처리해야할 경우 유용합니다.
- 선점이 일어날 경우, 오버헤드가 발생하며 처리시간을 예측하기 어렵습니다.

### Round Robin

:::tip 정의
라운드 로빈은 현대 컴퓨터가 쓰는 스케줄링인 우선순위 스케줄링의 일종으로 각 프로세스는 동일한 할당 시간을 주고 그 시간 안에 끝나지 않으면 다시 준비 큐의 뒤로 가는 알고리즘입니다.
:::

![image](https://user-images.githubusercontent.com/50647845/178170119-780278ee-36a6-488e-8ab7-ffd366c33a17.png)

- 시분할 시스템의 성질을 활용한 방법입니다.
- 일정 시간을 `Time Quantum(Time Slice)`라고 부르며, 일반적으로 10 ~ 100msec 사이의 범위를 갖습니다.
- 한 프로세스가 종료되기 전에 time quantum이 끝나면 다른 프로세스에게 CPU를 넘겨주기 때문에 선점형 스케줄링의 대표적인 예시입니다.
- 할당 시간이 너무 크면 FCFS 가 되고 짧으면 컨텍스트 스위칭이 잦아져서 오버헤드, 즉 비용이 커집니다.
- 일반적으로 전체 작업 시간은 길어지지만 평균 응답시간은 짧아진다는 특징이 있습니다.

### SRF (Shortest Remaining (Time) First)

:::tip 정의
앞으로 실행시켜야 할 시간이 짧은 순서대로 프로세스를 수행하니다.
:::

![image](https://user-images.githubusercontent.com/50647845/178171737-01613c61-e8d7-4060-ad48-39c0e2a796c5.png)

> 평균 대기 시간: (9 + 1 + 0 + 2) / 4 = 3

- 현재 CPU에서 실행 중인 프로세스의 남은 `CPU Burst` 시간보다 더 짧은 `CPU Burst` 시간을 가지는 프로세스가 도착하면 CPU가 선점된다.
- 비교하자면, SJF는 중간에 실행 시간이 더 짧은 작업이 들어와도 기존 짧은 작엄을 모두 수행하고 그다음 짧은 작업을 이어갑니다.
- 반면 SRF는 중간에 더 짧은 작업이 들어모면 수행하던 프로세스를 중단하고 해당 프로세스를 수행하는 알고리즘입니다.

### Multi-level Queue

:::tip 정의
프로세스를 그룹으로 나누어, 각 그룹에 따라 `Ready Queue`를 여러 개 두고 각 큐마다 다른 알고리즘을 사용할 수 있습니다.
:::

![image](https://user-images.githubusercontent.com/50647845/178170306-42b1f884-f8f6-4e1f-94bb-2573a61d9eed.png)

- 즉, 준비 큐를 여러 개로 분할해 관리하는 스케줄링 방법이다.
- 큐 간의 프로세스 이동이 안되므로 스케줄링 부담이 적지만 유연성이 떨어지는 특징이 있습니다.
- Foreground Queue
    - `Interactive`한 동작이 필요한 Process를 위한 Queue
    - Round Robin 기법 사용
- Background Queue
    - CPU 연산 작업을 주로 수행하는 Process를 위한 Queue
    - FCFS 기법 사용

### Multi-level feedback Queue

:::tip 정의
Multi-level Queue에서 Process들이 서로 다른 Queue로 이동할 수 있도록 한 Scheduling 기법
:::

![image](https://user-images.githubusercontent.com/50647845/178170575-c878eadd-2c4d-4338-bf9e-da64796de0b0.png)

- 해당 알고리즘을 사용할 때 고려해야 할 사항은 다음과 같습니다.
    - Queue의 개수
    - 각 Queue마다의 Scheduling 기법
    - 언제 Process를 한 단계 높은 Queue로 옮길 것인가
    - 언제 Process를 한 단계 낮은 Queue로 옮길 것인가
    - 어떤 Process가 특정한 Service를 필요로 할 때 그 것을 제공하는 Queue로 옮겨줄 방법
- 큐에서 자신의 Time Quantum을 다 채운 프로세스는 밑으로 내려가고 자신의 Time Quantum을 다 채우지 못한 프로세스는 원래 큐 그대로 유지합니다.
    - 즉, 종료되지 않은 Process는 많은 CPU 작업을 필요로 하는 Process로 간주하여 충분한 CPU Time을 할당해주는 Scheduling 방법이다

### 참고자료

- [면접을 위한 CS 전공지식 노트:도서](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=292815727)
- [Preamtree의 행복로그:티스토리](https://preamtree.tistory.com/19)
- [WooVictory:github](https://github.com/WooVictory/Ready-For-Tech-Interview/blob/master/Operating%20System/CPU%20%EC%8A%A4%EC%BC%80%EC%A4%84%EB%A7%81.mdhttps://github.com/WooVictory/Ready-For-Tech-Interview)
