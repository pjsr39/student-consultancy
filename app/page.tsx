'use client'

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HEADER */}
      <header className="border-b border-white/10 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">EU Study Consultancy</h1>
          <nav className="hidden md:flex gap-6 text-sm text-slate-300">
            <a href="#services">Services</a>
            <a href="#countries">Countries</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold leading-tight">
            Study in Europe
            <br />
            with Expert Guidance
          </h2>

          <p className="mt-6 text-slate-300">
            We help students secure admission in top European universities
            for Master's and higher studies. From university selection
            to visa approval — we guide you through every step.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#contact"
              className="bg-cyan-400 text-black px-5 py-3 rounded-lg font-medium"
            >
              Free Consultation
            </a>

            <a
              href="#services"
              className="border border-white/20 px-5 py-3 rounded-lg"
            >
              Our Services
            </a>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-8">
          <h3 className="text-lg font-semibold mb-4">Why Study in Europe?</h3>

          <ul className="space-y-2 text-slate-300">
            <li>✔ Affordable or free education</li>
            <li>✔ English-taught Master's programs</li>
            <li>✔ Global career opportunities</li>
            <li>✔ Work opportunities during studies</li>
            <li>✔ International exposure</li>
          </ul>
        </div>
      </section>


      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-semibold mb-10">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            {
              title: "University Selection",
              text: "Shortlisting universities based on your profile and career goals."
            },
            {
              title: "Application Support",
              text: "Guidance for applications, CV, SOP, and required documents."
            },
            {
              title: "Visa Assistance",
              text: "Complete visa documentation and interview preparation."
            },
            {
              title: "Scholarship Guidance",
              text: "Support in identifying scholarships and funding opportunities."
            },
            {
              title: "Accommodation Help",
              text: "Guidance for student housing and relocation."
            },
            {
              title: "Pre-Departure Support",
              text: "Travel preparation and student life guidance."
            }
          ].map((service) => (
            <div
              key={service.title}
              className="border border-white/10 bg-white/5 p-6 rounded-xl"
            >
              <h3 className="font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{service.text}</p>
            </div>
          ))}

        </div>

      </section>


      {/* COUNTRIES */}
      <section id="countries" className="bg-white/5 border-y border-white/10">

        <div className="max-w-6xl mx-auto px-6 py-20">

          <h2 className="text-3xl font-semibold mb-10">
            Popular Study Destinations
          </h2>

          <div className="grid md:grid-cols-5 gap-6 text-center">

            {[
              "Germany",
              "Portugal",
              "Poland",
              "France",
              "Netherlands"
            ].map((country) => (
              <div
                key={country}
                className="border border-white/10 bg-slate-900/50 p-6 rounded-lg"
              >
                {country}
              </div>
            ))}

          </div>

        </div>

      </section>


      {/* PROCESS */}
      <section id="process" className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-semibold mb-10">
          Admission Process
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-sm">

          <div className="bg-white/5 p-6 rounded-xl">
            <h3 className="font-semibold">1. Profile Evaluation</h3>
            <p className="mt-2 text-slate-300">
              We evaluate your academic background.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl">
            <h3 className="font-semibold">2. University Shortlisting</h3>
            <p className="mt-2 text-slate-300">
              Selecting universities suitable for your profile.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl">
            <h3 className="font-semibold">3. Application Submission</h3>
            <p className="mt-2 text-slate-300">
              Preparing and submitting your applications.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl">
            <h3 className="font-semibold">4. Visa & Travel</h3>
            <p className="mt-2 text-slate-300">
              Visa guidance until you reach Europe.
            </p>
          </div>

        </div>

      </section>


      {/* CONTACT FORM */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20">

        <div className="border border-white/10 bg-white/5 rounded-xl p-8">

          <h2 className="text-3xl font-semibold">Free Student Consultation</h2>

          <p className="mt-2 text-slate-300">
            Fill the form and our team will contact you.
          </p>

          <form
            className="mt-8 grid gap-4"
            onSubmit={async (e) => {

              e.preventDefault()

              const formData = new FormData(e.target as HTMLFormElement)

              const data = {
                name: formData.get("name"),
                email: formData.get("email"),
                country: formData.get("country"),
                course: formData.get("course"),
              }

              await fetch("/api/lead", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
              })

              alert("Your enquiry has been submitted!")
            }}
          >

            <input
              name="name"
              placeholder="Full Name"
              className="p-3 rounded bg-slate-900 border border-white/10"
            />

            <input
              name="email"
              placeholder="Email"
              className="p-3 rounded bg-slate-900 border border-white/10"
            />

            <input
              name="country"
              placeholder="Country"
              className="p-3 rounded bg-slate-900 border border-white/10"
            />

            <input
              name="course"
              placeholder="Desired Course"
              className="p-3 rounded bg-slate-900 border border-white/10"
            />

            <button
              className="bg-cyan-400 text-black py-3 rounded font-medium"
            >
              Submit
            </button>

          </form>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-white/10 py-6 text-center text-sm text-slate-400">
        © 2026 EU Study Consultancy
      </footer>


      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/918210022112"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg"
      >
        WhatsApp Chat
      </a>

    </main>
  );
}

