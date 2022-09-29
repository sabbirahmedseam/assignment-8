import React from "react";

const Ans = () => {
  return (
    <div>
      <p>
        <b>1.</b> React components work similarly to JavaScript functions as
        they accept arbitrary inputs called properties or props. It's possible
        to have as many components as necessary without cluttering your code
      </p>
      <p>
        <b>2.Props vs State:</b>Props are used to pass data from one component
        to another. The state is a local data storage that is local to the
        component only and cannot be passed to other components. The
        this.setState property is used to update the state values in the
        component.
      </p>
      <p>
        <b>3.</b>The argument of useEffect will indicate when the callback will
        run. If it’s empty, then it’s run when the component first loads. If
        it’s not, then it’ll watch the value changes of the items in the array
        and runs the callback when any of them change. We have to return a
        cleanup function to run clean up code if needed. Even if we don’t, we
        still need to return an empty function. To add a loading indicator when
        promises load, we can use the react-promise-tracker package to track
        that and render the loading indicator according to the state returned by
        this package.
      </p>
    </div>
  );
};

export default Ans;
