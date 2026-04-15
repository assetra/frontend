const Main = () => {
  return (
    <div className="main-container">
      <div className="main-body">
        <h1 className="text-3xl md:text-4xl font-bold text-center pb-3 ">
          What is Assetra for Businesses?
        </h1>
        <p className="text-sm md:text-base py-4">
          Are you a business that accepts or is interested in crypto payments?
          If so, Assetra for Businesses is designed just for you. We offer great
          perks to help you grow and earn more revenue through our Business
          Affiliate Program.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-6">
          Business Affiliate Program
        </h2>
        <p className="text-sm md:text-base py-2">
          Partner with Assetra to earn revenue from customer transactions and
          enjoy exclusive benefits.
        </p>

        <ul className="list-disc list-inside py-2">
          <li>
            Earn a share of the transaction fees whenever a customer makes a
            payment to your business through Assetra, including a 5% commission
            on trade fees from your referrals.
          </li>
          <li>
            Custom revenue-sharing programs for top-performing businesses.
          </li>
          <li>
            Track earnings and customer activity with a dedicated dashboard.
          </li>
          <li>
            Receive a special Business Badge for credibility and recognition.
          </li>
        </ul>

        <p className="text-sm md:text-base py-4">
        Want to enjoy these perks? Simply apply for an Assetra account for your organization by clicking the button below.
        </p>

        <a
          className="btn btn-primary py-2 px-16 max-w-32 mx-auto"
          href="/business/apply"
        >
          Apply
        </a>
      </div>
    </div>
  );
};

export default Main;
