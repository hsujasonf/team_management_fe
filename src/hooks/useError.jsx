import { useState, useCallback } from "react";
import ErrorDisplay from "../components/ErrorDisplay";

function useError(timeout = 3000) {
  const [error, setError] = useState(null);

  const showError = useCallback(
    (message) => {
      setError(message);

      if (timeout > 0) {
        setTimeout(() => {
          setError(null);
        }, timeout);
      }
    },
    [timeout]
  );

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const renderError = error ? (
    <ErrorDisplay message={error} clearError={clearError} />
  ) : null;

  return [renderError, showError, clearError];
}

export default useError;
