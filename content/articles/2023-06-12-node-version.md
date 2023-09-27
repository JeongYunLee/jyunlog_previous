---
title: Mac에서 node 버전 바꾸는 방법 (with Hombrew)
tags: Mac node Hombrew
date: 2023-06-12
description: Mac에서 Homebrew를 활용해 node의 버전을 바꾸는 방법을 알아봅니다.
author: JeongYun Lee
draft: false
---

> 참고블로그: https://hanarotg.tistory.com/47

Nuxt 프레임워크를 활용한 프로젝트를 진행 중, yarn install을 했는데 전에 없던 node version error가 발생했다. 찾아보니 새로 설치한 다른 프로그램의 버전과 node의 버전이 맞지 않아서 발생한 문제 같았고 현재 설치된 node의 버전보다 다운그레이드 해야 하는 상황이었다.

### 1 `node -v`

우선 현재의 node version을 확인해보니 현재는 19.04였다.

### 2 `brew install node@16`

필요한 버전은 16.20.0이므로 homebrew를 사용해 설치해준다. (Homebrew설치와 관련된 설명은 [링크](https://iboxcomein.com/homebrew/)로 대체한다.)

### 3 `brew search node`

제대로 설치 되었는지 확인해보기 위해 실행해보면 설치된 노드 버전들에 체크 표시가 되어 있을 것이다.

### 4 ` brew unlink node`

기존에 연결되어 있는 19.04를 이제 새로 설치한 16.20.0으로 바꿔줘야 한다. 우선 기존의 버전을 unlink한다.

### 5 `brew link node@16`

이제 새로 설치된 16버전을 연결시켜준다.

---

여기까지 하고 `node -v`를 해서 버전을 확인했을 때 정상적으로 바뀌었으면 아무 문제 없지만, 필자의 경우 에러가 발생했고 버전 역시 바뀌지 않았다.

```markdown
## 에러

Error: Could not symlink bin/npm
Target /opt/homebrew/bin/npm
already exists. You may want to remove it:
rm '/opt/homebrew/bin/npm'

To force the link and overwrite all conflicting files:
brew link --overwrite node@18

To list all files that would be deleted:
brew link --overwrite --dry-run node@18
```

'/opt/homebrew/bin/npm'이걸 지우고 다시 link를 시도하면 된다고 해서 아래와 같이 진행해주었다.

```
rm '/opt/homebrew/bin/npm' '/opt/homebrew/bin/npx'
rm -rf '/opt/homebrew/lib/node_modules/npm'
```

하지만 여전히! version은 19였다. (뭐가 문제일까?!?!?!)

어쩔 수 없이 강제로 overwrite해주었다. 나중을 생각하면 되도록 이런 방법을 사용하고 싶지 않지만...안되니까...

```
brew link --overwirte node@16
```

이제 정상적으로 버전이 16.20.0으로 바뀌었다!
