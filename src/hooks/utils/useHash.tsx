import { useEffect, useState } from "react";

const useHash = (): { hash: string } => {
  const [hash, setHash] = useState<string>(
    window.location.hash?.replace("#", "") || "",
  );

  useEffect(() => {
    const handleHashChange = (): void => {
      const hash = window.location.hash;
      if (hash) {
        const hashId = hash.replace("#", "");
        setHash(hashId);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return { hash };
};

export default useHash;
