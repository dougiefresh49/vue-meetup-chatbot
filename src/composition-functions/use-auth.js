import { reactive, toRefs } from 'vue';

const mockUsername = 'dougiefresh';

export default function useAuth() {
  const state = reactive({
    isSignedIn: false,
    username: mockUsername,
    token: '', // do we need this?
  });

  function signIn(_username) {
    // TODO: communicate with api
    state.isSignedIn = true;
    state.username = _username;
  }

  return {
    ...toRefs(state),
    signIn,
  };
}
