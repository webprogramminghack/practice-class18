import React from 'react';

type Address = {
  street: string;
  city: string;
  zip: string;
};

type UserProfileProps = {
  name?: string;
  age: number;
  address: Address;
};

export const UserProfile: React.FC<UserProfileProps> = ({
  name = 'Guest',
  age,
  address: { street, city, zip },
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <h2>Address:</h2>
      <p>
        {/* {address.street}, {address.city}, {address.zip} */}
        {street}, {city}, {zip}
      </p>
    </div>
  );
};
