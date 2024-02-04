import React from "react";

const UserContext = React.createContext()

export default UserContext;

/**
 * 
 * Context is implemented, now start making provider, Every context require provider to deal with.
 * 
 * Div
 *      userContext
 *          login
 *          card
 *             data
 *          /card
 *      /userContext
 * /div
 * 
 */