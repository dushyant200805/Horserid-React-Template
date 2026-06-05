import { useEffect, useState } from "react";

function AlertMessage() {
  const [message, setMessage] = useState("");
  const [type, setType] = useState(""); // success / danger
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const successMessage = localStorage.getItem("successMessage");
    const errorMessage = localStorage.getItem("emailfailed");

    if (successMessage) {
      setMessage(successMessage);
      setType("success");
      setVisible(true);
      localStorage.removeItem("successMessage");
    } else if (errorMessage) {
      setMessage(errorMessage);
      setType("danger");
      setVisible(true);
      localStorage.removeItem("emailfailed");
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`alert alert-${type} alert-dismissible fade show position-absolute top-0 start-50 translate-middle-x alertmsg z-3`}
      role="alert"
    >
      {message}
      <button
        type="button"
        className="btn-close"
        onClick={() => setVisible(false)}
      ></button>
    </div>
  );
}

export default AlertMessage;