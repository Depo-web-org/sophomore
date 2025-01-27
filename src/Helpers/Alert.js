export function newFunction(setShowAlert, setShowAlertError) {
    return (type, duration = 3000) => {
      if (type === 'success') {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, duration);
      } else if (type === 'error') {
        setShowAlertError(true);
        setTimeout(() => {
          setShowAlertError(false);
        }, duration);
      }
    };
  }
  