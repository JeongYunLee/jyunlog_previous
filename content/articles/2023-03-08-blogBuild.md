---
title: Nuxt와 TailwindCSS 템플릿으로 블로그 만들기
tags: wikibase, docker
date: 2023-03-08
description: Nuxt 프레임워크 사용부터 Netlify를 이용한 호스팅, Google Domain 설정까지 새 블로그 구축 과정에 대한 내용입니다. 
author: JeongYun Lee
draft: false
---

![jyunlog-main](/blogImg/2023-03-08-1.png)

새 블로그에 작성하는 첫 번째 게시물에는 해당 블로그 구축한 과정을 기록해보려 한다. 
Nuxt 프레임워크 사용부터 Netlify를 이용한 호스팅, Google Domain 연결까지의 내용을 정리하였다.

시작하기에 앞서 필자는 Nuxt 프레임워크를 처음 사용해봐서 설명한 내용 중 오류가 있을 수도 있다는 점 미리 양해를 구한다.

## Nuxt + Tailwinds CSS
### 1. 템플릿 선정
블로그를 구축할 때 완전 처음부터 구축할 자신이 없다면, 템플릿을 사용하는 것도 괜찮은 방법인 것 같다. 
깃헙과 여러 블로그 등 열심히 구글링을 해보다가 [Jamstack Themes](https://jamstackthemes.dev/)라는 사이트를 발견했다. 
Gastby, Next, Hugo등 여러 라이브러리와 다양한 CSS 종류로 만들어진 사이트 템플릿들이 전부 코드까지 공개되어 있다. 
React보다는 Vue가 조금은 더 익숙했고 원하는 기능들이 담겨 있는 [Nuxt+Tailwind 템플릿](https://github.com/mdrathik/nuxtjs-tailwind-blog)을 골랐다. 

### 2. GitHub repo 만들기 
고른 템플릿을 깃 클론 한 뒤, 새로 만들어준 깃헙 레포에 넣어준다. 

### 3. 내용 작성 + 디자인 수정하기
사실 Nuxt의 폴더 구조를 잘 알았으면 더 쉽게 수정했을 것 같긴 하지만 여러 파일들 열어서 이것저것 확인해봐도 이해할 수 있었다. 
그리고 [Nuxt 공식문서](https://nuxtjs.org/docs/get-started/installation)에서는 비교적 설명도 자세히 적어놓은 편인 것 같다. 
내가 이해한 선에서 자주 사용한 코드와 폴더를 정리한다. 

- `npm install`: 'package.json'은 프로젝트 관련 설정과 npm으로 install한 라이브러리들을 관리하는 파일로 라이브러리의 버전도 여기서 확인할 수 있다. 터미널에서 `npm install`을 하면 package-lock.json(package.json을 도와주는 역할을 한다고 함) 파일이 자동으로 생성된다. 
- **content/articles**: 블로그 글을 작성하는 폴더. md파일에 형식에 맞게 작성하면 된다. 
- **static**: 이미지 파일들을 저장하는 폴더. 앞서 md파일에 글을 작성할 때에도 반드시 static폴더 내부 경로로 연결해줘야 한다. 
- **assets**: main.css와 icon(svg파일)이 담겨있는 폴더
- `npm run generate`: dist폴더를 생성해주는 코드. dist는 이후 호스팅 할 때 필요한 폴더 이다. 

이 외에도 **components**, **pages** 폴더 안에는 여러 vue파일들이 있고 해당 파일에서 각 부분들의 요소들을 추가, 수정해주었다. 

### 4. git push
당연하지만 중간중간 연결된 레포에 저장해서 넣어주는 걸 잊지 말아야 한다. 
```
git add .
git commit -m "커밋 메세지"
git push
```

## Hosting + Google Domain 연결
### 1. Netlify 설정
![netlify-main](/blogImg/2023-03-08-2.png)
블로그 깃헙 레포를 [Netlify](https://www.netlify.com/)와 연결한다. 이때 deploy의 'Build command' 부분을 `nuxt generate`로 바꿔줘야 정상적으로 빌드된다. dist폴더가 정상적으로 생성되어 있는 지도 꼭 확인해야 한다. 

### 2. site name 설정
deploy가 정상적으로 완료된 뒤 접속할 때 url은 '문자+숫자조합.netlify.app' 으로 생성되어 있을 것이다. 
사이트 이름을 커스터마이징 하려면 site setting > change site name 에서 원하는 url이름을 지정하면 된다. 

### 3. Domain 설정
위 단계까지만 해도 되지만, 개인 도메인을 구매하여 가지고 있다면 설정해주면 된다. 
필자는 [Google Domain](https://domains.google/)을 구매하여 사용 중이다. (1년에 12$)

![google-domain](/blogImg/2023-03-08-3.png)
DNS탭에서 맞춤 레코드 설정을 해주면 되는데, 도메인 자체를 사이트 url로 사용하고 싶다면 유형을 'A'로 지정해줘야 한다. 이때 데이터에 적는 ip address가 왜 75.2.60.5인지는 모르겠지만...[netligy 공식문서](https://docs.netlify.com/domains-https/custom-domains/configure-external-dns/)에도 그렇고 다들 이렇게 해주고 있어서 넣어줬더니 잘 작동해서 그냥 사용했다. 

![netlify-domain](/blogImg/2023-03-08-4.png)
Google Domain을 설정한 후 Netlify domain setting을 해준다. 'Add domain alias'를 눌러서 각각 추가해준다. 

여기까지 해주면 기본적인 블로그 빌드는 끝이다! 
수정한 파일을 git push 할 때마다 netlify는 자동으로 deploy 해준다. 

정리하고 보니 간단한데, 막상 했을 때는 중간중간 버전 문제나 추가해주고 싶은 기능들 넣어주다가 생기는 오류 등...다양한 방면으로 막히는 부분들이 있었다. 아직 추가해주고 싶은 기능들이 많지만 사용하면서 하나씩 수정해줄거고 공유하면 좋을 내용들은 블로그에 작성할 예정~! 😎✨