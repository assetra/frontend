const Main = () => {
  return (
    <div className="main-container">
      <div className="main-body">
        <h1 className="text-3xl md:text-4xl font-bold text-center pb-3">
          Assetra Ambassador Program
        </h1>
        <p className="text-sm md:text-base py-4">
          Are you passionate about crypto and eager to help grow Assetra’s
          global presence? The Assetra Ambassador Program is your chance to
          represent Assetra, engage with the community, and promote our mission.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-6">
          Program Perks
        </h2>
        <ul className="list-disc list-inside py-2">
          <li>Exclusive bonuses and early access to new Assetra features.</li>
          <li>
            Invitations to private events, networking opportunities, and
            community meetups.
          </li>
          <li>Recognition as an official Assetra representative.</li>
          <li>
            Resources and support for hosting events and engaging with the
            community.
          </li>
          <li>Receive an exclusive Ambassador Badge.</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold mt-6">
          How to Become an Assetra Ambassador
        </h2>
        <ul className="list-decimal list-inside py-2">
          <li>
            <strong>Apply to Join:</strong> Submit your application and tell us
            why you’re a great fit.
          </li>
          <li>
            <strong>Get Approved:</strong> Receive an official onboarding kit
            with resources and guidelines.
          </li>
          <li>
            <strong>Promote Assetra:</strong> Share content, host events, and
            engage with the community.
          </li>
          <li>
            <strong>Earn Rewards:</strong> Get exclusive bonuses and early
            access to features.
          </li>
          <li>
            <strong>Grow with Assetra:</strong> Expand your influence and
            collaborate with our team.
          </li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold mt-6">
          Program Requirements
        </h2>
        <ul className="list-disc list-inside py-2">
          <li>
            Must have active social media accounts following Assetra on Twitter,
            LinkedIn, and Instagram.
          </li>
          <li>
            Must have successfully referred at least 10 people to Assetra before
            applying.
          </li>
          <li>Must be an active trader on Assetra’s platform.</li>
        </ul>

        <p className="text-sm md:text-base py-4 text-center">
          Ready to become an Assetra Ambassador? Apply now by clicking the
          button below.
        </p>

        <a
          className="btn btn-primary py-2 px-16 max-w-32 mx-auto"
          href="/ambassador/apply"
        >
          Apply
        </a>
        <div className="min-h-12"></div>
      </div>
    </div>
  );
};

export default Main;
