"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+49 160 1869831",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "alexeykrasnokutskiy@googlemail.com",
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    description: (
      <a
        href="https://www.linkedin.com/in/alexej-krasnokutskij-3a2920235/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:underline"
      >
        𝑪𝒍𝒊𝒄𝙠👆🏼
      </a>
    ),
  },
];

const inputClass =
  "w-full border border-white/10 rounded-lg px-5 py-4 text-sm text-white placeholder:text-white/30 outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300 hover:border-white/20";

const inputStyle = { background: "#1c1c22" };

type Status = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ firstname: "", lastname: "", email: "", phone: "", service: "", message: "" });
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">

          {/* ── FORM ── */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together 🤜🏼🤛🏽</h3>
              <p className="text-white/60">
                Are you looking for a passionate developer to bring your ideas to life?
                As a junior iOS and web developer, I'm eager to take on new challenges
                and help you create functional and user-friendly applications or websites.
                Fill out the form, and I'll get in touch to discuss how we can work
                together to bring your vision to life.
              </p>

              {/* Input fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  name="firstname"
                  type="text"
                  placeholder="Firstname"
                  value={form.firstname}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  style={inputStyle}
                />
                <input
                  name="lastname"
                  type="text"
                  placeholder="Lastname"
                  value={form.lastname}
                  onChange={handleChange}
                  className={inputClass}
                  style={inputStyle}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  style={inputStyle}
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                  style={inputStyle}
                />
              </div>

              {/* Service select */}
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className={`${inputClass} cursor-pointer ${form.service === "" ? "text-white/30" : "text-white"}`}
                style={inputStyle}
              >
                <option value="" disabled style={{ background: "#1c1c22", color: "rgba(255,255,255,0.3)" }}>Select a service</option>
                <option value="Web Development" style={{ background: "#1c1c22", color: "#ffffff" }}>Web Development</option>
                <option value="iOS Development" style={{ background: "#1c1c22", color: "#ffffff" }}>Xcode / iOS</option>
                <option value="Other" style={{ background: "#1c1c22", color: "#ffffff" }}>Other</option>
              </select>

              {/* Message */}
              <textarea
                name="message"
                placeholder="Type your message here."
                value={form.message}
                onChange={handleChange}
                required
                className={`${inputClass} h-[200px] resize-none`}
                style={inputStyle}
              />

              {/* Status messages */}
              {status === "success" && (
                <p className="text-accent text-sm font-semibold">
                  ✅ Message sent! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm font-semibold">
                  ❌ {errorMsg}
                </p>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="max-w-52 uppercase flex items-center justify-center gap-2 bg-accent text-primary font-bold px-8 py-4 rounded hover:bg-accent/80 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Send"}
              </button>
            </form>
          </div>

          {/* ── INFO ── */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;