---
title: Mac Python 가상환경 설정하기 
tags: mac, M2, Python 가상환경
date: 2023-04-11
description: Mac OS에서 Python 가상환경을 설정하고 접속하는 방법을 알아봅니다. 
author: JeongYun Lee
draft: false
---

1. 가상환경 만들기: `conda create -n 가상환경이름 python=원하는 파이썬 버전`
   ex. conda create -n python_venv python=3.8
2. 가상환경 시작하기: `conda activate wikibase`
   혹은 vscode에서 command+shift+p 눌러서 'Python: Select Interpreter'에 들어가서 원하는 가상환경을 선택해서 접속해도 됩니다.
3. 가상환경 나가기: `conda deactivate 가상환경이름`
4. python 버전 변경하기 ([참고자료](https://blog.naver.com/PostView.naver?blogId=hs929kr&logNo=222399156793&categoryNo=11&parentCategoryNo=0&viewDate=&currentPage=1&postListTopCurrentPage=1&from=search))

- source activate (가상환경명) : 가상환경 실행.
- python -V : 파이썬 버전 확인.
- conda search python : 사용 가능한 python list 확인.
- conda install python=x.x.x : 입력 버전으로 파이썬 버전이 변경됨.
- source deactivate
- source activate (가상환경명) : 가상환경 실행.
- python -V : 변경된 파이썬 버전을 확인할 수 있음.
