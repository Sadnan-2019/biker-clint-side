import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    //     console.log("indsi user",user)
    const email = user?.user?.email;
    const currentEmail = { email: email };

    if (email) {
      fetch(`https://shrouded-beyond-12388.herokuapp.com/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentEmail),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const accessToken = data.token;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);
  return [token];
};
export default useToken;
