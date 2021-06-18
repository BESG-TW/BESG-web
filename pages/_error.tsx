import React, { useEffect } from "react";
import Router from "next/router";

const ErrorPage: React.FC = () => {
  useEffect(() => {
    Router.push('/');
  }, [])
  return (
    <div />
  )
}

export default ErrorPage;
