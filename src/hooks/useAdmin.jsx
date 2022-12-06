import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(
        `https://doctors-portal-server-indol-ten.vercel.app/users/admin/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.isAdmin);
          setIsAdminLoading(false);
        })
        .catch((error) => console.log(error.message));
    }
  }, [email]);
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
