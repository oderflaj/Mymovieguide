import React, { useState, useEffect } from "react";
import * as Network from "expo-network";

export const NetworkContext = React.createContext({ isConnected: true });

export class NetworkProvider extends React.PureComponent {
  state = {
    isConnected: true,
  };

  componentDidMount() {
    Network.addEventListener("connectionChange", this.handleConnectivityChange);
  }

  componentWillUnmount() {
    Network.removeEventListener(
      "connectionChange",
      this.handleConnectivityChange
    );
  }

  handleConnectivityChange = (isConnected) => this.setState({ isConnected });

  render() {
    return (
      <NetworkContext.Provider value={this.state}>
        {this.props.children}
      </NetworkContext.Provider>
    );
  }
}

/*
const NetworkProvider = () => {
  const [isConnected, setIsConnected] = useState(true);

  const handleConnectivityChange = (isConnected) => setIsConnected(isConnected);

  useEffect(() => {
    Network.getNetworkStateAsync().isInternetReachable.addEventListener(
      "connectionChange",
      handleConnectivityChange
    );

    // returned function will be called on component unmount
    return () => {
      Network.getNetworkStateAsync().isInternetReachable.removeEventListener(
        "connectionChange",
        handleConnectivityChange
      );
    };
  }, []);
  return (
    <NetworkContext.Provider value={this.state}>
      {this.props.children}
    </NetworkContext.Provider>
  );
};
*/
export default NetworkProvider;
