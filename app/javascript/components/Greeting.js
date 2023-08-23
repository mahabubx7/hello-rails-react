import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreeting } from "../redux/greeting/greetingSlice";
import { useEffect } from "react";

export default function Greeting() {
  const dispatch = useDispatch();
  const { greeting, loading } = useSelector((store) => store.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  // Objects are not valid as a React child (found: object with keys {message}). If you meant to render a collection of children, use an array instead.

  return (
    <>
    <div>
      <h1>Greetings</h1>
      <h2>{greeting.message}</h2>
    </div>
    </>
  )
}
