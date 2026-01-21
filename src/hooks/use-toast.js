import { useState, useEffect } from "react";

export const useToast = () => {
  const [toastData, setToastData] = useState(null);

  const toast = ({ title, description }) => {
    setToastData({ title, description });
  };

  // Automatically clear toast after 3 seconds
  useEffect(() => {
    if (toastData) {
      const timer = setTimeout(() => setToastData(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastData]);

  return { toast, toastData };
};