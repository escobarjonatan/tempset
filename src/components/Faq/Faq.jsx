const Faq = () => (
  <section className="mt-11">
    <h2 className="font-bold sm:text-3xl text-xl">
      Frequently Asked Questions
    </h2>
    <dl
      className="mt-11 flex flex-wrap text-center items-start justify-center"
      title="Tempset HVAC Services Frequently Asked Questions"
    >
      <div className="sm:w-1/2 w-full px-2">
        <dt className="font-bold">
          What form of payment methods do you all accept?
        </dt>
        <dd className="mb-3">
          <p>We take cash, card and tap to pay.</p>
        </dd>
        <dt className="font-bold">
          Do I need to book an appointment or can I just walk in?
        </dt>
        <dd className="mb-3">
          <p>
            We take walk-ins 7 days a week. Feel free to ask your barber for our
            appointment link for faster service.
          </p>
        </dd>
      </div>
      <div className="sm:w-1/2 w-full px-2">
        <dt className="font-bold">
          How can I reschedule or cancel my appointment?
        </dt>
        <dd className="mb-3">
          <p>
            You should receive a confirmation text right after you book. Follow
            the instructions there to reschedule.
          </p>
        </dd>
        <dt className="font-bold">
          What is the best way to book an appointment?
        </dt>
        <dd className="mb-3">
          <p>
            Go to the barber section on this site and click on any barber, it
            should take you to our booking service. Upon arrival, let the barber
            know you are there for an appointment.
          </p>
        </dd>
      </div>
    </dl>
  </section>
);

export default Faq;
