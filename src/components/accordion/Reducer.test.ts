import {COLLAPSED, reducer, StateType} from "./Reducer";


test('reducer change collapsed true', () => {
//data
    const state: StateType = {
        collapsed: false
    }
    //action
    const newState = reducer(state, {type: COLLAPSED})
    //expection
    expect(newState.collapsed).toBe(true)
})

test('reducer change collapsed false', () => {
//data
    const state: StateType = {
        collapsed: true
    }
    //action
    const newState = reducer(state, {type: COLLAPSED})
    //expection
    expect(newState.collapsed).toBe(false)
})

test('reducer change collapsed fuck', () => {
//data
    const state: StateType = {
        collapsed: true
    }
    //action
    //expection

    expect(()=>{
        reducer(state, {type: 'fuck'})
    }).toThrowError()
})
