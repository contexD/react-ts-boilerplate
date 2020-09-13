import React from "react";
export interface HelloWorldProps {
  userName: string;
  lang: string;
}

export default function App(props: HelloWorldProps) {
  return (
    <h1>
      Hi React {props.userName}! Welcome to {props.lang}!
    </h1>
  );
}
