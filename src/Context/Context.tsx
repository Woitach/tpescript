import React, { useState } from 'react';

type User = {
    name: string;
    username: string;
  }
const Informations = {
    UserName : "",
    setFilteredUsers : Function,
    filteredUser : Array<User>()
}
const Context = React.createContext(Informations);

export default Context;
export {Informations};