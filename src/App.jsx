import { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "What types of projects are suitable for your services?",
      a: "We handle warehouses, factories, PEB structures, multi-floor steel buildings, industrial sheds, and commercial steel construction projects.",
    },
    {
      q: "Do you handle both design and execution?",
      a: "Yes, AM Welding and Fabrication provides integrated solutions covering design coordination, fabrication and on-site execution.",
    },
    {
      q: "How is PEB construction better than conventional construction?",
      a: "PEB construction reduces project timelines, improves quality control, minimizes material wastage and allows flexible design options.",
    },
    {
      q: "Which areas do you serve?",
      a: "We are based in Hebbal Industrial Area, Mysuru and serve clients across Karnataka and neighboring states.",
    },
  ];

  return (
    <div className="font-sans text-gray-800">

      {/* TOP BAR */}
      <div className="bg-blue-900 text-white text-sm py-2 px-4 flex flex-wrap justify-between items-center gap-2">
       <div className="flex gap-6 flex-wrap">
  <span>📧 amweldingandfabricationwork@gmail.com</span>

  <a
    href="tel:+919844155244"
    className="hover:text-yellow-300 transition"
  >
    📞 +91 98441 55244
  </a>

  <a
    href="tel:+917411896336"
    className="hover:text-yellow-300 transition"
  >
    📞 +91 74118 96336
  </a>

  <span>📍 KIADB 428, Hebbal Industrial Area, Mysuru - 570016</span>
</div>
      </div>

      {/* NAVBAR */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <img src="/logo.png" alt="AM Welding Logo" className="h-14 w-auto" />
          <div className="hidden md:flex gap-8 font-semibold text-gray-700">
            {["home","about","services","projects","contact"].map(link => (
              <a key={link} href={`#${link}`} className="hover:text-blue-700 capitalize transition">{link === "home" ? "Home" : link.charAt(0).toUpperCase() + link.slice(1)}</a>
            ))}
          </div>
          <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white px-4 pb-4 flex flex-col gap-3 font-semibold text-gray-700 border-t">
            {["Home","About","Services","Projects","Contact"].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{link}</a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="bg-gradient-to-br from-blue-950 via-blue-800 to-blue-700 text-white py-32 px-4 text-center">
        <p className="text-blue-300 uppercase tracking-widest text-sm mb-3 font-medium">Welcome to AM Welding & Fabrication</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Building the Future<br />with <span className="text-yellow-400">Steel Precision!</span>
        </h1>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
          Specialists in Pre Engineered Buildings, Multi-Floor Steel Structures and Heavy Fabrication works across Karnataka.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#services" className="bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition text-lg">
            View Our Services
          </a>
          <a href="#contact" className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-blue-900 transition text-lg">
            Contact Us
          </a>
        </div>
      </section>

      {/* ABOUT */}
  {/* ABOUT + SERVICES WITH ONE BACKGROUND */}
<div
  className="relative bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/bg.jpg')" }}
>
  {/* dark overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* ABOUT */}
  <section id="about" className="relative py-20 px-4">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <img
          src="/1.png"
          alt="About AM Welding"
          className="rounded-2xl w-full object-cover shadow-xl"
        />
      </div>

      <div>
        <p className="text-blue-200 font-semibold uppercase tracking-widest text-sm mb-2">
          About Us
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-5 text-white">
          Smarter Steel Solutions for Modern Infrastructure
        </h2>

        <p className="text-gray-100 mb-4 leading-relaxed">
          AM Welding and Fabrication is a trusted construction solutions provider
          based in Mysuru, Karnataka. We specialize in Pre Engineered Buildings
          (PEB), multi-floor steel structures, and heavy structural fabrication —
          delivering modern, durable, and cost-efficient building solutions.
        </p>

        <p className="text-gray-100 mb-6 leading-relaxed">
          We are committed to shaping the future of construction through efficient
          methods, reliable materials and forward-looking solutions that support
          growth and scalability.
        </p>

        <ul className="grid grid-cols-2 gap-3 text-white font-medium">
          {[
            "High Quality & Safety Standards",
            "Flexible & Scalable Designs",
            "Faster Construction Timelines",
            "Cost Efficient Solutions",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="text-blue-500 font-bold">✔</span> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>

  {/* SERVICES */}
  <section id="services" className="relative py-20 px-4">
    <div className="max-w-7xl mx-auto">
      <p className="text-center text-blue-200 uppercase tracking-widest text-sm font-semibold mb-2">
        Our Services
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
        What We Offer
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            img: "/2.png",
            title: "Pre Engineered Buildings (PEB)",
            desc: "Pre Engineered Buildings are pre-designed, fabricated & erected matching exact customer requirements — ensuring they serve to the best of their design potential.",
          },
          {
            img: "/3.png",
            title: "Multi-Floor Steel Buildings",
            desc: "High Rise Steel Structures made of built-up beams & rolled steel sections forming columns, joists, floor beams & roof structures for multi-storey buildings.",
          },
          {
            img: "/4.png",
            title: "Structural Fabrication & Welding",
            desc: "Our Fabrication division is led by experienced structural engineers with versatile knowledge in designing structural members for heavy industrial and machine-support structures.",
          },
        ].map((s) => (
          <div
            key={s.title}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 group"
          >
            <div className="overflow-hidden h-52">
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {s.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
</div>

      {/* STATS */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-blue-300 uppercase tracking-widest text-sm mb-2">Our Facts</p>
          <h2 className="text-3xl font-bold text-center mb-12">Dream it, We Can Build It</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "150+", label: "Projects Completed" },
              { num: "100+", label: "Satisfied Clients" },
              { num: "10+", label: "Years Experience" },
              { num: "50+", label: "Expert Workers" },
            ].map(s => (
              <div key={s.label} className="bg-blue-800 rounded-2xl py-8 px-4 hover:bg-blue-700 transition">
                <div className="text-4xl font-bold text-yellow-400 mb-2">{s.num}</div>
                <div className="text-blue-200 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
    {/* WHY CHOOSE US + PROJECTS WITH SAME BACKGROUND */}
<section
  style={{
    backgroundImage: "url('/bg2.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
  className="py-20 px-4"
>
  {/* optional dark overlay */}
  <div className="bg-black/60 rounded-2xl">
    {/* WHY CHOOSE US */}
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center py-16 px-6">
      <div>
        <p className="text-white font-semibold uppercase tracking-widest text-sm mb-2">
          Why Choose Us
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          We're Committed to Quality
        </h2>

        <p className="text-gray-200 mb-6 leading-relaxed">
          At AM Welding and Fabrication, we don’t just build structures —
          we engineer performance-driven steel solutions designed for today’s
          fast-moving industrial and commercial needs.
        </p>

        <div className="grid grid-cols-2 gap-3">
          {[
            "Advanced Fabrication Technology",
            "Superior Quality & Durability",
            "Eco-Friendly Construction",
            "End-to-End Project Support",
            "Cost Efficient Solutions",
            "Custom Built to Your Needs",
            "Faster Project Delivery",
            "Trusted by Diverse Industries",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-white font-medium"
            >
              <span className="text-green-400 font-bold">✔</span>
              {item}
            </div>
          ))}
        </div>
      </div>

      <div>
        <img
          src="/5.png"
          alt="Why Choose AM Welding"
          className="rounded-2xl w-full object-cover shadow-xl"
        />
      </div>
    </div>

    {/* PROJECTS */}
    <div id="projects" className="max-w-7xl mx-auto py-16 px-6">
      <p className="text-center text-white uppercase tracking-widest text-sm font-semibold mb-2">
        Our Work
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
        Recent Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {["6.png", "7.png", "8.png", "9.png", "10.png", "11.png"].map(
          (img, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group"
            >
              <img
                src={`/${img}`}
                alt={`Project ${i + 1}`}
                className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
          )
        )}
      </div>
    </div>
  </div>
</section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-4 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-blue-300 uppercase tracking-widest text-sm font-semibold mb-2">Testimonials</p>
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { text: "AM Welding delivered a well-planned steel structure with excellent coordination and timely execution. Very professional.", client: "Industrial Project Client" },
              { text: "The PEB building solution was executed with great attention to quality. The structure is strong and perfectly suited to our needs.", client: "Warehouse Client" },
              { text: "From planning to installation, the team maintained clear communication and met every project deadline efficiently.", client: "Commercial Project Client" },
              { text: "Professional and transparent team. We appreciated their commitment to delivering a reliable and durable steel solution.", client: "Factory Client" },
            ].map((t, i) => (
              <div key={i} className="bg-blue-800 rounded-2xl p-6 border border-blue-700">
                <p className="text-blue-100 italic mb-4 leading-relaxed">"{t.text}"</p>
                <p className="font-bold text-yellow-400">— {t.client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

   {/* FAQ + CONTACT WITH SAME BACKGROUND */}
<section
  className="py-20 px-4 bg-cover bg-center bg-no-repeat relative"
  style={{
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/bg3.jpg')",
  }}
>
  <div className="max-w-7xl mx-auto relative z-10">

    {/* FAQ */}
    <div className="max-w-4xl mx-auto mb-20">
      <p className="text-center text-white uppercase tracking-widest text-sm font-semibold mb-2">
        FAQs
      </p>
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-white/20 rounded-xl overflow-hidden shadow-sm bg-white/10 backdrop-blur-sm"
          >
            <button
              className="w-full text-left px-6 py-4 font-semibold text-white flex justify-between items-center hover:bg-white/10 transition"
              onClick={() =>
                setOpenFaq(openFaq === i ? null : i)
              }
            >
              {faq.q}
              <span className="text-white text-2xl font-light ml-4">
                {openFaq === i ? "−" : "+"}
              </span>
            </button>

            {openFaq === i && (
              <div className="px-6 py-4 bg-black/20 text-white leading-relaxed border-t border-white/10">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>

    {/* CONTACT */}
    <div id="contact">
      <p className="text-center text-white uppercase tracking-widest text-sm font-semibold mb-2">
        Get In Touch
      </p>

      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        Contact Us
      </h2>

      <div className="grid md:grid-cols-2 gap-12">

        {/* LEFT */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-blue-700 text-white rounded-full p-3 text-xl shrink-0">
              📍
            </div>

            <div>
              <h4 className="font-bold text-white mb-1">
                Address
              </h4>
              <p className="text-white/90">
                KIADB 428, Hebbal Industrial Area,
                POST, Metagalli, Hebbalu,
                Karnataka 570016
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-blue-700 text-white rounded-full p-3 text-xl shrink-0">
              📧
            </div>

            <div>
              <h4 className="font-bold text-white mb-1">
                Email
              </h4>

              <a
                href="mailto:amweldingandfabricationwork@gmail.com"
                className="text-white hover:underline break-all"
              >
                amweldingandfabricationwork@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
  <div className="bg-blue-700 text-white rounded-full p-3 text-xl shrink-0">
    📞
  </div>

  <div>
    <h4 className="font-bold text-white mb-1">
      Phone
    </h4>

    <a
      href="tel:+919844155244"
      className="block text-white hover:underline"
    >
      +91 98441 55244
    </a>

    <a
      href="tel:+917411896336"
      className="block text-white hover:underline"
    >
      +91 74118 96336
    </a>
  </div>
</div>

          <div className="w-full h-64 rounded-2xl overflow-hidden shadow-md">
            <iframe
              title="Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.0!2d76.6200!3d12.3200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDIx!5e0!3m2!1sen!2sin!4v1620000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        {/* FORM */}
        <form
          className="bg-white/10 backdrop-blur-md rounded-2xl shadow-md p-8 space-y-5 border border-white/20"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent! We will contact you soon.");
          }}
        >
          {[
            {
              label: "Your Name",
              type: "text",
              placeholder: "Enter your name",
            },
            {
              label: "Email Address",
              type: "email",
              placeholder: "Enter your email",
            },
            {
              label: "Phone Number",
              type: "tel",
              placeholder: "Enter your phone number",
            },
          ].map((field) => (
            <div key={field.label}>
              <label className="block text-sm font-semibold text-white mb-1">
                {field.label}
              </label>

              <input
                type={field.type}
                required={field.type !== "tel"}
                placeholder={field.placeholder}
                className="w-full bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-semibold text-white mb-1">
              Message
            </label>

            <textarea
              required
              rows={4}
              placeholder="Describe your project..."
              className="w-full bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 active:scale-95 text-white font-bold py-3 rounded-lg transition text-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
      {/* FOOTER */}
      <footer className="bg-blue-950 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <img src="/logo.png" alt="AM Welding" className="h-16 mb-4" />
            <p className="text-blue-300 text-sm leading-relaxed">
              AM Welding and Fabrication is a trusted steel construction provider specializing in PEB, multi-floor buildings, and structural fabrication.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-yellow-400">Quick Links</h4>
            <ul className="space-y-2 text-blue-300">
              {[["Home","home"],["About Us","about"],["Services","services"],["Projects","projects"],["Contact","contact"]].map(([label, id]) => (
                <li key={id}><a href={`#${id}`} className="hover:text-white transition">{label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-yellow-400">Contact Info</h4>
            <p className="text-blue-300 text-sm mb-3">📍 KIADB 428, Hebbal Industrial Area, Metagalli, Karnataka 570016</p>
            <p className="text-blue-300 text-sm break-all">📧 amweldingandfabricationwork@gmail.com</p>
            <p className="text-blue-300 text-sm">
  📞 +91 98441 55244
</p>

<p className="text-blue-300 text-sm">
  📞 +91 74118 96336
</p>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-10 pt-6 text-center text-blue-400 text-sm">
          © 2026 AM Welding and Fabrication. All Rights Reserved.
        </div>
      </footer>

      {/* WHATSAPP FLOATING BUTTON */}
     <a
  href="https://wa.me/919844155244"
  target="_blank"
  rel="noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full w-14 h-14 flex items-center justify-center text-3xl shadow-lg hover:bg-green-600 hover:scale-110 transition z-50"
  title="Chat on WhatsApp"
>
  💬
</a>
    </div>
  );
}