---
title: Nuxt로 만든 블로그에 utterances 댓글 기능 추가하기
tags: Nuxt utterances github
date: 2023-06-20
description: Nuxt로 만든 블로그에 github issue로 생기는 utterances 댓글 기능을 추가해봅니다.
author: JeongYun Lee
draft: false
---

> [참고 블로그](https://velog.io/@outstandingboy/Github-%EB%B8%94%EB%A1%9C%EA%B7%B8%EC%97%90-%EB%8C%93%EA%B8%80-%EA%B8%B0%EB%8A%A5-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0-ft.-Utterances)

Nuxt로 블로그를 만들어서 사용하고 있는데 가장 아쉬운 부분은 Like 버튼이나 댓글 기능이 없다는 것이였다. 찾아보니 github의 issue로 생성되는 utterances 라는 라이브러리는 가볍고 광고도 없이 간단하게 추가할 수 있다고 해서 추가해봤다.

### 1. Utterances 설치하기

이 [링크](https://github.com/apps/utterances)로 들어가서 Install 버튼을 누르면 된다. 설치가 된 경우 Install 버튼이 Configure로 바뀐다.

![repo-access](/blogImg/2023-06-20-1.png)
다음과 같이 레포를 선택하는 부분이 나온다. 댓글 기능을 추가하고 싶은 레포를 선택해서 진행하면 된다.

### 2. 설정하기

설치 후 설정 페이지로 이동해서 repo 부분에 계정명/저장소이름을 입력한다. Blog Post <--> Issue Mapping 부분에는 원하는 방법을 선택하면 된다. (Issue title contains page pathname으로 선택함)

Issue Label에는 이슈에 달릴 라벨을 적어주면 되는데, 구분될 수 있도록 comments로 적어주었다.

### 3. Nuxt 파일에서 설정하기

설정이 끝나면 아래와 같은 코드를 보여주고 copy를 하라는 버튼이 있을 것이다. 코드를 복사해서 본인의 블로그 파일로 넘어온다.

```javascript
<script
  src="https://utteranc.es/client.js"
  repo="JeongYunLee/jyunlog"
  issue-term="pathname"
  label="Comment"
  theme="github-light"
  crossorigin="anonymous"
  async
></script>
```

나의 경우 파일 구조가 layouts/default.vue 이므로 default.vue에 복사한 코드를 넣어주기만 하면됐다.

이렇게 정상적으로 표시되는 것을 확인!
![sucessful-result](/blogImg/2023-06-20-2.png)

댓글을 많이 많이 달아주세요~^_^~