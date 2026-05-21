const faq = [
  {
    q: "How do I receive files?",
    a: "You will receive instant download access after payment."
  },
  {
    q: "Can I access on mobile?",
    a: "Yes. All files can be downloaded on mobile and desktop."
  },
  {
    q: "Is payment secure?",
    a: "Yes. All payments are securely processed."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-6">

      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="space-y-6">

          {faq.map((item, index) => (

            <details
              key={index}
              className="bg-[#1e293b] border border-gray-800 rounded-2xl p-6"
            >

              <summary className="cursor-pointer text-lg font-semibold">
                {item.q}
              </summary>

              <p className="text-gray-400 mt-4">
                {item.a}
              </p>

            </details>

          ))}

        </div>

      </div>

    </section>
  );
}