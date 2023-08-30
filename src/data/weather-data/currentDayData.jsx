import { apiKey } from "../key";
import { currentApiExt, baseUrl, queryApiExt } from "../data";
import { useSelector } from "react-redux";
import { useState } from "react";
// const location = useSelector((state) => state.location.value);

export async function getCurrentWeather(location) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${location}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
}
