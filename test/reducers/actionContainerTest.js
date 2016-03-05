var reducer = require('../../src/reducers/actionContainer');

describe('actionContainer', () => {

  it('should not change the passed state', (done) => {

    const state = Object.freeze({});
    reducer(state, {type: 'INVALID'});

    done();
  });

  it('default state should be open', (done) => {

    let nextState = reducer(undefined, {type: 'INVALID'});

    assert.equal(true, nextState.isOpen);

    done();
  });

  it('should toggle between open and closed', (done) => {

    const state = Object.freeze({});

    let nextState = reducer(undefined, {type: 'INVALID'});

    assert.equal(true, nextState.isOpen);

    nextState = reducer(nextState, {type: 'TOGGLE_ACTION_CONTAINER'});

    assert.equal(false, nextState.isOpen);

    nextState = reducer(nextState, {type: 'TOGGLE_ACTION_CONTAINER'});

    assert.equal(true, nextState.isOpen);

    done();
  });

  it
});
