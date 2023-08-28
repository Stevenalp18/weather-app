import { apiKey } from "../key";
import { currentApiExt, baseUrl, queryApiExt } from "../data";

export function currentDayData() {
  // const location = useSelector((state) => state.location.value);
  fetch("https://jsonplaceholder.typicode.com/todos/2")
    .then((res) => res.json())
    // .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
