<template>
  <div class="root">
    <nav class="header">
      <div class="header-title">{{ roomName }}</div>
    </nav>
    <div class="message-list">
      <div
        v-for="message in messages"
        :key="message.id"
        class="message-container"
        :class="{ mymessage: message.from === username }"
      >
        <div class="message">
          <div class="message-from">{{ message.from }}</div>
          <div class="message-bubble">
            <div class="message-bubble-text">{{ message.text }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="input-container">
      <div class="input-box">
        <div class="input-row">
          <textarea rows="1" v-model="data.newMessage" class="input" />
        </div>
      </div>
      <div class="btn-container">
        <button class="btn" @click="handleMessageSubmit">send</button>
      </div>
    </div>
  </div>
</template>

<script>
import useChatSession from '../composition-functions/use-chat-session.js';
import useAuth from '../composition-functions/use-auth.js';
import { reactive } from 'vue';

export default {
  name: 'Chatroom',
  // components: {
  //   HelloWorld,
  // },
  setup() {
    const { username } = useAuth();
    const {
      messages,
      users,
      roomName,
      join,
      leave,
      sendMessage,
    } = useChatSession();
    const data = reactive({
      newMessage: '',
    });

    function handleMessageSubmit() {
      console.log(`sending ${data.newMessage}`);
      sendMessage(data.newMessage, username);
      data.newMessage = '';
    }

    return {
      messages,
      users,
      roomName,
      join,
      leave,
      username,
      handleMessageSubmit,
      data,
    };
  },
};
</script>
<style scoped lang="css">
.root {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #202123;
}

.header {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  background-color: rgba(32, 33, 36, 0.96);
  height: 68px;
  max-height: 68px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 24px;
  color: #fff;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.45);
  z-index: 2;
}

.header-title {
  font-size: 24px;
  font-weight: 600;
}
.message-container {
  margin: 0 24px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.message-container.mymessage {
  align-items: flex-end;
}

.message {
  max-width: 55%;
  margin-top: 16px;
}
.message-from {
  color: #af5cf7;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  margin: 0 0 2px;
  padding: 0 16px;
  display: flex;
}

.mymessage .message-from {
  justify-content: flex-end;
}

.message-bubble {
  background-color: #3c4044;
  color: #fff;
  display: flex;
  width: 100%;
  margin-top: 2px;
  border-radius: 24px;
  padding: 10px 0;
}

.message-bubble-text {
  padding: 0 12px;
  min-height: 20px;
  position: relative;
  white-space: pre-wrap;
  width: 100%;
  word-break: break-word;
  word-wrap: break-word;
  outline: none;
  overflow: hidden;
}

.message-list {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  width: 100%;
  height: calc(100vh - 68px);
  padding-top: 68px;
  overflow-y: scroll;
  overflow-x: hidden;
}

.input-container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  margin: 0 24px;
  padding-bottom: 24px;
}

.input-box {
  display: flex;
  background-color: #3c4044;
  border-radius: 26px;
  max-width: 975px;
  width: calc(100% - 60px);
  padding: 6px 20px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.15), 0 4px 4px 0 rgba(0, 0, 0, 0.1),
    0 -0.1px 3px 0 rgba(0, 0, 0, 0.08);
}

.input-row {
  display: flex;
  flex-flow: 1;
  width: 100%;
}

.input {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #e8eaed;
  resize: none;
  position: relative;
  padding: 10px 0;
  resize: none;
  white-space: pre-wrap;
  width: 100%;
  word-break: break-word;
  word-wrap: break-word;
  z-index: 1;
  outline: 0;
  background-color: #3c4043;
  height: 20px;
  border: 0;
}

.btn-container {
  background-color: #3c4043;
  background-color: #3c4043;
  color: #e8eaed;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.15), 0 4px 4px 0 rgba(0, 0, 0, 0.1),
    0 -0.1px 3px 0 rgba(0, 0, 0, 0.08);
  height: 52px;
  margin-left: 8px;
  padding: 0;
  width: 52px;
  z-index: 1;
  border-radius: 26px;
}
.btn {
  height: 100%;
  width: 100%;
  position: static;
  border-radius: 50%;
  background-color: #3c4043;
  color: #e8eaed;
}
</style>
