export default function TermsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 px-4 sm:px-6">
      <div className="bg-[#1b263b] text-white text-sm w-full max-w-2xl rounded-lg shadow-lg p-6 relative max-h-[80vh] overflow-y-auto custom-scrollbar">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-xl text-gray-300 hover:text-red-500"
        >
          ✕
        </button>

        <h2 className="text-xl sm:text-1xl font-bold mb-4">
          📜 Terms and Conditions
        </h2>
        <p>
          By using the <strong>REM.Hub</strong> app (hereinafter referred to as
          "the App"), you agree to comply with the following Terms and
          Conditions. If you do not agree with these terms, please refrain from
          using the App.
        </p>

        <h3 className="text-lg font-semibold mt-4">1. General Usage</h3>
        <p>
          <strong>REM.Hub</strong> is a platform that allows users to download a
          variety of content including, but not limited to, software, ebooks,
          movies, injectors, and other digital resources. The App does not
          require any form of registration or collection of personal data. All
          content provided on the App is free to download and use.
        </p>

        <h3 className="text-lg font-semibold mt-4">
          2. No Registration or Personal Data Collection
        </h3>
        <p>
          The App does <strong>not require registration</strong> or the
          submission of any <strong>personal information</strong> to access or
          download the content. We do not collect or store any personal
          information, and there are no analytics, background trackers, or
          third-party data collection tools in use. The App operates entirely
          offline after installation and does not require any online accounts or
          personal details from users.
        </p>

        <h3 className="text-lg font-semibold mt-4">3. Ads and Monetization</h3>
        <p>
          The App may display ads to support its free content distribution
          model. These ads are displayed by third-party advertising networks. By
          using the App, you acknowledge and agree to the following:
        </p>
        <ul className="list-inside list-disc ml-6">
          <li>
            The ads are served by third-party ad networks and may be
            personalized based on your usage of the App.
          </li>
          <li>
            <strong>REM.Hub</strong> does not control the content or behavior of
            these third-party ads.
          </li>
          <li>
            The App may display <strong>Google AdSense</strong> ads or similar
            ads based on your interactions and preferences.
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-4">
          4. Content Availability and Permissions
        </h3>
        <ul className="list-inside list-disc ml-6 space-y-2">
          <li>
            <strong>REM.Hub</strong> hosts content compiled from the{" "}
            <strong>public domain</strong> or{" "}
            <strong>open-source educational repositories</strong>.
          </li>
          <li>
            The App does not host, sell, or license the content. All resources
            are freely accessible for download.
          </li>
          <li>
            The App does not claim ownership of any content made available
            through the platform.
          </li>
          <li>
            If you are the rightful owner of any content and would like it
            removed, please contact us, and we will promptly address the issue.
          </li>
        </ul>
        <p className="mt-4">
          <strong>Permissions:</strong> The App may request{" "}
          <strong>Storage Access</strong> permission to save downloaded files
          (such as ebooks or software) to your device for offline use. This
          permission is solely for enabling the App to function as intended, and
          the App does not access any other private data on your device.
        </p>

        <h3 className="text-lg font-semibold mt-4">5. Prohibited Use</h3>
        <p>
          By using <strong>REM.Hub</strong>, you agree not to:
        </p>
        <ul className="list-inside list-disc ml-6">
          <li>
            Use the App for any <strong>illegal</strong> or{" "}
            <strong>commercial purposes</strong>.
          </li>
          <li>
            Distribute or promote any content that violates intellectual
            property rights or is <strong>copyrighted</strong> unless the
            content is legally available for redistribution.
          </li>
          <li>
            Misuse the content, ads, or any materials available through the App
            for malicious purposes.
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-4">
          6. Data Security and Privacy
        </h3>
        <p>
          We do not collect, store, or share any personal data. Since the App
          does not require registration or any identifiable user information,
          there are no risks related to personal data breaches. Additionally:
        </p>
        <ul className="list-inside list-disc ml-6">
          <li>
            <strong>No Third-Party Analytics:</strong> The App does not use
            third-party analytics tools, meaning your usage data is not tracked.
          </li>
          <li>
            <strong>No Advertising Networks:</strong> We do not integrate any
            external advertising networks beyond the AdSense network to ensure
            the privacy and safety of users.
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-4">7. Changes to Terms</h3>
        <p>
          We reserve the right to update or modify these{" "}
          <strong>Terms and Conditions</strong> at any time without prior
          notice. All changes will be posted on this page, and continued use of
          the App after such modifications will constitute your acceptance of
          the new terms.
        </p>

        <h3 className="text-lg font-semibold mt-4">
          8. Limitation of Liability
        </h3>
        <p>
          The App is provided <strong>"as is"</strong> without any warranties or
          guarantees. We do not guarantee the functionality, availability, or
          future updates of the App. Any content downloaded through the App is
          at the user's own risk. <strong>REM.Hub</strong> is not liable for any
          loss, damage, or issues that may arise from using or downloading
          content via the App.
        </p>

        <h3 className="text-lg font-semibold mt-4">9. Contact Information</h3>
        <p>
          If you have any questions regarding the Terms and Conditions, content
          removal requests, or other inquiries, please contact us at:
          <strong> shambahan01@gmail.com</strong>
        </p>
      </div>
    </div>
  );
}
