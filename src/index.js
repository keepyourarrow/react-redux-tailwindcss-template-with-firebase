import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "./redux/store";
import { createFirestoreInstance } from "redux-firestore";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import firebase from "firebase/app";

import "./assets/css/index.css";
import App from "./App";

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

// to show everything only when we are connected to firebase Auth
// function AuthIsLoaded({ children }) {
//   const auth = useSelector((state) => state.firebase.auth);
//   if (!auth.isLoaded) return <div>Loading Screen...</div>;
//   return children;
// }

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      {/* <AuthIsLoaded> */}
      <App />
      {/* </AuthIsLoaded> */}
    </ReactReduxFirebaseProvider>
    ,
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
