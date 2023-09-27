<template>
  <div class="mb-6" id="typing-container">
    <div class="flex">
      <img src="https://em-content.zobj.net/source/microsoft-teams/337/waving-hand_1f44b.png" style="width: 10%" class="mt-4"/>
      <h2 class="ml-2 mt-8 text-4xl text-gray-700 font-bold capitalize dark:text-blue-200">
        <span v-show="textVisible">{{ text }}</span>
      </h2>
    </div>

    <p class="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200 text-justify">
      I’m JeongYun Lee, an undergraduate student majoring in department of LIS(Library and Information Science) and Data Science in Chung-Ang University, Seoul. 
      I’m going to write down my current learnings and as I am interested in various fields and topics, the content that I coverd will be diverse as well. 
      This blog will be a good record of my studyings and I hope it will be helpful for someone. Have a nice day!
    </p>
    
  </div>

</template>

<script>
export default {
  data() {
    return {
      text: '',
      textVisible: true,
    };
  },
  methods: {
    type() {
      const message = "Hi, 안녕하세요! ";
      let i = 0;
      const interval = setInterval(() => {
        this.text += message[i];
        i++;
        if (i > message.length - 1) {
          clearInterval(interval);
        }
      }, 100);
    },
  },
  mounted() {
    this.type();
  },
};
</script>

<style>
#typing-container span{
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0px solid; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  animation: 
    typing 3.5s steps(40, end),
    blink-caret 1s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: black; }
}
</style>




