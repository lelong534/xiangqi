import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { io } from "socket.io-client";

createApp(App).mount('#app')

export const socket = io("localhost:3000");

socket.on("connect", () => {
  console.log("connected")
});

socket.on("disconnect", () => {
    console.log("disconnected")
});