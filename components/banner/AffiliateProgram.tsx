const AffiliateProgram = () => {
  return (
    <div>
      <div
        popover="auto"
        id="affiliate-program-presenter"
        className="affiliate-program-presenter"
      >
        <div className="affiliate-program-body">
          <img src="/assets/black/logo.png" alt="" />
          <p className="title">How to Join the Affiliate Program</p>
          <div className="affiliate-program">
            <div>
              <p className="title">1. Sign Up for the Program</p>
              <p className="sub">
                Create a verified Assetra account and register for the affiliate
                program through the Affiliate Dashboard.
              </p>
            </div>
            <div>
              <p className="title">2. Receive Your Referral Link</p>
              <p className="sub">
                Once approved, you’ll get a unique referral link to share with
                your audience.
              </p>
            </div>
            <div>
              <p className="title">3. Promote and Earn Commissions</p>
              <p className="sub">
                Share your referral link across platforms and start earning
                commissions for every successful referral.
              </p>
            </div>
            <div>
              <p className="title">4. Boost Your Earnings</p>
              <ul>
                <li>
                  Refer 10+ users for a <strong>2% commission boost</strong>.
                </li>
                <li>
                  Refer 50+ users for an <strong>additional 3% boost</strong>.
                </li>
              </ul>
            </div>
            <div>
              <p className="title">5. Track Your Progress</p>
              <p className="sub">
                Easily monitor clicks, sign-ups, and payouts in real time
                through the Affiliate Dashboard.
              </p>
            </div>
            <div>
              <p className="title">6. Get Paid Monthly</p>
              <p className="sub">
                Receive payouts in crypto or stablecoins every month, with gas
                fees included for seamless transactions.
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <a href="/referral" >
              Become an Affiliate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateProgram;
