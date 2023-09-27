---
title: <Mediawiki-2> Mediawiki 환경설정
tags: wikibase, mediawiki
date: 2023-08-10
description: Mediawiki의 기본적인 환경설정을 하는 방법을 알아봅니다.
author: JeongYun Lee
draft: false
---

<h1> <i>추가중입니다</i> </h1>

Wikibase의 환경설정은 대부분 LocalSettings.php에서 진행한다. LocalSettings.php는 도커 내부로 들어가야 하는데, 도커 데스트탑을 사용하는 경우, 토커 터미널에서 들어가거나 폴더 부분에서 var/www/html 경로에 있는 LocalSettings.php를 찾을 수 있다.

> terminal 명령어 예시
>
> - ls: 현재 경로의 전체 폴더와 파일 확인하기
> - cd .. : 뒷 경로로 이동
> - cd 경로명: 작성한 경로로 이동
> - apt-get-update: 설치 가능한 패키지 버전 업데이트
> - apt-get install 패키지 명: 패키지 설치 - 예) apt-get install vim: 수정 툴인 vim을 설치하라!
> - vi 파일명: 파일 수정 모드로 들어가기 -> i 누르면 수정모드 활성화 -> 수정한 내용이 있다면 :wq 눌러서 종료 --> 없다면 :qa 눌러서 종료
> - cat 파일명: 파일 전체 내용 확인하기 (확인만 가능)

### 1. Skin 변경하기

wikibase에서 제공하는 skin의 종류는 다양하고 그 리스트는 공식 사이트의 [Category:All_skins](https://www.mediawiki.org/wiki/Category:All_skins/ko)에서 확인할 수 있다.

다음은 Minerva_Neue 스킨으로 바꾸는 예시이다.

1. 우선 원하는 스킨 폴더가 있는지 확인해야 한다. cd var/www/html/skins 으로 들어가서 원하는 스킨 폴더가 있는지 확인하고 없다면 공식 사이트에서 스킨을 다운 받아서 해당 도커의 경로에 폴더를 넣어줘야 한다. 도커 내부에 파일이나 폴더를 넣는 터미널 코드는 다음과 같다.

```
docker cp 로컬경로/logo.png 컨테이너이름:도커내부경로
```

2. LocalSettings.php에서 다음 코드를 추가하거나 수정한다.

```php
wfLoadSkin( 'MinervaNeue' );
$wgDefaultSkin = 'minerva';
```

참고: [Skin:Minerva_Neue](https://www.mediawiki.org/wiki/Skin:Minerva_Neue)

### 2. Logo, Favicon 설정 (이미지파일 업로드)

로고나 파비콘을 설정할 때 모두 이미지 파일이 경로에 있어야 하고 LocalSettings.php의 `$wgEnableUploads = false;` 이 부분이 True로 설정되어 있어야 한다.

1. 로고 바꾸는 방법
   LocalSettings.php에서 다음 코드를 추가한다.

```php
$wgLogo = "$wgScriptPath/resources/assets/hike_logo.png"
```

2. 파비콘 바꾸는 방법
   LocalSettings.php에서 다음 코드를 추가한다.

```
$wgFavicon = "$wgScriptPath/resources/assets/favicon.ico";
```

참고: [블로그](https://zetawiki.com/wiki/미디어위키_파비콘_설정_$wgFavicon), [사이트1](https://www.hostknox.com/knowledgebase/638/How-to-change-the-logo-in-MediaWiki.html), [사이트2](https://www.siteground.com/kb/how_to_change_my_mediawiki_logo_image/)

### 3. SideBar 수정하기

사이드바는 해당 경로로 들어가면 "내 wikibase 도메인주소/wiki/MediaWiki:Sidebar" 다음과 같은 내용이 나온다.

```
* navigation
** mainpage|mainpage-description
** recentchanges-url|recentchanges
** Special:Log/delete|삭제 기록
** randompage-url|randompage
** helppage|help-mediawiki
* Category
** Special:AllPages|전체 문서
** https://labs.datahub.kr/wiki/Special:AllPages?from=&to=&namespace=120|전체 아이템 리스트
** Special:ListProperties|전체 속성 리스트
** Special:ListFiles|전체 파일 리스트
* Create
** Special:NewItem|새 아이템 생성
** Special:NewProperty|새 속성 생성
* SEARCH
* TOOLBOX
* LANGUAGES

```

간단히 설명하자면 \* 은 카테고리 제목을 의미하고 \*\* 은 하위 카테고리 제목을 의미한다.
|을 기준으로 앞에는 연결될 링크 혹은 wikibase의 페이지명 (예: Special:AllPages) 뒤에는 실제 사이드 바에 노출된 텍스트를 적어주소 저장한 뒤 제대로 적용됐는 지 확인하면 된다.

### 4. New Page (Page, Item, Porperty 등) 생성하기

### 5. Extension 추가히가

### 6. 메일 에러 고치기

### 7. 문서 대량 업로드

### 8. 문서 대량 삭제

### 9. 사용자 권한 설정
