<template>
  <div class="full-height">
    <div class="header">
      <h1>小曦 AI Chat</h1>
    </div>
    <div class="chat-container" ref="chatContainer">
      <div class="chat-box" ref="chatLog">
        <div v-for="(message, index) in messages" :key="index" :class="{'user-message': message.type === 'user', 'bot-message': message.type === 'bot'}">
          <div v-if="message.type === 'user'" class="message user-message">
            <div class="message-content">
              <div class="message-text">{{ message.content }}</div>
              <div class="avatar">
                <img src="user_avatar.png" alt="User Avatar">
              </div>
            </div>
          </div>
          <div v-else class="message bot-message">
            <div class="avatar">
              <img src="ai_avatar.png" alt="AI Avatar">
            </div>
            <div class="message-content">
              <div class="message-text">{{ message.content }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="input-container">
      <input v-model="inputText" @keyup.enter="sendChat" placeholder="输入您的消息">
      <button @click="sendChat">发送</button>
      <button @click="clearChat">清空聊天记录</button>
    </div>
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
      this.messages.push({ type: 'user', content: userMessage });
      this.scrollToBottom();

      axios.post('https://aichat-wbots-1-32-mini.api.ecylt.top/', { q: userMessage })
        .then(response => {
          const botResponse = response.data.response.response;
          this.messages.push({ type: 'bot', content: botResponse });
          this.scrollToBottom();
        })
        .catch(error => {
          console.error('Error:', error);
          this.messages.push({ type: 'bot', content: '对不起，服务器出错了。' });
          this.scrollToBottom();
        });

      this.inputText = '';
    },
    clearChat() {
      this.messages = [];
    },
    scrollToBottom() {
      this.$nextTick(() => {
        this.$refs.chatContainer.scrollTop = this.$refs.chatContainer.scrollHeight;
      });
    }
  }
};
</script>

<style scoped>
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
}

.full-height {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header {
  text-align: center;
  padding: 20px;
  background-color: #3498db;
  color: white;
}

.chat-container {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background-color: white;
  max-height: calc(100vh - 160px);
}

.chat-container::-webkit-scrollbar {
  display: none; /* Chrome 和 Safari 隐藏滚动条 */
}

.chat-box {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.message {
  display: flex;
  align-items: flex-start;
  margin-left: auto;
  margin-right: auto;
  max-width: 70%;
  padding: 10px;
  border-radius: 10px;
}

.user-message {
  justify-content: flex-end;
  text-align: right;
}

.bot-message {
  justify-content: flex-start;
}

.avatar {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.message-content {
  background-color: #3498db;
  color: white;
  padding: 10px;
  border-radius: 10px;
}

.input-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #e5e5e5;
}

input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 16px;
}

button {
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #2980b9;
}
</style>
