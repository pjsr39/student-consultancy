'use client'

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Masters Abroad Consultancy</h1>

          <nav className="hidden md:flex gap-6 text-sm text-slate-600">
            <a href="#services" className="hover:text-cyan-400">Services</a>
            <a href="#countries" className="hover:text-cyan-400">Countries</a>
            <a href="#process" className="hover:text-cyan-400">Process</a>
            <a href="#faq" className="hover:text-cyan-400">FAQ</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-cyan-400 font-medium mb-3">
            For students planning Master&apos;s abroad
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Plan Your Master&apos;s Abroad With Confidence
          </h2>

          <p className="mt-6 text-slate-600 text-lg">
            We guide students in choosing the right country, university,
            and Master&apos;s program, and support them through applications,
            SOP, CV, scholarships, visa preparation, and pre-arrival planning.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-cyan-400 hover:bg-cyan-300 text-black px-6 py-3 rounded-lg font-medium"
            >
              Book Free Consultation
            </a>

            <a
              href="#services"
              className="bg-cyan-400 hover:bg-cyan-300 text-black px-6 py-3 rounded-lg font-medium"
            >
              Explore Services
            </a>
          </div>
        </div>

      <div className="relative">
        <img
          src="/images/students_and_campus.jpg"
          alt="Students studying abroad"
          className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
        />
      
        <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-5 rounded-xl shadow-lg max-w-sm">
          <h3 className="text-lg font-semibold mb-3">
            We help you with
          </h3>
      
          <ul className="space-y-2 text-sm text-slate-700">
            <li>✔ University selection</li>
            <li>✔ SOP & CV guidance</li>
            <li>✔ Scholarship support</li>
            <li>✔ Visa preparation</li>
          </ul>
        </div>
      </div>
      </section>

      {/* IMAGE STRIP */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Choose the Right Program",
              text: "Find Master's programs that match your academic profile and career goals.",
              image: "/images/choose_the_right_program.jpg"
            },
            {
              title: "Prepare Strong Documents",
              text: "Improve your SOP, CV, and application documents before submission.",
              image: "/images/prepare_strong_documents.png"
            },
            {
              title: "Move Abroad Smoothly",
              text: "Get guidance for visa, accommodation, travel, and student life.",
              image: "/images/move_abroad_smoothly.jpg"
            }
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-40 w-full object-cover rounded-xl mb-5"
              />
      
              <h3 className="text-lg font-semibold">{item.title}</h3>
      
              <p className="mt-2 text-sm text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-14">
        <p className="text-cyan-400 font-medium mb-2">Our Services</p>
        <h2 className="text-3xl font-semibold mb-10">
          Complete Support for Your Master&apos;s Application
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Profile Evaluation",
              text: "We assess your academic background, CGPA, experience, English level, and career goals."
            },
            {
              title: "University Shortlisting",
              text: "We shortlist suitable universities based on your profile, budget, and preferred country."
            },
            {
              title: "Course Selection",
              text: "We help you choose Master&apos;s programs aligned with your future career plans."
            },
            {
              title: "SOP & Motivation Letter",
              text: "We help you prepare a clear and convincing statement of purpose or motivation letter."
            },
            {
              title: "CV Review",
              text: "We improve your academic CV for international university applications."
            },
            {
              title: "Application Support",
              text: "We guide you through online applications, document uploads, and submission deadlines."
            },
            {
              title: "Scholarship Guidance",
              text: "We help identify scholarships, tuition waivers, and funding opportunities."
            },
            {
              title: "Visa Guidance",
              text: "We support you with visa documents, appointment preparation, and interview guidance."
            },
            {
              title: "Pre-Arrival Support",
              text: "We guide you with accommodation, travel, packing, and settling into student life abroad."
            }
          ].map((service) => (
            <div
              key={service.title}
              className="border border-slate-200 bg-slate-50 hover:bg-white/10 transition p-6 rounded-xl"
            >
              <h3 className="font-semibold text-lg">{service.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COUNTRIES */}
      <section id="countries" className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <p className="text-cyan-400 font-medium mb-2">Study Destinations</p>

          <h2 className="text-3xl font-semibold mb-4">
            Countries We Guide For
          </h2>

          <p className="text-slate-600 mb-10 max-w-3xl">
            We focus on popular and affordable destinations for international
            Master&apos;s students, especially in Europe.
          </p>

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
                className="border border-slate-200 bg-white/70 p-6 rounded-xl font-medium hover:border-cyan-400 transition"
              >
                {country}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="max-w-6xl mx-auto px-6 py-14">
        <p className="text-cyan-400 font-medium mb-2">Step-by-Step Process</p>

        <h2 className="text-3xl font-semibold mb-10">
          From Planning to Arrival
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-sm">
          {[
            {
              step: "1",
              title: "Profile Evaluation",
              text: "We understand your academic background, interests, budget, and goals."
            },
            {
              step: "2",
              title: "Shortlisting",
              text: "We shortlist countries, universities, and Master&apos;s programs."
            },
            {
              step: "3",
              title: "Documents & Application",
              text: "We help prepare SOP, CV, documents, and application submissions."
            },
            {
              step: "4",
              title: "Visa & Travel",
              text: "We guide you through visa preparation and pre-arrival steps."
            }
          ].map((item) => (
            <div key={item.step} className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-cyan-400 text-black flex items-center justify-center font-bold mb-4">
                {item.step}
              </div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p
                className="mt-2 text-slate-600"
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-2xl h-80 flex items-center justify-center text-slate-600 border border-slate-200">
            Add Student / University Photo Here
          </div>

          <div>
            <p className="text-cyan-400 font-medium mb-2">Why Choose Us?</p>
            <h2 className="text-3xl font-semibold mb-6">
              Practical Guidance for Serious Master&apos;s Applicants
            </h2>

            <p className="text-slate-600 mb-6">
              Applying for a Master&apos;s abroad can be confusing because every
              country, university, and program has different requirements. We
              simplify the process and help you avoid common mistakes.
            </p>

            <ul className="space-y-3 text-slate-600">
              <li>✔ Personalized guidance, not generic advice</li>
              <li>✔ Focus on suitable and realistic university options</li>
              <li>✔ Support for documents and application strategy</li>
              <li>✔ Guidance from planning stage to arrival abroad</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-cyan-400 font-medium mb-2">FAQ</p>

          <h2 className="text-3xl font-semibold mb-10">
            Common Questions
          </h2>

          <div className="space-y-5">
            {[
              {
                q: "Can I apply for a Master&apos;s abroad with a low CGPA?",
                a: "Yes, in many cases. The right country and university depend on your full profile, including grades, experience, English level, projects, and motivation."
              },
              {
                q: "Do I need IELTS for every country?",
                a: "Not always. Some universities accept alternative English proof, previous English-medium education, or other tests."
              },
              {
                q: "Can you help with scholarships?",
                a: "Yes. We guide students in identifying suitable scholarships and funding options based on their profile and destination."
              },
              {
                q: "When should I start preparing?",
                a: "Ideally, students should start 8 to 12 months before the intended intake."
              }
            ].map((faq) => (
              <div key={faq.q} className="bg-white/70 border border-slate-200 rounded-xl p-6">
                <h3
                  className="font-semibold"
                  dangerouslySetInnerHTML={{ __html: faq.q }}
                />
                <p
                  className="mt-2 text-slate-600 text-sm"
                  dangerouslySetInnerHTML={{ __html: faq.a }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-14">
        <div className="border border-slate-200 bg-slate-50 rounded-2xl p-8">
          <p className="text-cyan-400 font-medium mb-2">Get Started</p>

          <h2 className="text-3xl font-semibold">
            Book a Free Student Consultation
          </h2>

          <p className="mt-3 text-slate-600">
            Fill the form and we will contact you to discuss your Master&apos;s
            abroad plan.
          </p>

          <form
            className="mt-8 grid gap-4"
            onSubmit={async (e) => {
              e.preventDefault()

              const formData = new FormData(e.target as HTMLFormElement)

              const data = {
                name: formData.get("name"),
                email: formData.get("email"),
                phone: formData.get("phone"),
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
              required
              className="p-3 rounded bg-white border border-slate-200"
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="p-3 rounded bg-white border border-slate-200"
            />

            <input
              name="phone"
              placeholder="WhatsApp / Phone Number"
              className="p-3 rounded bg-white border border-slate-200"
            />

            <input
              name="country"
              placeholder="Preferred Country"
              className="p-3 rounded bg-white border border-slate-200"
            />

            <input
              name="course"
              placeholder="Desired Master&apos;s Course"
              className="p-3 rounded bg-white border border-slate-200"
            />

            <button className="bg-cyan-400 hover:bg-cyan-300 text-black py-3 rounded font-medium">
              Submit Enquiry
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-400">
        © 2026 Masters Abroad Consultancy. All rights reserved.
      </footer>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/918210022112"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-slate-900 px-5 py-3 rounded-full shadow-lg"
      >
        WhatsApp Chat
      </a>

    </main>
  );
}
