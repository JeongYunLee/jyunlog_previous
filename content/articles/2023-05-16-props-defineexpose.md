---
title: Nuxt3(Vue3)의 부모 컴포넌트와 자식컴포넌트 통신
tags: "Nuxt3"
date: 2023-05-16
description: Nuxt3(Vue3)의 부모 컴포넌트와 자식컴포넌트 간 변수, 함수를 주고 받는 법을 알아봅니다.
author: JeongYun Lee
draft: false
---

컴포넌트 구조를 만들었을 때, 부모자식 컴포넌트 간 변수나 함수를 전달해서 사용해야 할 때가 있다. 알고나면 간단하지만 처음에는 굉장히 헷갈렸다. 특히 자식 -> 부모인 경우 emits가 deprecated되어 잘 사용하지 않는다고 하니 아래 방법을 사용하는 것이 좋다. Nuxt3에서 사용하였으나 다른 환경도 비슷할 것 같다.

- 부모 -> 자식: defineProps 사용
- 자식 -> 부모: defineExpose 사용

### 1. 부모 -> 자식

부모 컴포넌트(parentComponent.vue)에서 자식 컴포넌트(childComponent.vue)를 사용하는 경우에 부모에서 정의된 `const scrollUp` 함수를 자식에서도 사용하고 싶은 경우를 가정한다.

```vue
### parentComponent.vue
<script setup>
// 함수 예시
const scrollUp = (id) => {
  try {
    const topPos = document.querySelector(id).offsetTop;
    const height = window.innerHeight + Math.abs(topPos);

    if (height > document.documentElement.scrollHeight) {
      document.body.style.height = `${height}px`;
      document.documentElement.style.height = `${height}px`;
    }

    window.scrollTo({
      top: topPos - 50,
      behavior: "smooth",
    });
  } catch (error) {
    setTimeout(() => {
      scrollUp(id);
    }, 100);
  }
};
</script>

<template>
  <childComponent :scrollUp="scrollUp" />
</template>
```

자식 컴포넌트 안에 `:자식 데이터 = "부모 데이터"` 값을 넣어준다. 이때 :가 붙는 쪽은 자식 데이터에서 받을 변수명(함수명)이고 = 뒤 값은 부모 데이터에서 보내는 변수명(함수명)이다. 즉, scrollUp을 보낼 때, 자식에서도 똑같이 scrollUp으로 받아도 되지만, 다른 이름으로 받고 싶은 경우에는 `:newScrollUp = scrollUp` 이런식으로 작성해도 된다는 것이다. 하지만 일반적으로 같은 이름으로 주고 받는 것이 혼란이 없을 것 같다.

```vue
### childComponent.vue
<script setup>
const props = defineProps({
  scrollUp: {
    type: Function,
    required: true,
  },
});
</script>
```

이렇게 보낸 함수를 자식 컴포넌트에서는 'defineProps'를 통해 받는다. 이때 type은 받은 변수가 Object인지, String인지, Array인지에 따라 구별해서 작성해주면 되고, 이 경우 함수이기 때문에 Function으로 작성한다. 그리고 자식 컴포넌트 내에서 받은 변수(함수)를 사용할 때, script 구문 안에서는 `props.scrollUp`으로 사용하고 template 안에서는 그냥 똑같이 scrollUp으로 사용하면 된다.

### 2. 자식 -> 부모

위와 동일하게 부모 컴포넌트(parentComponent.vue)에서 자식 컴포넌트(childComponent.vue)를 사용하는 경우이며, 자식에서 정의된 `commonCol`변수와 `commonDict` 변수를 자식에서도 사용하고 싶은 경우를 가정한다.

```vue
### childComponent.vue
<script setup>
const networkDataCommonCol = ref([]); // 빈 array 예시
const datasetLabelsCommonDict = ref({}); // 빈 dict 예시

defineExpose({
  commonCol,
  commonDict,
});
</script>
```

자식에서는 보내고 싶은 변수를 defineExpose안에서 작성해주기만 하면 된다.

```vue
### parentComponent.vue

<script setup>
const refCommon = ref({
  refCommonCol: {
    commonCol: [],
  },
  refCommonDict: {
    commonDict: {},
  },
});

// 사용예시
watch(
  () => refCommon.value.refCommonDict.commonDict,
  () => {
    newDataDict.value = getLinkedColsData(
      refColumnMatching.value.refNetworkGraph.datasetLabelsCommonDict
    );
  }
);
</script>

<template>
  <childComponent ref="refCommon" />

  ## 사용예시
  <div>
    <p v-if="refCommon.refCommonCol.commonCol.length > 1">
      {{ refCommon.refCommonDict.commonDict }}
    </p>
  </div>
</template>
```

부모네서는 자식에서 받은 변수/함수를 새로운 변수를 정의해서 받아야 한다. 자식 컴포넌트 부분에 `ref="새로운 변수"`를 작성해주는데, 이때 ref는 reference라는 의미이며 부모 함수에서 어떤 변수로 자식 변수/함수를 받아서 사용할 것인지를 정의하는 부분이다. 즉, 자식에서 받은 두개의 변수, commonCol과 commonDict를 부모컴포넌트에서는 refCommon으로 새롭게 정의(?)하겠다는 의미이다.

이후 script 부분에서는 refCommon를 정의해줘야 한다. 이때 자식 컴포넌트에서 몇개의 변수/함수를 받건 하나의 자식 컴포넌트에서 받은 것들은 하나의 변수, 여기서는 refCommon으로만 받고 이 내부에서 다시 refCommonCol, refCommonDict과 같이 구분해서 작성해주면 된다. 사실 편의에 따라서 refCommonCol 하나만 작성하고 이 하위에 `commonCol: [], commonDict: {}` 를 정의해줘도 아무 문제는 없지만 그냥 구분이 편하도록 구분해서 작성해줬다.

이렇게 정의를 하면 이제 형식에 맞게 사용해주기만 하면 된다. 형식은 다음과 같다. `refCommon.refCommonCol.commonCol` 정의한 변수명을 순서대로 . 으로 연결해서 작성하면 되고, script에서 사용할 때는 `refCommon.value.refCommonCol.commonCol`와 같이 value를 추가로 넣어주면 된다.
