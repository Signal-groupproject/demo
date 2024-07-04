<template>
  <div class="container">
    <h1>小曦 AI Chat</h1>
    <div id="chatLog" ref="chatLog">
      <div v-for="(message, index) in messages" :key="index">
        <strong>你:</strong> {{ message.user }}<br>
        <strong>小曦:</strong> {{ message.bot }}<br>
      </div>
    </div>
    <input v-model="inputText" @keyup.enter="sendChat" placeholder="输入您的消息">
    <button @click="sendChat">发送</button>
    <button @click="clearChat">清空聊天记录</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      inputText: '',
      messages: []
    };
  },
  methods: {
    sendChat() {
      if (this.inputText.trim() === '') return;

      const userMessage = this.inputText;
      this.messages.push({ user: userMessage, bot: '' });

      axios.post('https://aichat.api.ecylt.top', {q: userMessage})
          .then(response => {
            const botResponse = response.data.response.response;
            this.messages[this.messages.length - 1].bot = botResponse;
            this.scrollToBottom();
          })
          .catch(error => {
            console.error('Error:', error);
            this.messages[this.messages.length - 1].bot = '对不起，服务器出错了。';
            this.scrollToBottom();
          });

      this.inputText = '';
    },
    clearChat() {
      this.messages = [];
      this.$refs.chatLog.scrollTop = 0;
    },
    scrollToBottom() {
      this.$nextTick(() => {
        this.$refs.chatLog.scrollTop = this.$refs.chatLog.scrollHeight;
      });
    }
  }
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #2c3e50;
  color: #ecf0f1;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #34495e;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin-top: 50px;
}

h1 {
  text-align: center;
  color: #bdc3c7;
}

#chatLog {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #546e7a;
  border-radius: 5px;
  background-color: #2c3e50;
  height: 200px;
  overflow-y: auto;
  color: #ecf0f1;
}

#chatLog::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Edge */
}

#chatLog {
  -ms-overflow-style: none; /* IE 和 Edge */
  scrollbar-width: none; /* Firefox */
}

input {
  width: calc(100% - 110px);
  padding: 10px;
  border: 1px solid #546e7a;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 16px;
  background-color: #2c3e50;
  color: #ecf0f1;
}

button {
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;
}

button:hover {
  background-color: #2980b9;
}
</style>
