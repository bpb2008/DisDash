import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = "dev-qmjnwq7wrabmse2v.us.auth0.com";
  const clientId = "K7OqxvTN12C3zRQUVOH1sBNRxEGl3pEi";
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectURL={window.location.origin}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
