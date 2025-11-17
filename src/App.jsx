import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";

function App() {
  const [name1, setName1] = useState("");
  const [email1, setEmail1] = useState("");
  const [msg1, setMsg1] = useState("");
  const [opt1, setOpt1] = useState("");

  const send1 = (e) => {
    e.preventDefault();
  };

  const send2 = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ background: "black", color: "white", minHeight: "100vh", padding: "30px" }}>
      <Container>
        <h1 style={{ textAlign: "center", color: "white" }}>Formlar</h1>

        <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", justifyContent: "center" }}>

          <Card style={{ width: "380px", background: "#222", padding: "20px" }}>
            <h3 style={{ color: "white" }}>Controlled</h3>
            <Form onSubmit={send1}>
              <input type="text" value={name1} onChange={(e) => setName1(e.target.value)} placeholder="Ism" style={{ width: "100%", padding: 10, margin: "10px 0", background: "#444", color: "white", border: "none" }} />
              <input type="email" value={email1} onChange={(e) => setEmail1(e.target.value)} placeholder="Email" style={{ width: "100%", padding: 10, margin: "10px 0", background: "#444", color: "white", border: "none" }} />
              <textarea value={msg1} onChange={(e) => setMsg1(e.target.value)} placeholder="Xabar" style={{ width: "100%", padding: 10, margin: "10px 0", background: "#444", color: "white", border: "none", height: 100 }} />
              <select value={opt1} onChange={(e) => setOpt1(e.target.value)} style={{ width: "100%", padding: 10, margin: "10px 0", background: "#444", color: "white", border: "none" }}>
                <option value="">Tanlang</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
              <Button type="submit" style={{ width: "100%", marginTop: 15 }}>Yuborish</Button>
            </Form>
          </Card>

          <Card style={{ width: "380px", background: "#222", padding: "20px" }}>
            <h3 style={{ color: "white" }}>Uncontrolled</h3>
            <Form onSubmit={send2}>
              <input name="name" type="text" placeholder="Ism" style={{ width: "100%", padding: 10, margin: "10px 0", background: "#444", color: "white", border: "none" }} />
              <input name="email" type="email" placeholder="Email" style={{ width: "100%", padding: 10, margin: "10px 0", background: "#444", color: "white", border: "none" }} />
              <textarea name="message" placeholder="Xabar" style={{ width: "100%", padding: 10, margin: "10px 0", background: "#444", color: "white", border: "none", height: 100 }} />
              <select name="option" style={{ width: "100%", padding: 10, margin: "10px 0", background: "#444", color: "white", border: "none" }}>
                <option value="">Tanlang</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
              <Button type="submit" style={{ width: "100%", marginTop: 15 }}>Yuborish</Button>
            </Form>
          </Card>

        </div>
      </Container>
    </div>
  );
}

export default App;