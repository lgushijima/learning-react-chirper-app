import { combineReducers } from "redux";
import tweets from "./tweets";
import users from "./user";
import authedUser from "./authedUser";

export default combineReducers({ authedUser, users, tweets });
