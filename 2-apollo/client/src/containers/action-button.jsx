import React from "react";
import { gql, useMutation, useReactiveVar } from "@apollo/client";

import { GET_LAUNCH_DETAILS } from "../pages/launch";
import Button from "../components/button";
import { cartItemsVar } from "../cache";

export { GET_LAUNCH_DETAILS };

export const CANCEL_TRIP = gql`
  mutation cancel($launchId: ID!) {
    cancelTrip(launchId: $launchId) {
      success
      message
      launches {
        id
        isBooked
      }
    }
  }
`;

const CancelTripButton = ({ id }) => {
  const [mutate, { loading, error }] = useMutation(CANCEL_TRIP, {
    variables: { launchId: id },
    update(cache, { data: { cancelTrip } }) {
      // Update the user's cached list of trips to remove the trip that
      // was just canceled.
      const launch = cancelTrip.launches[0];
      cache.modify({
        id: cache.identify({
          __typename: "User",
          id: localStorage.getItem("userId")
        }),

        fields: {
          trips(existingTrips) {
            const launchRef = cache.writeFragment({
              data: launch,
              fragment: gql`
                fragment RemoveLaunch on Launch {
                  id
                }
              `
            });

            return existingTrips.filter(tripRef => tripRef === launchRef);
          }
        }
      });
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error occurred</p>;

  return (
    <div>
      <Button onClick={() => mutate()} data-testid={"action-button"}>
        Cancel This Trip
      </Button>
    </div>
  );
};

const ToggleTripButton = ({ id }) => {
  const cartItems = useReactiveVar(cartItemsVar);
  const isInCart = id ? cartItems.includes(id) : false;
  return (
    <div>
      <Button
        onClick={() => {
          if (id) {
            cartItemsVar(
              isInCart
                ? cartItems.filter(itemId => itemId !== id)
                : [...cartItems, id]
            );
          }
        }}
        data-testid={"action-button"}
      >
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </Button>
    </div>
  );
};

const ActionButton = ({ isBooked, id }) =>
  isBooked ? <CancelTripButton id={id} /> : <ToggleTripButton id={id} />;

export default ActionButton;
