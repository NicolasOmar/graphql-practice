import React from "react";
import { gql, useMutation } from "@apollo/client";

import Button from "../components/button";
import { cartItemsVar } from "../cache";

export const BOOK_TRIPS = gql`
  mutation BookTrips($launchIds: [ID]!) {
    bookTrips(launchIds: $launchIds) {
      success
      message
      launches {
        id
        isBooked
      }
    }
  }
`;

const BookTrips = ({ cartItems }) => {
  console.warn(cartItems)
  const [bookTrips, { data }] = useMutation(BOOK_TRIPS, {
    variables: { launchIds: cartItems }
  });


  return data && data.bookTrips && !data.bookTrips.success ? (
    <p data-testid="message">{data.bookTrips.message}</p>
  ) : (
    <Button
      onClick={async () => {
        await bookTrips();
        cartItemsVar([]);
      }}
      data-testid="book-button"
    >

      Book All
    </Button>
  );
};


export default BookTrips;
