import subject from '../client/reducers/formReducer';

describe('Form reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      signUp: {
        firstName: '',
        email: '',
        username: '',
        password: '',
        confirmedPassword: '',
      },
      login: {
        username: '',
        password: '',
        validated: false,
        loginAttempts: 0,
        enterKeyPressed: false,
      },
      newPlans: {
        newLocation: '',
        country: '',
      },
      newActivity: {
        description: '',
        notes: '',
        address: '',
        link: '',
        completed: false,
      },
    };
  });
  describe('default state', () => {
    it('It should return default state when given undefined input', () => {
      expect(subject(undefined, { type: undefined })).toEqual(state);
    });
  });

  function newPayloadTargetAction(type, id, value) {
    return {
      type,
      payload: {
        target: {
          id,
          value,
        },
      },
    };
  }

  describe('Login Actions', () => {
    it('It should update username with value from login form', () => {
      const newState = subject(
        state,
        newPayloadTargetAction('LOGIN_INPUT', 'username', 'Rocio')
      );
      expect(newState.login.username).toEqual('Rocio');
    });

    it('It should update password with value from login form', () => {
      const newState = subject(
        state,
        newPayloadTargetAction('LOGIN_INPUT', 'password', '123')
      );
      expect(newState.login.password).toEqual('123');
    });
  });

  function newPayloadAction(type, name, value) {
    return {
      type,
      payload: {
        name,
        value,
      },
    };
  }

  describe('Signup Actions', () => {
    it('It should update username with value from signup form', () => {
      const newState = subject(
        state,
        newPayloadAction('SIGNUP_FORM_INPUT', 'username', 'Rocio')
      );
      expect(newState.signUp.username).toEqual('Rocio');
    });
    it('It should update firstName with value from signup form', () => {
      const newState = subject(
        state,
        newPayloadAction('SIGNUP_FORM_INPUT', 'firstName', 'Rocio')
      );
      expect(newState.signUp.firstName).toEqual('Rocio');
    });

    it('It should update email with value from signup form', () => {
      const newState = subject(
        state,
        newPayloadAction('SIGNUP_FORM_INPUT', 'email', 'Rocio@gmail.com')
      );
      expect(newState.signUp.email).toEqual('Rocio@gmail.com');
    });

    it('It should update password with value from signup form', () => {
      const newState = subject(
        state,
        newPayloadAction('SIGNUP_FORM_INPUT', 'password', '1234')
      );
      expect(newState.signUp.password).toEqual('1234');
    });
    it('It should update confirmed password with value from signup form', () => {
      const newState = subject(
        state,
        newPayloadAction('SIGNUP_FORM_INPUT', 'confirmedPassword', '1234')
      );
      expect(newState.signUp.confirmedPassword).toEqual('1234');
    });
  });

  describe('Validation', () => {
    it('It should update value of validated to true', () => {
      const newState = subject(state, { type: 'VALID_LOGIN', payload: true });
      expect(newState.login.validated).toEqual(true);
    });
  });

  describe('New Plans', () => {
    it('It should accept new plans location', () => {
      const newState = subject(
        state,
        newPayloadAction('NEW_LOCATION_INPUT', 'newLocation', 'Los Angeles')
      );
      expect(newState.newPlans.newLocation).toEqual('Los Angeles');
    });
  });

  describe('New Plans', () => {
    it('It should accept new plans country', () => {
      const newState = subject(
        state,
        newPayloadAction('NEW_LOCATION_INPUT', 'country', 'Abu Dhabi')
      );
      expect(newState.newPlans.country).toEqual('Abu Dhabi');
    });
  });

  // describe('New ')

  describe('Activities', () => {
    it('It should update value newActivity description', () => {
      const newState = subject(
        state,
        newPayloadAction(
          'ACTIVITY_FORM_INPUT',
          'description',
          'Fast times at Ridgemont High'
        )
      );
      expect(newState.newActivity.description).toEqual(
        'Fast times at Ridgemont High'
      );
    });
    it('It should update value newActivity notes', () => {
      const newState = subject(
        state,
        newPayloadAction(
          'ACTIVITY_FORM_INPUT',
          'notes',
          'Look for kittens and doggos to pet'
        )
      );
      expect(newState.newActivity.notes).toEqual(
        'Look for kittens and doggos to pet'
      );
    });
    it('It should update value newActivity address', () => {
      const newState = subject(
        state,
        newPayloadAction('ACTIVITY_FORM_INPUT', 'address', '123 Main St.')
      );
      expect(newState.newActivity.address).toEqual('123 Main St.');
    });
    it('It should update value newActivity link', () => {
      const newState = subject(
        state,
        newPayloadAction('ACTIVITY_FORM_INPUT', 'link', 'www.yahoo.com')
      );
      expect(newState.newActivity.link).toEqual('www.yahoo.com');
    });
    it('It should update value newActivity completed', () => {
      const newState = subject(
        state,
        newPayloadAction('ACTIVITY_FORM_INPUT', 'completed', true)
      );
      expect(newState.newActivity.completed).toEqual(true);
    });
  });
});
