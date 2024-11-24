import React, {useState} from "react";




const Contact: React.FC = () => {
    //setting up this baby to ascend
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log({name, email, message});
    };


  return (
    <section className = "contact">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
          <input
            type = "text"
            placeholder = "Your Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        <label>Email</label>
          <input
            type = "email"
            placeholder = "Your Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        <label>Message</label>
          <textarea
            placeholder = "Your Message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        <button type="submit">Send Message</button>
      </form>
    </section>
  )
}

export default Contact