export default function reducer(state = { user:{id:1,name:"xiaowang"}}, action) {
  const {user} = state
  switch (action.type) {
      // 这个case进行累加的过程
      case "UPDATENAME":
          user.name = action.payload
          return {...state, user}
      default:
          return state
  }
}