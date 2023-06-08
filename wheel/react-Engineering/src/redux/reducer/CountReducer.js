export default function reducer(state = { count: 1 }, action) {
  let { count } = state
  switch (action.type) {
      // 这个case进行累加的过程
      case "INCREMENT":
          count += action.payload
          return {...state, count}
      case "DECREMENT":
          count -= action.payload
          return {...state,count}
      default:
          return state
  }
}