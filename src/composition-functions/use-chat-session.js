import { reactive, toRefs } from 'vue';

const mockMessages = [
  {
    id: '1',
    from: 'joe',
    time: new Date('02/01/2021'),
    text: 'wanna hear my new guitar riff?',
  },
  {
    id: '2',
    from: 'TinyTim',
    time: new Date('02/02/2021'),
    text: 'nah, sorry, im too busy sculpting my guns',
  },
  {
    id: '3',
    from: 'dougiefresh',
    time: new Date('02/03/2021'),
    text: 'lets hear it joe!',
  },
];

export default function useChatSession() {
  const state = reactive({
    messages: [...mockMessages],
    users: '', // idk if we need this?
    roomName: 'Dallas Vue Meetup',
    isConnected: false,
  });

  function joinChatSession(username) {
    // TODO: communicate with api
    state.isConnected = true;
    console.log(`${username} joined`);
  }
  function leaveChatSession(username) {
    // TODO: communicate with api
    state.isConnected = false;
    console.log(`${username} left`);
  }

  function sendMessage(m, username) {
    // TODO talk to api
    state.messages.push({ from: username, time: new Date(), text: m });
  }

  return {
    ...toRefs(state),
    join: joinChatSession,
    leave: leaveChatSession,
    sendMessage,
  };
}
