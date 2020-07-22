import React from "react";
import Link from "next/link";
import Router from "next/router";
const indexPage = () => (
  <div>
    <h1>The Main Page</h1>
    <p>
      go to <Link href="/auth">Auth</Link>
    </p>
    <button onClick={() => Router.push("/auth")}>go to auth</button>
  </div>
);

export default indexPage;
