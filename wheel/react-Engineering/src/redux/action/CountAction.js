
export const incrementAC = (num)=>{
  return {type: "INCREMENT",payload: num}
}

export const decrementAC = (num)=>{
  return {type: "DECREMENT",payload: num}
}