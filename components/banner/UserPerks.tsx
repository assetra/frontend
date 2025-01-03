const UserPerks = () => {
  return (
    <div>
      <button
        popoverTarget="perks-presenter"
        className="flex items-center justify-center text-center text-sm text-white w-[100dvw] fixed top-12  min-h-6 h-auto  bg-red-600 z-50 cursor-pointer"
        type="button"
      >
        Join the first 10,000 users on Assetra to unlock exclusive perks—click
        here for more info!
      </button>

      <div popover="auto" id="perks-presenter" className="perks-presenter">
        <div className="perks-body">
          <img src="/assets/black/logo.png" alt="" />
          <p>Perks for Early Users</p>
          <ul>
            <li>Early access to new features, products, or token launches.</li>
            <li>Join private groups to share strategies and give feedback.</li>
            <li>Vote on platform updates and new features.</li>
            <li>Become a community leader (ambassador or moderator).</li>
            <li>Direct access to the Assetra leadership team.</li>
            <li>Help shape branded merchandise designs.</li>
            <li>Earn a unique "Early Adopter" badge.</li>
            <li>
              Be featured in the exclusive "Founding Members" section on the
              platform
            </li>
          </ul>
          <p>How to Get Perks?</p>
          <ol>
            <li>Sign up on Assetra.</li>
            <li>Verify your account.</li>
            <li>Connect your wallet.</li>
            <li>Use at least $10 to swap, buy, or sell cryptocurrency.</li>
            <li>Refer a friend</li>
          </ol>

          <button type="button">Become a Founding Member</button>
        </div>
      </div>
    </div>
  );
};

export default UserPerks;
