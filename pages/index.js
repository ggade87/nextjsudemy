import React from "react";
import Link from "next/link";
import Router from "next/router";
class IndexPage extends React.Component {
  static async getInitialProps(context) {
    console.log(context);
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ appName: "Super App" });
      }, 1000);
    });
    return promise;
  }
  render() {
    return (
      <div>
        <h1>The Main Page of {this.props.appName}</h1>
        <p>
          go to <Link href="/auth">Auth</Link>
        </p>
        <button onClick={() => Router.push("/auth")}>go to auth</button>
      </div>
    );
  }
}

export default IndexPage;
