import React from "react";
import { useNavigate } from "react-router-dom";
import { deletePlayer } from "../api";
import styles from "../css/PlayerCard.module.css";


export default function SingleProfile({ user }) {
    return (
      <div class="container">
        <div class="card">
          <img src={user.photos} alt={`${user.first_name}'s Profile`} id="user-profile-image" />
          <p class="card__name">{user.first_name}</p>
          <div class="grid-container">
            <div class="grid-child-posts">
              <p>age: {user.age}</p>
            </div>
            <div class="grid-child-followers">
              <p>location: {user.location}</p>
            </div>
          </div>
          <ul class="social-icons">
            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="#"><i class="fa fa-codepen"></i></a></li>
          </ul>
          <button class="btn draw-border">Like</button>
          <button class="btn draw-border">Pass</button>
        </div>
      </div>
    );
  }