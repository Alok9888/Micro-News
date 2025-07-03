import { useState } from "react";
import { FiMail } from "react-icons/fi";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call to subscribe
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In a real implementation, you would call your API here
      // const response = await subscribeToNewsletter(email);

      setSubscribed(true);
      setEmail("");
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="downloadPdf block" id="subscribe">
      <div className="container">
        <div className="dpRow">
          <div className="dpDetails">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Stay updated with the latest news and updates from our micro news portal.</p>

            {subscribed ? (
              <div className="alert alert-success">Thank you for subscribing to my newsletter!</div>
            ) : (
              <form onSubmit={handleSubscribe}>
                <div className="input-group mb-3">
                  <input type="email" className="form-control" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  <button className="btn btn-light" type="submit" disabled={loading}>
                    <FiMail />
                    {loading ? "Subscribing..." : "Subscribe"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
