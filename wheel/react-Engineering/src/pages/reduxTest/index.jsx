import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Index() {
  const dispatch = useDispatch();
  const { count } = useSelector(state => state.CountRD);
  useEffect(() => {
    console.log(count);

    return () => {
      console.log("页面卸载");
    };
  }, []);

  return <div>{count}</div>;
}

export default Index;
