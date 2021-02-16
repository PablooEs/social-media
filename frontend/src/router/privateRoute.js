function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/index", state: { from: props.location } }}
          />
        )
      }
    />
  );
}
export default PrivateRoute;
