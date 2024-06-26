// import { getUserPropertiesApi } from "@/firestore";
// import userStore from "@/mobx/userStore";
// import React, { useState, useEffect } from "react";

// export default function MyProperties() {
//   const [purchases, setProperties] = useState([]);
//   const user = userStore.user;
//   useEffect(() => {
//     getUserPropertiesApi(user.uid)
//       .then((resProps) => setProperties(resProps))
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   console.log({ purchases });
//   return (
//     <section className="mt-40">
//       <ul>
//         {purchases.map((prop, key) => (
//           <li key={key}>{JSON.stringify(prop)}</li>
//         ))}
//       </ul>
//     </section>
//   );
// }
