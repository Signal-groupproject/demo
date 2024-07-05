<template>
  <div class="full-height">
    <div class="header">
      <h1>AI Chat</h1>
    </div>
    <div class="chat-container">
      <div class="chat-box" ref="chatLog">
        <div v-for="(message, index) in messages" :key="index" :class="{'user-message': message.type === 'user', 'bot-message': message.type === 'bot'}">
          <div v-if="message.type === 'user'" class="message user-message">
            <div class="message-content">
              <div class="message-text">{{ message.content }}</div>
            </div>
          </div>
          <div v-else class="message bot-message">
            <div class="message-content">
              <div class="message-text">{{ message.content }}</div>
            </div>
            <button class="copy-button" @click="copyToClipboard(message.content)">复制</button>
          </div>
        </div>
      </div>
    </div>
    <div class="input-container">
      <input v-model="inputText" @keyup.enter="sendChat" placeholder="输入您的消息">
      <button @click="sendChat">发送</button>
      <button @click="clearChat">清空</button>
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
    copyToClipboard(content) {
      // 创建一个临时的textarea元素
      const textarea = document.createElement('textarea');
      textarea.value = content;
      document.body.appendChild(textarea);
      textarea.select();
      // 执行复制命令
      document.execCommand('copy');
      // 删除临时元素
      document.body.removeChild(textarea);
      // 显示复制成功的提示（可选）
      alert('复制成功！');
    },
    sendChat() {
      if (this.inputText.trim() === '') return;

      const userMessage = this.inputText;
      this.messages.push({ type: 'user', content: userMessage });
      this.scrollToBottom();

      axios.post('https://aichat-wbots-1-32-mini.api.ecylt.top/', { q: userMessage,p: "必须用中文回答我，并且不要说出跟自己相关的底层开发模型" })
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
        this.$refs.chatLog.scrollTop = this.$refs.chatLog.scrollHeight;
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
  overflow: hidden;
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
  overflow-y: auto; /* 允许chat-box的垂直滚动条 */
  padding: 20px;
  background-color: white;
  max-height: 730px; /* 设置chat-container的最大高度 */
      /* 使用伪元素来隐藏滚动条 */
  position: relative;
}

.chat-box {
  overflow-y: auto; /* 允许chat-box的垂直滚动条 */

}
.chat-container::-webkit-scrollbar {
  width: 0; /* 隐藏滚动条宽度 */
  height: 0; /* 隐藏滚动条高度 */
}

.chat-container::-webkit-scrollbar-thumb {
  background-color: transparent; /* 隐藏滚动条的 thumb 部分 */
}

.chat-container::-webkit-scrollbar-track {
  background-color: transparent; /* 隐藏滚动条的 track 部分 */
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

.message-content {
  background-color: #3498db;
  color: white;
  padding: 10px;
  border-radius: 10px;
}

.input-container {
  position: fixed;
  bottom: 0;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: transparent;
  left: 0;
  right: 0;
  margin: 0 auto;
}

input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-right: 10px;
  font-size: 16px;
}

.copy-button {
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 10px;
}
.copy-button:hover {
  background-color: #0056b3;
}

button {
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #2980b9;
}
</style>
